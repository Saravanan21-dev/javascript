const express = require('express');
const app = express();

// Port configuration
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Node.js Web Application</h1>
    <p>Application is running successfully!</p>
    <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
  `);
});

// Health check endpoint (important for DevOps)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Sample API endpoint
app.get('/api/message', (req, res) => {
  res.json({
    message: 'Hello bro from Node.js API',
    version: 'v1'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
