
const { randSuperheroName } = require('@ngneat/falso');

const cookie = require('cookie');
const cors = require('cors');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const corsOptions = {
    origin: ['https://just-iqx4.onrender.com'],
    credentials: true,
};
const app = express();
app.use(cors(corsOptions));
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "https://just-iqx4.onrender.com",
        methods: ["GET", "POST"],
        credentials: true,
    }
});

const waitingQueue = [];
const activeChatRooms = new Map();

// io.on('connection', (socket) => {

//     console.log(`User ${socket.id} connected`);

//     waitingQueue.push(socket);

//     if (waitingQueue.length >= 2) {
//         const user1 = waitingQueue.shift();
//         const user2 = waitingQueue.shift();
//         const roomId = generateRoomId();
//         startChat(user1, user2, roomId);
//     }

//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id);

//         const index = waitingQueue.indexOf(socket);
//         if (index !== -1) {
//             waitingQueue.splice(index, 1);
//         }

//         const room = findChatRoomBySocket(socket);
//         if (room) {
//             const otherUser = getOtherUserInRoom(socket, room);
//             io.to(otherUser.id).emit('chatEnd', { "userId": otherUser.id, "userName": otherUser.username, "message": 'disconnected' });
//             console.log(otherUser);
//             closeChatRoom(room);
//         }
//     });
// });

io.on('connection', (socket) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie?.justSettings || '');
    console.log("Cookie", cookies);
    const userInterests = cookies?.justSettings?.interests;
    console.log("userInterests", userInterests);
    socket.interests = userInterests;

    waitingQueue.push(socket);

    if (waitingQueue.length >= 2) {
        const user2 = socket;
        const roomId = generateRoomId();

        const matchingUser = findMatchingUserByInterests(user2, waitingQueue);

        if (matchingUser) {
            console.log('matching interests', 'u1', user2, 'u2', matchingUser);
            const index1 = waitingQueue.indexOf(user2);
            const index2 = waitingQueue.indexOf(matchingUser);

            waitingQueue.splice(index1, 1);
            waitingQueue.splice(index2, 1);

            startChat(user2, matchingUser, roomId);
        } else {
            const user1 = waitingQueue.shift();
            const user2 = waitingQueue.shift();
            console.log('random match', 'u1', user1, 'u2', user2);
            const roomId = generateRoomId();
            startChat(user1, user2, roomId);
        }
    }

    socket.on('disconnect', () => {
        const index = waitingQueue.indexOf(socket);
        if (index !== -1) {
            waitingQueue.splice(index, 1);
        }

        const room = findChatRoomBySocket(socket);
        if (room) {
            const otherUser = getOtherUserInRoom(socket, room);
            io.to(otherUser.id).emit('chatEnd', { "userId": otherUser.id, "userName": otherUser.username, "message": 'disconnected' });
            closeChatRoom(room);
        }
    });
});

function findMatchingUserByInterests(user, queue) {
    const matchingUsers = queue.filter(otherUser => otherUser.id !== user.id && interestsMatch(user.interests, otherUser.interests));

    if (matchingUsers.length > 0) {
        return matchingUsers[0];
    }

    return null;
}

function interestsMatch(interests1, interests2) {

    return interests1?.some(interest => interests2?.includes(interest));
}


function startChat(user1, user2, roomId) {

    const user1Id = user1.id;
    const user1name = randSuperheroName();
    const user2Id = user2.id;
    const user2name = randSuperheroName();
    user1.username = user1name;
    user2.username = user2name;
    user1.emit('paired', { user1name, user2name });
    user2.emit('paired', { user1name, user2name });
    user1.join(roomId);
    user2.join(roomId);
    activeChatRooms.set(roomId, { user1, user2 });

    io.to(roomId).emit('chatStart', { "roomId": roomId, "userOneInterests": user1.interests, "userTwoInterests": user2.interests });

    user1.on('chatMessage', (messageData) => {
        io.to(roomId).emit('chatMessage', messageData);
    });

    user2.on('chatMessage', (messageData) => {
        io.to(roomId).emit('chatMessage', messageData);
    });

    user1.emit('userId', user1Id);
    user1.emit('userName', user1name);
    user2.emit('userId', user2Id);
    user2.emit('userName', user2name);
}


function findChatRoomBySocket(socket) {
    for (const [roomId, room] of activeChatRooms) {
        if (room.user1 === socket || room.user2 === socket) {
            return roomId;
        }
    }
    return null;
}

function getOtherUserInRoom(socket, roomId) {
    const room = activeChatRooms.get(roomId);
    return room.user1 === socket ? room.user2 : room.user1;
}

function closeChatRoom(roomId) {
    activeChatRooms.delete(roomId);
}

function generateRoomId() {
    return 'room_' + Math.random().toString(36).substring(7);
}

const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
