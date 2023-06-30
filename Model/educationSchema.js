const mongoose = require('mongoose')

const EducationSchema = new mongoose.Schema({

    course: {
        type: String,
        required: true,
        trim: true
    },
    school: {
        type: String,
        required: true
    },
    Grade: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: String,
        required: true,
    }
})

const Education = mongoose.model("Education", EducationSchema);

module.exports = Education;