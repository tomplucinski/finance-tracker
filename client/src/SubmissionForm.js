import React, { useState } from "react"
import axios from 'axios'
import { months } from "./constants"

const SubmissionForm = ({closeModal, route}) => {
    const [formData, setFormData] = useState({amount: 0, month: '', year: 0})
    const { amount, month, year } = formData

    const generateYears = () => {
        let year =  new Date().getFullYear()
        const years = []
        years.push(year)
        for (let i = 0; i < 30; i++) {
            year--;
            years.push(year);
        }
        return years
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendData(formData)
        closeModal()
    }

    const sendData = (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            axios.post(`/api/${route}`, data, config)
        } catch (e) {
            console.log('Error sending data', e)
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>
                Amount:
                <input type="text" name="amount" value={amount} onChange={e => handleChange(e)} />
            </label>
            <select name="month" id="month" onChange={e => handleChange(e)}>
                <option defaultValue disabled selected>Month</option>
                {months.map((month, i) => {
                    return (
                        <option key={i} value={month}>{month}</option>
                    )
                })}
            </select>
            <select name="year" id="year" onChange={e => handleChange(e)}>
                <option defaultValue disabled selected>Year</option>
                {generateYears().map((year, i) => {
                    return (
                        <option key={i} value={year}>{year}</option>
                    )
                })}
            </select>
            <button onClick={closeModal}>close</button>
            <input type="submit" value="Submit" />
      </form>
    )
}

export default SubmissionForm