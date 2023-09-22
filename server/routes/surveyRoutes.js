 
 const express = require("express");
 const router = express.Router();
 const Survey = require("../models/survey.js");
 
 router.post("/surveys", async (req, res) => {
   try {
     const {
       name,
       age,
       district,
       occupation,
       basicNeed,
       stdNeed,
       preNeed,
       issue,
       text,
     } = req.body;
 
     const survey = new Survey({
       name,
       age,
       district,
       occupation,
       basicNeed,
       stdNeed,
       preNeed,
       issue,
       text,
     });
     await survey.save();
 
     res.status(201).json({ message: "Survey response submitted successfully" });
   } catch (error) {
     console.error(error);
     res.status(500).json({
       message: "An error occurred while submitting the survey response",
     });
   }
 });
 
 router.get("/", (req, res) => {
   res.send("Helloe");
 });
 router.get("/surveys/:district", async (req, res) => {
   try {
     const { district } = req.params;
 
     const results = await Survey.aggregate([
       {
         $match: { district },
       },
       {
         $group: {
           _id: "$district",
           basicNeeds: {
             $push: {
               $cond: [
                 {
                   $in: [
                     "$basicNeed",
                     [
                       "Primary School",
                       "Public Toilet",
                       "Street Light",
                       "Health Clinic",
                       "Municipal Water Supply",
                       "Road Reconstruction",
                       "Avoid Powercuts",
                     ],
                   ],
                 },
                 "$basicNeed",
                 null,
               ],
             },
           },
           standardNeeds: {
             $push: {
               $cond: [
                 {
                   $in: [
                     "$stdNeed",
                     [
                       "Public Library",
                       "Taxi Service",
                       "Public Parks and Playgrounds",
                       "Traffic Control",
                       "Night Patrol",
                       "Bus Waiting Shed",
                       "Better Disaster Prevention Schemes",
                     ],
                   ],
                 },
                 "$stdNeed",
                 null,
               ],
             },
           },
           premiumNeeds: {
             $push: {
               $cond: [
                 {
                   $in: [
                     "$preNeed",
                     [
                       "Gym",
                       "Theatre",
                       "Tourist Resorts",
                       "Metro Rail Services",
                       "Free WiFi",
                       "Turf",
                     ],
                   ],
                 },
                 "$preNeed",
                 null,
               ],
             },
           },
           totalBasicNeeds: {
             $sum: {
               $cond: [
                 {
                   $in: [
                     "$basicNeed",
                     [
                       "Primary School",
                       "Public Toilet",
                       "Street Light",
                       "Health clinic",
                       "Municipal Water Supply",
                       "Road Reconstruction",
                       "Avoid Powercuts",
                     ],
                   ],
                 },
                 1,
                 0,
               ],
             },
           },
           totalStandardNeeds: {
             $sum: {
               $cond: [
                 {
                   $in: [
                     "$stdNeed",
                     [
                       "Public Library",
                       "Taxi Service",
                       "Public Parks and Playgrounds",
                       "Traffic Control",
                       "Night Patrol",
                       "Bus Waiting Shed",
                       "Better Disaster Prevention Schemes",
                     ],
                   ],
                 },
                 1,
                 0,
               ],
             },
           },
           totalPremiumNeeds: {
             $sum: {
               $cond: [
                 {
                   $in: [
                     "$preNeed",
                     [
                       "Gym",
                       "Theatre",
                       "Tourist Resorts",
                       "Metro Rail Services",
                       "Free WiFi",
                       "Turf",
                     ],
                   ],
                 },
                 1,
                 0,
               ],
             },
           },
         },
       },
       {
         $project: {
           _id: 0,
           district: "$_id",
           basicNeeds: {
             $filter: {
               input: "$basicNeeds",
               as: "item",
               cond: { $ne: ["$$item", null] },
             },
           },
           standardNeeds: {
             $filter: {
               input: "$standardNeeds",
               as: "item",
               cond: { $ne: ["$$item", null] },
             },
           },
           premiumNeeds: {
             $filter: {
               input: "$premiumNeeds",
               as: "item",
               cond: { $ne: ["$$item", null] },
             },
           },
           totalBasicNeeds: 1,
           totalStandardNeeds: 1,
           totalPremiumNeeds: 1,
         },
       },
     ]);
 
     if (results.length === 0) {
       res.status(404).json({ message: "District not found" });
     } else {
       res.status(200).json(results[0]);
     }
   } catch (error) {
     console.error(error);
     res
       .status(500)
       .json({ message: "An error occurred while retrieving survey results" });
   }
 });
 
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
 
 module.exports = router;