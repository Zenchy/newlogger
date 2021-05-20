const UserShcema = require('../models/user')
const UserControl = {}

UserControl.findUser = async(req, res)=> {
  const users = await UserShcema.find()
  res.json(users)
}

module.exports = UserControl