const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    zipCode: {
        type: String,
        required: [true, 'You must provide a zip code']
    },
    description: {
        type: String,
        required: [true, 'You must provide a description']
    },
    gradeLevel: {
        type: String,
        required: [true, 'You must provide a grade level for the student']
    },
    webDevLevel: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

const Profile = mongoose.model("Post", postSchema)

module.exports = Profile