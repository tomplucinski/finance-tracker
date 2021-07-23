const validateFields = (payload) => {
    const { amount, month, year } = payload

    // clean this up
    if (typeof amount !== 'number') {
        throw new Error('amount field needs to be a number')
    }
    if (typeof month !== 'string') {
        throw new Error('month field needs to be a string')
    }
    if (typeof year !== 'number') {
        throw new Error('year field needs to be a number')
    }
    if (!amount) {
        throw new Error('amount is undefined')
    }
    if (!month) {
        throw new Error('month is undefined')
    }
    if (!year) {
        throw new Error('year is undefined')
    }
}

module.exports = { validateFields }