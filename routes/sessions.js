const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory store of recent sessions (most recent first).
// Kept lightweight and consistent with the mock API pattern used elsewhere.
const sessions = [];
const MAX_SESSIONS = 200;

// Best-effort client location from request headers.
function resolveLocation(req, body) {
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  return {
    ip,
    country: body.country || null,
    city: body.city || null,
    timezone: body.timezone || null,
    language: body.language || null
  };
}

// Track a new session (or refresh an existing one by clientId).
router.post('/track', async (req, res) => {
  const body = req.body || {};
  const clientId = body.clientId || uuidv4();
  const now = new Date();
  const location = resolveLocation(req, body);

  const existing = sessions.find(s => s.clientId === clientId);

  if (existing) {
    existing.lastSeen = now;
    existing.page = body.page || existing.page;
    existing.location = location;
    existing.userAgent = req.headers['user-agent'] || existing.userAgent;
    // Move to the front so recency ordering is preserved.
    sessions.splice(sessions.indexOf(existing), 1);
    sessions.unshift(existing);

    return res.json({ success: true, data: existing });
  }

  const session = {
    id: uuidv4(),
    clientId,
    page: body.page || 'home',
    location,
    userAgent: req.headers['user-agent'] || null,
    startedAt: now,
    lastSeen: now
  };

  sessions.unshift(session);
  if (sessions.length > MAX_SESSIONS) sessions.length = MAX_SESSIONS;

  res.status(201).json({ success: true, data: session });
});

// Recent sessions. Pass ?clientId=... to get only the caller's own sessions.
router.get('/recent', async (req, res) => {
  const { clientId, limit } = req.query;
  const max = Math.min(parseInt(limit, 10) || 20, MAX_SESSIONS);

  let data = sessions;
  if (clientId) data = data.filter(s => s.clientId === clientId);

  res.json({
    success: true,
    data: data.slice(0, max),
    total: data.length,
    timestamp: new Date()
  });
});

module.exports = router;
