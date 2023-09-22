import express from 'express';
import usersController from '../controllers/users.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', authMiddleware, usersController.getUsers);
router.post('/', authMiddleware, usersController.identifyClient);
router.patch('/weapon', authMiddleware, usersController.selectWeapon);

export default router;
