import './dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

let port = 4000 || process.env.PORT;
app.listen(port);
console.log('server is running on port ' + port);