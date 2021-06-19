import express, { Application, Request, Response } from 'express';
import connectDB from '../config/db';
import path from "path";

const app: Application = express();
connectDB();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/income', require('./routes/income'));

app.get('/api', (req: Request, res: Response): object => {
    return res.json({ message: 'Hello from server!' });
});

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
