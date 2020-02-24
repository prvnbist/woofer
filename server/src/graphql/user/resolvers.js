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
      }
   }
}
