import configuration from '../knexfile.js';
import express from 'express';
import fs from 'fs';
import initKnex from 'knex';
import multer from 'multer';
import path from 'path'

const knex = initKnex(configuration);
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(process.cwd(), "uploads");
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
})
const upload = multer({storage})


router
    .route("/")
    .get(async (req, res) => {
        try{
            const dogsWithUserData = await knex('dogs')
                .select('dogs.*', 'users.*', 'dogs.name as dogName')
                .join('users', 'dogs.user_id', 'users.id')
              
            res.status(200).json(dogsWithUserData)
    
        }catch(error){
            console.error(error);
            res.status(400).json({ error });
        }
    })
    .post(upload.single('photo'), async (req, res) => {
        const { name, age, breed, personality, user_id } = req.body;

        if(!req.file){
            return res.status(400).json({ message: "Dog photo is required" });
        }
       
        if (!name) {
            return res.status(400).json({ message: "Dog name is required" });
        }
        if (!age) {
            return res.status(400).json({ message: "Dog age is required" });
        }
        if (!breed) {
            return res.status(400).json({ message: "Dog breed is required" });
        }
        if (!personality) {
            return res.status(400).json({ message: "Dog personality is required" });
        }

        try {

            const userExists = await knex("users").where("id", user_id).first();
            if (!userExists) {
                return res.status(400).json({ message: "Invalid user ID" });
            }

            const [newDogId] = await knex("dogs").insert({
                name,
                age,
                breed,
                personality,
                user_id,
                photo: req.file ? `uploads/${req.file.filename}` : null,  
            });

            const newDog = await knex("dogs")
                .where('id', newDogId)
                .first();

      

            res.status(201).json(newDog);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating dog", error: error.message});
        }
    })
   

router  
    .route("/latest")
    .get(async (req, res) => {
        try{
            const latestDog = await knex('dogs')
                .select('dogs.*', 'users.*', 'dogs.name as dogName')
                .join('users', 'dogs.user_id', 'users.id')
                .orderBy("dogs.created_at", "desc")
                .first();

            if(!latestDog){
                return res.status(404).json("No new dog found");
            }
                  
            res.status(200).json(latestDog)
        
        }catch(error){
            console.error(error);
            res.status(400).json({ error });
        }
    });

router
    .route("/:username")
    .get( async (req,res) => {
        const {username} = req.params;

        try{
            const user = await knex("users").where("username", username).first();
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const dog = await knex("dogs").where("user_id", user.id).first();

            res.json({
                username: user.username,
                name: user.name,
                city: user.city,
                dogName: dog?.name || "",
                dogAge: dog?.age || "",
                dogBreed: dog?.breed || "",
                dogPersonality: dog?.personality || "",
                photo: dog?.photo || "",
            });
            
        }catch(error){
            console.error(error);
        }
    });




export default router;