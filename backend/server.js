import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';

import { connectToMongoDB } from './db/connetTotMongoDB.js'; 

import authRoutes from './routes/auth.routes.js';
import messageRotues from './routes/message.routes.js';
import userRotues from './routes/user.routes.js';

import { app, server } from './socket/socket.js';
const port = process.env.PORT_SERVER || 3001;

config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRotues)
app.use('/api/user', userRotues)

server.listen(port, () => {
  connectToMongoDB();
  console.log(`Server listening on port http://localhost:${port}`);
});