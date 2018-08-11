const express = require('express');
const router = express.Router();

const Phone = require('../models/phone-model');
//import { Phone } from '../models/phone-model';

/* GET Phones listing. */
router.get('/phones', (req, res, next) => {
  Phone.find(phonesList)
  .then(phonesList => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(phonesList);
  })
  .catch(error => next(error))
});

/* CREATE a new Phone. */
router.post('/phones', (req, res, next) => {
  const thePhone = new Phone({
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image || ''
  });

  thePhone.save()
  .then(thePhone => {
    res.json({
      message: 'New Phone created!',
      id: thePhone._id
    });
  })
  .catch(error => next(error))
});

module.exports = router;