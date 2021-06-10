import express from 'express';
import { getUsers, addUser,deleteUser } from '../controller/user-controller.js';

const route = express.Router();

route.get('/', getUsers);
route.post('/add', addUser);
route.delete('/:id', deleteUser);

export default route;