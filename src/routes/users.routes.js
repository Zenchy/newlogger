const { Router } = require('express')
const router = Router()
const cors = require('cors')

const userControl = require(`../controllers/user.controllers`)

router.get(`/`, cors(), userControl.getUsers)

router.post(`/`, userControl.postUser)

router.get('/:id', userControl.getUser)

router.put('/:id', userControl.putUser)

router.delete('/:id', userControl.deleteUser)


module.exports = router