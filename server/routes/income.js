const express = require('express');
const router = express.Router();
const Income = require('../models/Income');

// @route   GET api/income
// @desc    Get all income
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json('Here is all your tracked income!');
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

module.exports = router;