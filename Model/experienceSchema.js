const mongoose = require('mongoose')

const ExperienceSchema = new mongoose.Schema({

    company_name: {
        type: String,
        required: true,
        trim: true
    },
    job_title: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        unique: true,
        required: true
    },
    end_date: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    }
})

const Experience = mongoose.model("Experience", ExperienceSchema);

module.exports = Experience;