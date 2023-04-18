import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
