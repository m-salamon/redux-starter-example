import express from 'express-promise-router';
const router = express();
import cars from './cars';

router.use('/cars', cars);


export { router };