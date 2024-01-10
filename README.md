Just - Simple Chat App with Socket.io
This is a simple real-time chat application built using Socket.io, React, and Express.js. The app supports two modes: room-based chat and peer-to-peer chat.

Live Demo - https://just-iqx4.onrender.com/ (Render free tier may hibernate if inactive for 30s)

![Just](https://ibb.co/fX7Bcm0)

Features
Room Mode: Users can create or join chat rooms to communicate with others in the same room.
Peer-to-Peer Mode: Users can initiate one-on-one private chats with other users.
Technologies Used
React: Front-end library for building user interfaces.
Express.js: Back-end framework for handling server-side logic.
Socket.io: Real-time bidirectional event-based communication library.
Setup Instructions
Clone the repository:

Copy code
git clone https://github.com/your-username/chat-app.git
Navigate to the project directory:

Copy code
cd just
Install dependencies for both the client and server:

Copy code
# Install server dependencies
cd backend
npm install

# Install client dependencies
cd frontend
npm install

# Run the development servers:

Copy code
# Run the server
cd backend
npm start

# Run the client
cd frontend
npm start

Open your browser and go to http://localhost:3000 to use the chat application.

Usage
Choose between Room Mode and Peer-to-Peer Mode.
For Room Mode, create or join a room to chat with users in the same room.
For Peer-to-Peer Mode, enter the username of the person you want to chat with and start a private conversation.
Project Structure
client: React front-end code.
server: Express.js server code.
Dependencies
React
Express
Socket.io
Contributing
Feel free to contribute to the development of this chat app. Create issues, submit pull requests, or provide feedback to make it better!

License
This project is licensed under the MIT License - see the LICENSE file for details.
