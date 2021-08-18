const app = require('./index');
const connectDB = require('../config/db');

connectDB();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});