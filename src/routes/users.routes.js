const { Router } = require('express')
const router = Router()

const userControl = require(`../controllers/user.controllers`)

router.get(`/`, userControl.findUser)

module.exports = router