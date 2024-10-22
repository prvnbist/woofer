const Woof = require('../../models/woof')
const User = require('../../models/user')
const { UserInputError } = require('apollo-server-express')

module.exports = {
   Woof: {
      author: parent => User.findById(parent.author),
      likes: async parent => {
         const users = await parent.likes.map(id => User.findById(id))
         return users
      },
      replies: async parent => {
         const woofs = await parent.replies.map(id => Woof.findById(id))
         return woofs
      }
   },
   Mutation: {
      createWoof: async (_, { input }) => {
         try {
            const { authorId, message } = input
            // Create a woof
            const woof = await Woof.create({
               author: authorId,
               message
            })
            // Update user's woofs array and total count
            await User.findByIdAndUpdate(
               authorId,
               {
                  $inc: { woofCount: 1 },
                  $push: { woofs: woof.id }
               },
               { new: true }
            )
            return {
               code: '200',
               success: true,
               message: `You woof'd`,
               woof
            }
         } catch (error) {
            throw new Error(error.message)
         }
      },
      deleteWoof: async (_, { id }) => {
         try {
            // Delete the woof
            const woof = await Woof.findByIdAndUpdate(
               id,
               { isActive: false },
               { new: true }
            )

            const user = await User.findById(woof.author)
            // Decrement user's woof count
            user.woofCount -= 1
            // Delete woof from user's woofs list
            user.woofs.pull(woof.id)
            user.save()
            return {
               code: '200',
               success: true,
               message: `Woof has been deleted.`,
               woof
            }
         } catch (error) {
            throw new Error(error.message)
         }
      },
      likeWoof: async (_, { woofId, userId }) => {
         try {
            // Check if woof has been already liked by this user
            const user = await User.findById(userId)
            const isAlreadyLiked = user.likedWoofs.includes(woofId)
            if (isAlreadyLiked) {
               const woof = await Woof.findById(woofId)
               woof.likesCount -= 1
               woof.likes.pull(userId)
               woof.save()

               user.likedCount -= 1
               user.likedWoofs.pull(woofId)
               user.save()

               return {
                  code: '200',
                  success: true,
                  message: `You unliked this woof!`,
                  woof
               }
            } else {
               const woof = await Woof.findById(woofId)
               woof.likesCount += 1
               woof.likes.push(userId)
               woof.save()

               user.likedCount += 1
               user.likedWoofs.push(woofId)
               user.save()

               return {
                  code: '200',
                  success: true,
                  message: `You liked this woof!`,
                  woof
               }
            }
         } catch (error) {
            throw new Error(error.message)
         }
      }
   }
}
