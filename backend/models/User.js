import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  phoneNumber: { type: String, required: true },
  bio: { type: String, default: "" },
  isOnline: { type: Boolean, default: false },
  lastSeen: { type: Date, default: Date.now },
}, {
  timestamps: true,
})

const User = mongoose.model("User", userSchema)

export default User
