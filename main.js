const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


// Allow all origins and methods

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: '*',  // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow all HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers
}));
app.post('/api/chat', async (req, res) => {

  return res.json({ response: req.body.message });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
