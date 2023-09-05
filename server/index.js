const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const app = express();
const port =  5000;


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));

// Handle any other routes by returning the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});
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