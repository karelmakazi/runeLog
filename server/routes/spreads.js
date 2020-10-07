const express = require('express')

const db = require('../db')

const router = express.Router()

router.post('/addSpread', (req,res) => {


  db.addSpread(req.body)
  .then(() => {
    res.sendStatus(200)
  })
})

module.exports = router