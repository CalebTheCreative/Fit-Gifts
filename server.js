import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api', apiRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitgifts', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
