import express, { Request, Response } from 'express';
const router = express.Router();
const Income = require('../models/Income');

// @route   GET api/income
// @desc    Get all income
router.get('/', async (req: Request, res: Response) => {
    try {
        res.json('Here is all your tracked income!');
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

module.exports = router;