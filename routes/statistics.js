const express = require('express');
const router = express.Router();

router.get('/dashboard', async (req, res) => {
  res.json({
    success: true,
    data: {
      total_cases: [{ count: 0 }],
      total_users: [{ count: 0 }],
      discrimination_types: [],
      by_country: [],
      by_company: [],
      by_language: []
    },
    timestamp: new Date()
  });
});

module.exports = router;
