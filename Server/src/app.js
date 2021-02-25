
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './controllers';

// Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log requests to the console.
app.use(logger('dev'));
app.use('/api/v1/', router);


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.listen('8000', () => {
  console.log('The More-Recipe App Server is running');
});
