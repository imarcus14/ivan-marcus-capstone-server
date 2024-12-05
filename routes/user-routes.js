import configuration from '../knexfile.js';
import express from 'express';
import initKnex from 'knex';

const knex = initKnex(configuration);
const router = express.Router();

export default router;