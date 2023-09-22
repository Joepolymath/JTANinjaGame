import http from 'http';
import app from '../app';
import connectDb from '../configs/database.config';
import { PORT, DB_URI } from '../configs/env.config';
import logger from '../configs/logger.config';

connectDb(DB_URI);

const server = http.createServer(app);

const port = process.env.PORT || 4002;

server.listen(port, () => {
  logger.info(
    `Server actively eavesdropping 👂 👂 👂 👂 @port: ${PORT}`.bgCyan.yellow
  );
});
