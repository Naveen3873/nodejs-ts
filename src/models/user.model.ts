import { User } from '../types/user.type';

let users: User[] = [];

export const getAllUsers = () => users;

export const getUserById = (id: number) =>
  users.find(user => user.id === id);

export const createUser = (user: User) => {
  users.push(user);
  return user;
};

export const updateUser = (id: number, data: Partial<User>) => {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...data };
    return users[index];
  }
  return null;
};

export const deleteUser = (id: number) => {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};