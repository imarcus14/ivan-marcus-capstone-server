import configuration from '../knexfile.js';
import express from 'express';
import initKnex from 'knex';

const knex = initKnex(configuration);
const router = express.Router();

router
    .route("/:userId")
    .get(async (req, res) => {
        try{
            const dogsWithUserData = await knex('dogs')
                .join('users', 'dogs.user_id', 'users.id')
                .where({'users.id': req.params.userId})
            res.status(200).json(dogsWithUserData)
    
        }catch(error){
            console.error(error);
            res.status(400).json({ error });
        }
    });

export default router;