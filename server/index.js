const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const app = express();
const port =  5000;
const cron = require("node-cron");
const axios=require("axios")
app.use(express.json());
app.use(cors());
const Report =require("../server/models/report")
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





cron.schedule("0 0 1  * *", async () => {
  try {
    // Fetch data from the /total endpoint
    const response = await axios.get("https://citizens-needs-mapping-whzj.vercel.app/api/total");
    const totalData = response.data; // Assuming the API response contains the necessary data for the report
      
    // Get the current month and year
    const now = new Date();
    const currentMonthYear = `${now.getMonth() + 1}-${now.getFullYear()}`;
     const districtMax=response.data[0].district

    const response2=await axios.get(`https://citizens-needs-mapping-whzj.vercel.app/api/surveys/${districtMax}`);
    const districtData=response2.data
    // Create a new report document with the fetched data
    const reportData = {
      district: districtData.district, // Modify this based on your data structure
      basicNeeds: districtData.totalBasicNeeds,
      stdNeeds: districtData.totalStandardNeeds,
      preNeeds: districtData.totalPremiumNeeds,
      data: totalData,
   
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