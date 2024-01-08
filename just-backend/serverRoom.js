
const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');
const { randSuperheroName } = require('@ngneat/falso');


const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "https://just-iqx4.onrender.com",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    const userId = socket.id;
    const username = randSuperheroName();
    console.log(username);
    io.emit('userConnected', username);
    socket.emit('userId', userId);
    socket.emit('userName', username);

    console.log(`User ${userId} connected`);

    socket.on('chatMessage', (messageData) => {
        console.log(`Received message from user ${messageData.userId}: ${messageData.message}`);
        io.emit('chatMessage', messageData);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        io.emit('userDisconnected', { "userId": userId, "userName": username, "message": 'disconnected' });
    });
});



const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
