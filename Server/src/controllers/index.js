import express from 'express';
import routes from './recipes';

const router = express.Router();

router.use('/recipes', routes);

export default router;
