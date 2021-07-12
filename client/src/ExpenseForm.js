import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({closeModal}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({amount: 0, date: ''});
    const { amount, date } = formData;

    const handleSubmit = e => {
        e.preventDefault();
        closeModal();
        console.log('Submitted');
    };

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>
                Amount:
                <input type="text" name="amount" value={amount} onChange={e => handleChange(e)} />
            </label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <button onClick={closeModal}>close</button>
            <input type="submit" value="Submit" />
      </form>
    );
};

export default ExpenseForm;