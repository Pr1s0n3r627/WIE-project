const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api'); // Import the API routes

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'showcase', 'public')));

// Use the API routes
app.use('/', apiRoutes);

// Default route to serve the main index2.html file
app.get('/showcase', (req, res) => {
    res.sendFile(path.join(__dirname, 'showcase', 'public', 'index2.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
