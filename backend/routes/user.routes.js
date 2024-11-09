import express from 'express';
const router = express.Router();
import { getUsers } from '../controller/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

router.get('/', protectRoute, getUsers);

export default router;