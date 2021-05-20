const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
  name: { type: String, required: true },
  emails: { type: String, requred: true },
  password: { type: String, required: true },
  cargo: { type: String, required: true }
},{
  timestamps: true
})

UserSchema.methods.encryotPassword = async password =>{
  const salt = await bcrypt.genSalt(15)
  return  await bcrypt.hash(password, salt)
}

UserSchema.methods.compare = async function(password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = model ('User', UserSchema)