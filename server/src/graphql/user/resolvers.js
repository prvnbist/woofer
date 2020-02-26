const User = require('../../models/user')
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
   Mutation: {
      createUser: async (_, { input }) => {
         try {
            const data = {
               ...input,
               isActive: true
            }
            const user = await User.create(data)
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
            await User.findByIdAndUpdate(id, { isActive: false })
            return {
               code: '200',
               success: true,
               message: 'User deleted successfully!'
            }
         } catch (error) {
            throw new UserInputError(error.message)
         }
      }
   }
}
