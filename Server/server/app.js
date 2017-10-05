// ==============================
// get the packages we need =================
// ===================================
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/index';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log requests to the console.
app.use(logger('dev'));
router(app);
app.use('/', router);


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.listen('3000', () => {
  console.log('The More-Recipe App Server is running on port 3000');
});

// This will be our application entry. Our server is setup here.