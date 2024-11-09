import express from 'express';
const router = express.Router();
import { loginUser, logoutUser, signupUser } from '../controller/auth.controller.js';

router.post('/login', loginUser);

router.post('/signup', signupUser);

router.post('/logout', logoutUser);

export default router;