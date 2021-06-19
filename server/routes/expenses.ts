import express, { Request, Response } from 'express';
const router = express.Router();
const Expense = require('../models/Expense');

// @route   GET api/expenses
// @desc    Get all expenses
router.get('/', async (req: Request, res: Response) => {
    try {
        res.json('Here are all your tracked expenses!');
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

module.exports = router;