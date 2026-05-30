const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
const casesRouter = require('./routes/cases');
const usersRouter = require('./routes/users');
const chatRouter = require('./routes/chat');
const statisticsRouter = require('./routes/statistics');

app.use('/api/cases', casesRouter);
app.use('/api/users', usersRouter);
app.use('/api/chat', chatRouter);
app.use('/api/statistics', statisticsRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Real-time chat with Socket.io
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // User joins chat room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit('user-joined', {
      message: 'User joined the chat',
      socketId: socket.id
    });
  });

  // Send message
  socket.on('send-message', (data) => {
    io.to(data.roomId).emit('receive-message', {
      message: data.message,
      userId: data.userId,
      userName: data.userName,
      timestamp: new Date(),
      socketId: socket.id
    });
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = { app, io };
