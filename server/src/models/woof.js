const mongoose = require('mongoose')
const Schema = mongoose.Schema

const woofSchema = new Schema(
   {
      message: {
         type: String,
         minLength: [1, 'Woof too small'],
         maxlength: [320, 'Woof too big']
      },
      isActive: { type: Boolean, required: true, default: true },
      author: { type: mongoose.Types.ObjectId, ref: 'User' },
      likesCount: { type: Number, default: 0 },
      likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      repliesCount: { type: Number, default: 0 },
      replies: [{ type: mongoose.Types.ObjectId, ref: 'Woof' }]
   },
   { timestamps: true }
)

const Woof = new mongoose.model('Woof', woofSchema)

module.exports = Woof
