import { createServer } from 'http';

import app from './app';

console.log();

export const server = async () => {
  const server = createServer(app);
  server.listen(4000, () => {
    console.log(`PORT: ${process.env.PORT || 3000}`);
  });
};
