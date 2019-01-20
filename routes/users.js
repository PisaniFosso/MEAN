const express = require('express');
const router = express.Router();

// Register route
router.get('/register', (req, res, next) => {
    res.send('Register');
});

// Authenticate route
router.get('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

// Profile route
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

// Validate route
router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = router;
