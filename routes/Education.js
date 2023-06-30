var express = require('express');
var router = express.Router();
var Education = require('../Model/educationSchema')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a PersonalDetail');
});

router.post('/Usereducation', async function (req, res, next) {
    try {
        const data = await Education.create(req.body)
        // console.log("-->",data)

        res.status(200).json({
            status: "User Data Successfully....",
            data: data
        })

    } catch (err) {
        res.send(err)
    }
})

router.get('/GetUsereducation', async function (req, res, next) {
    try {

        const data = await Education.find()
        res.status(200).json({
            data
        })

    } catch (error) {
        res.send(error)
    }
})

router.put('/putUsereducation/:id', async function (req, res, next) {

    let _id = req.params.id
    try {
        const data = await Education.findByIdAndUpdate(_id, {
            course: req.body.course,
            school: req.body.school,
            Grade: req.body.Grade,
            year: req.body.year
        }, { new: true })
        res.status(200).json({
            status: "User Education Data Update Successfully...",
            data
        })
    } catch (error) {
        res.send(error)
    }
})

router.delete('/EducationDataDelete/:id', async function (req, res, next) {

    try {

        let _id = req.params.id
        const data = await Education.findByIdAndDelete(_id)

        res.status(200).json({
            status: "USer Education Data Delete Successfully....",
            data
        })

    } catch (error) {
        res.send(error)
    }

})

module.exports = router;