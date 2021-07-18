const express = require('express');
const router = express.Router();
const Income = require('../models/Income');

// @route   GET api/income
// @desc    Get all income
router.get('/', async (req, res) => {
    try {
        res.json('Here is all your tracked income!');
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

// @route   POST api/income
// @desc    Add income
router.post('/', async (req, res) => {
    try {
        const { amount, month, year } = req.body
        const newIncome = new Income({ amount, month, year })
        const income = await newIncome.save()
        res.json(income)
    } catch (e) {
        console.error(e);
        res.status(500).send('Server error')
    }
});

module.exports = router;