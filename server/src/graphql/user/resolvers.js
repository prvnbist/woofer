const User = require('../../models/user')
const Woof = require('../../models/woof')
const { UserInputError } = require('apollo-server-express')

module.exports = {
   MutationResponse: {
      __resolveType(response) {
         if (response.user) {
            return 'UserResponse'
         } else if (response.woof) {
            return 'WoofResponse'
         }
         return null
      }
   },
   User: {
      followers: async parent => {
         const users = await parent.followers.map(id => User.findById(id))
         return users
      },
      following: async parent => {
         const users = await parent.following.map(id => User.findById(id))
         return users
      }
   },
   Query: {
      user: async (_, { id }) => {
         try {
            const user = await User.findById(id)
            if (user) {
               return user
            }
            throw new Error('No user found!')
         } catch (error) {
            throw new Error(error.message)
         }
      }
   },
   Mutation: {
      createUser: async (_, { input }) => {
         try {
            const user = await User.create(input)
            user.username = user.id.slice(-12)
            user.save()
            return {
               code: '200',
               success: true,
               message: 'User create successfully',
               user
            }
         } catch (error) {
            throw new UserInputError(error.message)
         }
      },
      updateUser: async (_, { input }) => {
         try {
            const { id, ...fields } = input

            // Check if new username is same as existing
            if (fields.username) {
               const { username } = await User.findById(id)
               if (fields.username === username) {
                  throw new Error("New username can't same as existing!")
               }
            }

            // Check if username is already taken
            if (fields.username) {
               const userExists = await User.findOne({
                  username: fields.username
               })
               if (userExists) {
                  throw new Error('Username already taken')
               }
            }

            // Update user details
            const user = await User.findByIdAndUpdate(
               id,
               { ...fields },
               { new: true }
            )
            return {
               code: '200',
               success: true,
               message: 'User updated successfully!',
               user
            }
         } catch (error) {
            throw new UserInputError(error.message)
         }
      },
      deleteUser: async (_, { id }) => {
         try {
            const user = await User.findByIdAndUpdate(id, { isActive: false })
            await user.woofs.map(async id => {
               const woof = await Woof.findByIdAndUpdate(id, {
                  isActive: false
               })
               return woof
            })
            return {
               code: '200',
               success: true,
               message: 'User deleted successfully!'
            }
         } catch (error) {
            throw new UserInputError(error.message)
         }
      },
      followUser: async (_, { followerId, followingId }) => {
         try {
            const me = await User.findByIdAndUpdate(
               followerId,
               {
                  $inc: { followingCount: 1 },
                  $push: { following: followingId }
               },
               { new: true }
            )
            const them = await User.findByIdAndUpdate(
               followingId,
               {
                  $inc: { followersCount: 1 },
                  $push: { followers: followerId }
               },
               { new: true }
            )
            return {
               code: '200',
               success: true,
               message: `You've followed ${them.name}`,
               user: me
            }
         } catch (error) {
            throw new UserInputError(error.message)
         }
      }
   }
}
