import { Request, Response } from 'express';
import * as userModel from '../models/user.model';

export const getUsers = (_: Request, res: Response) => {
  res.json(userModel.getAllUsers());
};

export const getUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = userModel.getUserById(id);
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

export const addUser = (req: Request, res: Response) => {
  const user = userModel.createUser(req.body);
  res.status(201).json(user);
};

export const updateUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = userModel.updateUser(id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
};

export const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = userModel.deleteUser(id);
  deleted ? res.json(deleted) : res.status(404).json({ message: 'User not found' });
};
