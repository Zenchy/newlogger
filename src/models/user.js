const { Schema, model } = require("mongoose")

const userSchema = new Schema({
  name: { type: String, required: true },
  emails: { type: String, requred: true },
  password: { type: String, required: true },
  cargo: { type: String, required: true }
},{
  timestamps: true
})

userSchema.methods.encryotPassword = password =>{

}

module.exports = model ('User', userSchema)