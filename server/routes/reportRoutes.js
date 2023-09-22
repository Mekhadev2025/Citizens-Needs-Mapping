const express = require("express");
const router = express.Router();
const Survey = require("../models/survey.js");
 
const Report = require("../models/report.js"); 
 

router.get("/total", async (req, res) => {
  try {
    const allDistricts = [
      "Kasaragod",
      "Kannur",
      "Wayanad",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Thrissur",
      "Ernakulam",
      "Idukki",
      "Kottayam",
      "Alappuzha",
      "Pathanamthitta",
      "Kollam",
      "Thiruvananthapuram",
    ];
    const totalUnmetNeeds = [];

    for (const district of allDistricts) {
      const result = await Survey.aggregate([
        {
          $match: { district },
        },
        {
          $group: {
            _id: "$district",
            uniqueBasicNeeds: {
              $addToSet: "$basicNeed",
            },
            uniqueStandardNeeds: {
              $addToSet: "$stdNeed",
            },
            uniquePremiumNeeds: {
              $addToSet: "$preNeed",
            },
          },
        },
        {
          $project: {
            _id: 0,
            district: "$_id",
            totalBasicNeeds: { $size: "$uniqueBasicNeeds" },
            totalStandardNeeds: { $size: "$uniqueStandardNeeds" },
            totalPremiumNeeds: { $size: "$uniquePremiumNeeds" },
          },
        },
      ]);

      if (result.length > 0) {
        const districtData = result[0];
        const {
          district,
          totalBasicNeeds,
          totalStandardNeeds,
          totalPremiumNeeds,
        } = districtData;
        const totalUnmetNeed =
          totalBasicNeeds + totalStandardNeeds + totalPremiumNeeds;
        totalUnmetNeeds.push({ district, totalUnmetNeed });
      }
    }

    totalUnmetNeeds.sort((a, b) => b.totalUnmetNeed - a.totalUnmetNeed);

    res.status(200).json(totalUnmetNeeds);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "An error occurred while calculating total unmet needs",
      });
  }
});


 
router.post("/report", async (req, res) => {
  try {
    const data = {
      district: req.body.district,
      basicNeeds: req.body.basicNeeds,
      stdNeeds: req.body.stdNeeds,
      preNeeds: req.body.preNeeds,
      data: req.body.data,
      date: req.body.date,
    };

    const report = new Report(data);

    await report.save();
    res.status(201).json({ message: "Report data submitted successfully" });
  } catch (error) {
    console.error("Error saving report data:", error);
    res.status(500).json({ message: "An error occurred while submitting the report data" });
  }
});



router.get("/report", async (req, res) => {
    try {
      // Fetch the report data from your database
      const reportData = await Report.find().exec();
  
      if (!reportData) {
        // If no data found, return a 404 response
        return res.status(404).json({ message: "No report data found" });
      }
  
      // If data found, send it in the response
      res.status(200).json(reportData);
    } catch (error) {
      console.error("Error fetching report data:", error);
      res.status(500).json({ message: "An error occurred while fetching the report data" });
    }
  });

module.exports = router;