// // showcase/server.js
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 5500;

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route to send a simple response
// app.get('/data', (req, res) => {
//   res.json({ message: 'This is a showcase demo!' });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'showcase', 'public')));

// Route for index2.html
app.get('/showcase', (req, res) => {
    res.sendFile(path.join(__dirname, 'showcase', 'public', 'index2.html'));
});

// Default route for other pages
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'src', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
