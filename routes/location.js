const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Location = require('../models/Location');

// @route  GET api/location Location
// @desc Get all users location
router.get('/', async (req, res) => {
  try {
    const categories = await Location.find({}).sort({
      date: -1,
    });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('SERVER ERROR');
  }
});

// @route  POST api/locations
// @desc Add new location
router.post('/', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, address, cordinate, category } = req.body;

  try {
    const newLocation = new Location({
      name,
      address,
      cordinate,
      category,
    });
    const location = await newLocation.save();
    res.json(location);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('SERVER ERROR');
  }
});

// @route  PUT api/locations/:id
// @desc Update location
router.put('/:id', async (req, res) => {
  const { name, address, cordinate, category } = req.body;
  //Build location object
  const locationFields = {};
  if (name) locationFields.name = name;
  if (address) locationFields.address = address;
  if (cordinate) locationFields.cordinate = cordinate;
  if (category) locationFields.category = category;

  try {
    let location = await Location.findById(req.params.id);

    if (!location) return res.status(404).json({ msg: 'location not found' });

    location = await Location.findByIdAndUpdate(
      req.params.id,
      { $set: locationFields },
      { new: true }
    );
    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('SERVER ERROR');
  }
});

// @route  DELETE api/location
// @desc Delete location
router.delete('/:id', async (req, res) => {
  try {
    let location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ msg: 'location not found' });

    await Location.findByIdAndRemove(req.params.id);
    res.json({ msg: 'location remove' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('SERVER ERROR');
  }
});

module.exports = router;
