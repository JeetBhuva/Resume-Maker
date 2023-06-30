const mongoose = require('mongoose')

const personalDetailSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
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
    },
    photo: {
        type: String,
        required: true
    }
})

const PersonalDetail = mongoose.model("PersonalDetail", personalDetailSchema);

module.exports = PersonalDetail;