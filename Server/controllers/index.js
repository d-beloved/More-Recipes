const express = require('express')
 	, router = express.Router();

 router.use('/recipes', require('./recipes'));

 module.exports = router;