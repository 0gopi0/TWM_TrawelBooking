import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/github', (req, res) => {
  res.send('0gopi0');
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});