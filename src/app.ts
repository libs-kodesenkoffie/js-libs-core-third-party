import express, { json, urlencoded } from 'express';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
