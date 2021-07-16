const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')

// @route   GET api/expenses
// @desc    Get all expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find()
        res.json('Here are all your tracked expenses!')
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error')
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('Success!')
    } catch (e) {
        console.error(e);
        res.status(500).send('Server error')
    }
})

module.exports = router