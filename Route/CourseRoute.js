const {getUser,postUser} = require('../Controller/CourseController')

const route = require('express').Router()

route.get('/',getUser)

route.post('/', postUser)

module.exports = route