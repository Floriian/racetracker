/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { authRouter } from './auth/auth.routes';
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors";
import { urlencoded } from 'body-parser';
import { env } from './env';

const app = express();

app.use(cors({ origin: [""]}));
app.use(cookieParser());
app.use(urlencoded());

app.use(morgan(':method :url :response-time ms'));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(authRouter);

const port = env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
