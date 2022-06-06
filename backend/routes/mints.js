import express from 'express';
import { getSolanaTPS } from '../controllers/mints.js';

const router = express.Router();

router.get('/solanatps', getSolanaTPS);

export default router;