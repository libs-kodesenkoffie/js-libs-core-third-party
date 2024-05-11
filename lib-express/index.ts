import express, {
  Application,
  json,
  urlencoded,
  static as staticPath,
} from 'express';

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(staticPath('/public'));

app.get('/', (req, res) => {
  res.status(200).send('<h1>Root Route</h1>');
});

app.get('/html', (req, res) => {
  res.status(200).send('<h1>HTML from SERVER</h1>');
});

app.get('/json', (req, res) => {
  res.status(200).json({
    code: 200,
    status: true,
    info: 'OK',
    timestamp: Date.now(),
    message: 'JSON from SERVER',
  });
});

app.use('/health', (req, res, next) => {
  res.status(200).json({ status: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('PORT:', PORT);
});
