const User = require('../models/user')
const UserControl = {}

UserControl.getUsers = async(req, res)=> {
  const users = await User.find()
  res.json(users)
}

UserControl.postUser = (req, res)=> {
  const newUser =  new User({
    name: req.body.name
  })
  newUser.save();
  res.json({ status: "User created" });
  }

UserControl.getUser = (req, res)=>{
  res.send('get User')
}

UserControl.putUser = (req, res)=> {
  res.send('Put user')
}

UserControl.deleteUser = (req, res)=>{
  res.send('delete user')
}

module.exports = UserControl