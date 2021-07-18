const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    month: {
        type: String
    },
    year: {
        type: String
    },
    amount: {
        type: Number
    }
});

module.exports = Expense = mongoose.model('expense', ExpenseSchema);