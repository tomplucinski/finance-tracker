const express = require('express')
const router = express.Router()
const Income = require('../models/Income')

// @route   GET api/income
// @desc    Get all income
router.get('/', async (req, res) => {
    try {
        const income = await Income.find()
        if (!income.length) return res.status(404).json({ message: 'No income found' })
        res.json(income)
    } catch(e) {
        console.error(e)
        res.status(500).json({ message: 'Server error' })
    }
})

// @route   POST api/income
// @desc    Add income
router.post('/', async (req, res) => {
    try {
        const { amount, month, year } = req.body
        const newIncome = new Income({ amount, month, year })
        const income = await newIncome.save()
        res.json(income)
    } catch (e) {
        console.error(e)
        res.status(500).send('Server error')
    }
})

module.exports = router