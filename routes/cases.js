const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// Mock API
router.get('/', async (req, res) => {
  res.json({
    success: true,
    data: [],
    page: 1,
    limit: 20
  });
});

router.post('/submit', async (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Case submitted successfully',
    data: { id: uuidv4(), ...req.body }
  });
});

module.exports = router;
