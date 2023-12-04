const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    enrollmentStatus: {
        type: String,
        required: true
    }, 
    thumbnail: {
        type: String,
        required: true
    }, 
    duration: {
        type: String,
        required: true
    }, // Duration of the course
    schedule: {
        type: String,
        required: true
    },//'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: {
        type: String,
        required: true
    },//online
    prerequisites: {type:Array},
    syllabus: [
        {
            week: { type: String },
            topic: { type: String },
            content: { type: String }
        },
        {
            week: { type: String },
            topic: { type: String },
            content: { type: String }
        },
    ],
    students: [
        {
            id: { type: String },
            name: { type: String },
            email: { type: String },
        },
        {
            id: { type: String },
            name: { type: String },
            email: { type: String },
        },
    ],
})

module.exports = mongoose.model('Course-schema', courseSchema)



