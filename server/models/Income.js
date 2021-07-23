const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    month: {
        type: String
    },
    year: {
        type: Number
    },
    incomeAmount: {
        type: Number
    }
});

module.exports = Income = mongoose.model('income', IncomeSchema);