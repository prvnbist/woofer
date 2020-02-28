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
      }
   }
}
