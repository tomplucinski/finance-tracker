const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')

// @route   GET api/expenses
// @desc    Get all expenses
router.get('/', async (req, res) => {
    try {
        res.json('Here are all your tracked expenses!')
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error')
    }
})

// @route   POST api/expenses
// @desc    Add an expense
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { amount, date } = req.body
        const newExpense = new Expense({ amount, date })
        const expense = await newExpense.save()
        res.json(expense)
    } catch (e) {
        console.error(e);
        res.status(500).send('Server error')
    }
})

module.exports = router