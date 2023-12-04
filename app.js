const mongoose = require('mongoose')
const express = require('express')
const courseRoute = require('./Route/CourseRoute')
require('dotenv/config')
const cors = require('cors')

//init
const app = express();

//middleware
app.use(express.json())



//default routee
app.get('/', (req, res) => {
    res.send('home')
})

//cors
app.use(cors())

//user main route
app.use('/api/course',courseRoute)


//port
app.listen(process.env.PORT, () => {
    console.log(`the port no is ${process.env.PORT}`)
})


async function DB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}

DB()