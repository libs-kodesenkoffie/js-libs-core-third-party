import { db } from 'config/db';
import express, {
  Application,
  json,
  urlencoded,
  static as staticPath,
} from 'express';
import { databaseCommands, userTable1 } from 'helpers/basics';

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(staticPath('/public'));

// Playground
(async () => {
  // const result = await db.raw(databaseCommands.CREATE);
  // console.log(result);
})();

const PORT = 3000;
app.listen(PORT, () => {
  console.log('PORT:', PORT);
});
