const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
   {
      message: {
         type: String,
         minLength: [1, 'Woof too small'],
         maxlength: [320, 'Woof too big']
      },
      images: [{ type: String }],
      author: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      likesCount: { type: Number, default: 0 },
      likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      repliesCount: { type: Number, default: 0 },
      replies: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
   },
   { timestamps: true }
)

const User = new mongoose.model('User', userSchema)

module.exports = User
