const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const app = express();
const port =  5000;
const cron = require("node-cron");

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
const reportRoutes=require("./routes/reportRoutes")
app.use('/api', surveyRoutes);
app.use("/api",reportRoutes)





cron.schedule("0 0 1 * *", async () => {
  try {
    // Fetch data from the /total endpoint
    const response = await axios.get("http://localhost:5000/api/total");
    const totalData = response.data; // Assuming the API response contains the necessary data for the report

    // Get the current month and year
    const now = new Date();
    const currentMonthYear = `${now.getMonth() + 1}-${now.getFullYear()}`;

    // Create a new report document with the fetched data
    const reportData = {
      district: "District 1", // Modify this based on your data structure
      basicNeeds: totalData.basicNeeds,
      stdNeeds: totalData.stdNeeds,
      preNeeds: totalData.preNeeds,
      data: totalData.data,
      date: currentMonthYear,
    };

    // Save the report to the /report endpoint
    const report = new Report(reportData);
    await report.save();

    console.log(`Monthly report for ${currentMonthYear} generated and saved.`);
  } catch (error) {
    console.error("Error fetching and saving report data:", error);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});