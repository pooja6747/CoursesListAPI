const User = require('../Model/courseModel')

exports.getUser = async (req, res) => {
    try {
        const data = await User.find();
        res.json(data)
    } catch (error) {
        res.status(400).send('error', error.message)
    }
}

exports.postUser = async (req, res) => {
    try {
        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}