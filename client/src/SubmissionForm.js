import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const SubmissionForm = ({closeModal, route}) => {
    const [formData, setFormData] = useState({amount: 0, date: new Date()});
    const { amount, date } = formData;

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(formData);
        closeModal();
    };

    const sendData = (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            axios.post(`/api/${route}`, data, config);
        } catch (e) {
            console.log('Error sending data', e);
        }
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>
                Amount:
                <input type="text" name="amount" value={amount} onChange={e => handleChange(e)} />
            </label>
            <DatePicker selected={date} onChange={(date) => setFormData({...formData, date})} />
            <button onClick={closeModal}>close</button>
            <input type="submit" value="Submit" />
      </form>
    );
};

export default SubmissionForm;