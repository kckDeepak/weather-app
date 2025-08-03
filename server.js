const express = require('express');
const PORT = 3001;
require('dotenv').config();
const axios = require('axios');

const app = express();
const api_key = process.env.WEATHER_API_KEY;

// Middleware
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] GET /weather/${req.params.city}`);
  next();
};

const validateCity = (req, res, next) => {
  const city = req.params.city;
  if (!city || !/^[a-zA-Z\s]+$/.test(city)) {
    return res.status(400).json({ error: 'Invalid city name. Use letters and spaces only.' });
  }
  next();
};

// Routes
app.get('/', (req, res) => {
  res.json('Hello, Welcome to the weather app.');
});

app.get('/about', (req, res) => {
  res.json('You are in about page.');
});

app.get('/weather/:city', logRequest,validateCity, async (req, res) => {
  try {
    const city = req.params.city;
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
    );
    const data = response.data;
    res.json({
      city: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
    });
  } catch (error) {
    if (error.response && error.response.status == 404) {
      res.status(404).json({ error: 'City not found' });
    } else {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
});


// Server
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});