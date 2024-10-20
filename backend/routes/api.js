// const express = require('express');
// const Reading = require('../models/Reading');
// const router = express.Router();

// // Get readings
// router.get('/readings', async (req, res) => {
//   const readings = await Reading.find();
//   res.json(readings);
// });

// // Add new reading
// router.post('/readings', async (req, res) => {
//   const { bp, sugar } = req.body;
//   const reading = new Reading({ date: new Date().toISOString(), bp, sugar });
//   await reading.save();
//   res.json({ message: 'Reading saved' });
// });

// // Emergency mock route
// router.post('/emergency', (req, res) => {
//   res.json({ tips: 'Stay calm. Get to a hospital.' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

// Example data to serve
const demoData = {
    status: "success",
    message: "Health Emergency App Showcase Data",
    dailyCheckup: {
        heartRate: 72,
        bloodPressure: "120/80",
        temperature: "98.6°F"
    },
    emergencyContacts: [
        { name: "Dr. Smith", phone: "+1-555-1234" },
        { name: "Hospital Emergency", phone: "+1-555-9876" }
    ]
};

// Route to serve data
router.get('/data', (req, res) => {
    res.json(demoData);
});

module.exports = router;
