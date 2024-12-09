import { Server } from 'socket.io';
import cors from 'cors';
import dogsRoutes from './routes/dog-routes.js';
import dotenv from'dotenv';
import express from 'express';
import multer from 'multer';
import path from 'path';
import usersRoutes from './routes/user-routes.js';
dotenv.config();

const PORT = process.env.PORT || 8081;


const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), "uploads")));

app.use("/dogs", dogsRoutes);
app.use("/users", usersRoutes);

const server= app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

const io = new Server(server, {
    cors:{
        origin: "*",
    },
});

const chatHistory = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on("join room", ({room}) => {
        socket.join(room)
        console.log(`user joined room ${room}`)

        socket.emit("chat history", chatHistory[room] || [])
    })

    socket.on('chat message', ({room, msg, sender}) => {
        console.log(`Message recieved in room ${room}: ${msg}`);
      

        if (!chatHistory[room]){
            chatHistory[room]=[];
        }
        chatHistory[room].push({ sender, msg });

        io.to(room).emit("chat message", { sender, msg });
    });

    socket.on('disconnect', () => {
        console.log('User has disocnnected', socket.id);
    });
});





