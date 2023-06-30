var express = require('express');
var router = express.Router();
var Experience = require('../Model/experienceSchema')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a PersonalDetail');
});

router.post('/Userexperience', async function (req, res, next) {
    try {
        const data = await Experience.create(req.body)
        // console.log("-->",data)

        res.status(200).json({
            status: "User Data Successfully....",
            data: data
        })

    } catch (err) {
        res.send(err)
    }
})

router.get('/GetUserexperience', async function (req, res, next) {
    try {

        const data = await Experience.find()
        res.status(200).json({
            data
        })

    } catch (error) {
        res.send(error)
    }
})

router.put('/putGetUserexperience/:id', async function (req, res, next) {

    let _id = req.params.id
    // console.log(_id)
    try {
        const data = await Experience.findByIdAndUpdate(_id, {
            company_name: req.body.company_name,
            job_title: req.body.job_title,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            details: req.body.details
        }, { new: true })
        res.status(200).json({
            status: "User Education Data Update Successfully....",
            data
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;