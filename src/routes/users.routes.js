const { Router } = require('express')
const router = Router()

const userControl = require(`../controllers/user.controllers`)

router.get(`/`, userControl.getUsers)

router.post(`/`, userControl.postUser)

router.get('/:id', userControl.getUser)

router.put('/:id', userControl.putUser)

router.delete('/:id', userControl.deleteUser)


module.exports = router