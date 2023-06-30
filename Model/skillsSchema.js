const mongoose = require('mongoose')

const SkillsSchema = new mongoose.Schema({

    skills: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        enum:[1,2,3,4,5],
        required: true
    }
})

const Skills = mongoose.model("Skills", SkillsSchema);

module.exports = Skills;