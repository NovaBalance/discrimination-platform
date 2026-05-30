const express = require('express');
const router = express.Router();

router.get('/rooms', async (req, res) => {
  res.json({ success: true, data: [] });
});

router.get('/rooms/:roomId/messages', async (req, res) => {
  res.json({ success: true, data: [], page: 1, limit: 50 });
});

module.exports = router;
