var express = require('express');
var router = express.Router();
var PersonalDetail = require('../Model/personalDetailSchema')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a PersonalDetail');
});

router.post('/UserPD', async function (req, res, next) {
  try {
    const data = await PersonalDetail.create(req.body)
    // console.log("-->",data)

    res.status(200).json({
      status: "User Data Successfully....",
      data: data
    })

  } catch (err) {
    res.send(err)
  }
})

router.get('/GetUserPD', async function (req, res, next) {
  try {

    const data = await PersonalDetail.find()
    res.status(200).json({
      data
    })

  } catch (error) {
    res.send(error)
  }
})

router.put('/putUserPD/:id', async function (req, res, next) {

  let _id = req.params.id
  try {
    const data = await PersonalDetail.findByIdAndUpdate(_id, {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      photo: req.body.photo
    }, { new: true })
    res.status(200).json({
      status: "User PersonalDetail Data Update Successfully....",
      data
    })
  } catch (error) {
    res.send(error)
  }
})

module.exports = router;
