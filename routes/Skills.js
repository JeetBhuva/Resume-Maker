var express = require('express');   
var router = express.Router();
var Skills = require('../Model/skillsSchema')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a PersonalDetail');
});

router.post('/UserSkills', async function (req, res, next) {
    try {
        const data = await Skills.create(req.body)
        // console.log("-->",data)
        res.status(200).json({
            status: "User Data Successfully....",
            data: data
        })

    } catch (err) {
        res.send(err)
    }
})

router.get('/GetUserSkills', async function (req, res, next) {
    try {

        const data = await Skills.find()
        res.status(200).json({
            data
        })

    } catch (error) {
        res.send(error)
    }
})

router.put('/putUserSkills/:id', async function (req, res, next) {

    let _id = req.params.id
    try {
        const data = await Skills.findByIdAndUpdate(_id, {

            Skills: req.body.Skills,
            level: req.body.level

        }, { new: true })
        res.status(200).json({
            status: "User Skills Data Update Successfully....",
            data
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;