/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import { prisma } from './utils/prisma';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!!' });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
