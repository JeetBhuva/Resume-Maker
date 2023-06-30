var express = require('express');
var router = express.Router();
var Reference = require('../Model/referenceSchema')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a PersonalDetail');
});

router.post('/UserReference', async function (req, res, next) {
    try {
        const data = await Reference.create(req.body)
        res.status(200).json({
            status: "User Data Successfully....",
            data: data
        })

    } catch (error) {
        res.send(error)
    }
})

router.get('/GetUserReference', async function (req, res, next) {
    try {

        const data = await Reference.find()
        res.status(200).json({
            data
        })

        
    } catch (error) {
        res.send(error)
    }
})

router.put('/putUserReference/:id', async function (req, res, next) {

    let _id = req.params.id
    try {
        const data = await Reference.findByIdAndUpdate(_id, {

            reference_name: req.body.reference_name,
            job_titel: req.body.job_titel,
            company_name: req.body.company_name,
            email: req.body.email,
            phone: req.body.phone

        }, { new: true })
        res.status(200).json({
            status: "User Reference Data Update Successfully....",
            data
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;