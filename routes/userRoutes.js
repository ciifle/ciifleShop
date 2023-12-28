import express from 'express';
import { UpdateUser, createUser, getUsersById, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUsersById).put(UpdateUser)

export default router
