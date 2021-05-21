const { Router } = require('express')
const router = Router()

const userControl = require(`../controllers/user.controllers`)

router.get(`/`, userControl.getUsers)

router.post(`/`, userControl.postUser)


module.exports = router