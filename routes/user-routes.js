import configuration from '../knexfile.js';
import express from 'express';
import initKnex from 'knex';

const knex = initKnex(configuration);
const router = express.Router();

router
    .route("/")
    .post(async (req, res) => {
        console.log("Request body for /users:", req.body);
        const {
            name,
            username,
            email,
            password,
            city
        } = req.body;

       
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!username) {
            return res.status(400).json({ message: "Username is required" });
        }
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }
        if (!city) {
            return res.status(400).json({ message: "City is required" });
        }

        try {
            const [newUserId] = await knex("users").insert({
                name,
                username,
                email,
                password,
                city,   
            });

            // const newUser = await knex("users")
            //     .where('id', newUserId)
            //     .first();

            // const { created_at, updated_at, ...userNew } = newUser

            res.status(201).json({ id: newUserId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating user" });
        }
    })




export default router;

