import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from'dotenv';
import express from 'express';
dotenv.config();

const PORT = process.env.PORT || 8081;


const app = express();
app.use(cors());
app.use(express.json());

const server= app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

const io = new Server(server, {
    cors:{
        origin: "*",
    },
});

io.on('connection', (socket) => {
    // console.log('A user connected:', socket.id);

    socket.on('chat message', (msg) => {
        // console.log('Message Recieved', msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        // console.log('User has disocnnected', socket.id);
    });
});

// const app = express();
// app.use(cors());
// app.use(express.json());



