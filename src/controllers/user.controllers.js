const UserShcema = require('../models/user')
const UserControl = {}
const app = require ('../server')

UserControl.findUser = (req, res)=> {
  // const users = UserShcema.find()
  // res.json(users)
  res.send('lololo')
 console.log('hihijninnhi')
}

module.exports = UserControl