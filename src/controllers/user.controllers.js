const User = require('../models/user')
const UserControl = {}

UserControl.getUsers = async(req, res)=> {
  const users = await User.find()
  res.json(users)
}

UserControl.postUser = async(req, res)=> {
  const newUser =  new User({
    name: req.body.name,
    emails: req.body.emails,
    password: req.body.password,
    cargo: req.body.cargo,
  })
  await newUser.save();
  res.json({ status: "User created" });
  }

UserControl.getUser = async(req, res)=>{
  const userfound = await User.findById(req.params.id)
  res.json(userfound)
}

UserControl.putUser = async(req, res)=> {
  await User.findByIdAndUpdate(req.params.id, req.body)
  res.send('Put user')
}

UserControl.deleteUser = async(req, res)=>{
  await User.deleteOne({"_id": req.params.id})
  res.json({status: "Deeted element"})
}

module.exports = UserControl