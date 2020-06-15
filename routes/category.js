const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Category = require('../models/Category');

// @route  GET api/category
// @desc Get all users category
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({}).sort({
      date: -1,
    });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('SERVER ERROR');
  }
});

// @route  POST api/categorys
// @desc Add new category
router.post(
  '/',
  [[check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name } = req.body;

    try {
      const newCategory = new Category({
        name,
      });
      const category = await newCategory.save();
      res.json(category);
    } catch (err) {
      console.error(err.message);

      res.status(500).send('SERVER ERROR');
    }
  }
);

// @route  PUT api/categorys/:id
// @desc Update category
router.put('/:id', async (req, res) => {
  const { name } = req.body;
  //Build category object
  const categoryFields = {};
  if (name) categoryFields.name = name;

  try {
    let category = await Category.findById(req.params.id);

    if (!category) return res.status(404).json({ msg: 'category not found' });

    category = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: categoryFields },
      { new: true }
    );
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('SERVER ERROR');
  }
});

// @route  DELETE api/category
// @desc Delete category
router.delete('/:id', async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ msg: 'category not found' });

    await Category.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Category remove' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('SERVER ERROR');
  }
});

module.exports = router;
