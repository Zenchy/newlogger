const User = require('../models/user')
const UserControl = {}

UserControl.getUsers = async(req, res)=> {
  const users = await User.find()
  res.json(users)
}

UserControl.postUser = async(req, res)=> {
  const newUser = await new User({
    name: req.body.name
  })
  await newUser.save();
  await res.json({ status: "User created" });
  }

module.exports = UserControl