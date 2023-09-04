const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://mekha:mekha@cluster0.edfd8bc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  }).on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
const surveyRoutes = require('./routes/surveyRoutes');
app.use('/api', surveyRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});