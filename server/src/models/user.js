const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
   {
      name: {
         type: String,
         required: [true, 'Name is required'],
         minlength: [2, 'Name must have atleast 2 letters'],
         maxlength: [50, 'Name can not exceed length of 50']
      },
      bio: String,
      image: String,
      googleId: { type: String, required: [true, 'Google ID is required'] },
      username: {
         type: String,
         trim: true,
         unique: [true, 'Username must be unique'],
         minlength: [2, 'Username too short'],
         maxlength: [20, 'Username too long'],
         validate: {
            validator: value => {
               return /^[a-z0-9_-]{2,20}$/gm.test(value)
            },
            message: props => `${props.value} is not a valid username!`
         }
      },
      email: String,
      isActive: { type: Boolean, required: true, default: true },
      woofCount: { type: Number, default: 0 },
      woofs: [{ type: mongoose.Types.ObjectId, ref: 'Woof' }],
      followersCount: { type: Number, default: 0 },
      followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      followingCount: { type: Number, default: 0 },
      following: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      likedCount: { type: Number, default: 0 },
      likedWoofs: [{ type: mongoose.Types.ObjectId, ref: 'Woof' }]
   },
   { timestamps: true }
)

const User = new mongoose.model('User', userSchema)

module.exports = User
