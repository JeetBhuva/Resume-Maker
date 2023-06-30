const mongoose = require('mongoose')

const referenceSchema = new mongoose.Schema({

    reference_name: {
        type: String,
        required: true,
    },
    job_titel: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10
    }
})

const Reference = mongoose.model("Reference", referenceSchema);

module.exports = Reference;