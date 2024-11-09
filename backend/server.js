import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import path from 'path';

import { connectToMongoDB } from './db/connetTotMongoDB.js'; 

import authRoutes from './routes/auth.routes.js';
import messageRotues from './routes/message.routes.js';
import userRotues from './routes/user.routes.js';

import { app, server } from './socket/socket.js';
const port = process.env.PORT_SERVER || 3001;

const __dirname = path.resolve();

config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRotues)
app.use('/api/user', userRotues)

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend','dist','index.html'));
});

server.listen(port, () => {
  connectToMongoDB();
  console.log(`Server listening on port http://localhost:${port}`);
});