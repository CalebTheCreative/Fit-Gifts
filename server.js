
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './server/routes/posts.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to FitGifts');
})

// const CONNECTION_URL = 'mongodb+srv://calebhopkins:Mdba-1304@cluster0.lnjup.mongodb.net/fitgiftsapp?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitgifts', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);