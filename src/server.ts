import { createServer } from 'http';

import app from './app';

const PORT = process?.env?.PORT || 3000;

export const server = async () => {
  const server = createServer(app);

  app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
  });
};
