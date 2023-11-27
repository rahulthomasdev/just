'use client'
import {
    SendOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketRoom = () => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userConnected, setUserConnected] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    let data;


    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        newSocket.on('connect', () => {
            console.log('Connected to the server');
            setUserConnected(true);
        });
        newSocket.on('userDisconnected', (userData) => {
            console.log('Disconnected from the server');
            data = { "userId": userData.userId, "userName": userData.userName, "message": userData.message }
            setMessages((prevMessages) => [...prevMessages, data]);
            userData.userId === userId ? setUserConnected(false) : null;
        });
        newSocket.on('userId', (receivedUserId) => {
            setUserId(receivedUserId);
        });
        newSocket.on('userName', (username) => {
            setUserName(username);
        });
        newSocket.on('chatMessage', (messageData) => {
            console.log(`Received chat message: ${messageData.message}`);
            setMessages((prevMessages) => [...prevMessages, messageData]);
        });
        newSocket.on('userConnected', (username) => {
            data = { 'userName': username, 'message': 'connected' };
            setMessages((prevMessages) => [...prevMessages, data]);
        })
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const handleSendMessage = () => {
        if (socket && message.trim() !== '') {
            socket.emit('chatMessage', { userId, message, userName });
            setMessage('');
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }
    const handleReset = () => {
        if (userConnected) {
            if (clickCount === 0) {
                setClickCount(clickCount + 1);
            }
            if (clickCount === 1) {
                setUserConnected(false);
                socket.close();
                setClickCount(0);
            }

        } else {
            setUserConnected(true);
            socket.connect();
        }
    }

    return (
        <div className='h-full flex-grow flex flex-col justify-between'>
            <div>
                {console.log(messages)}
                {messages.map((msg, index) => (
                    <div key={index}>
                        {(msg.message === 'connected' || msg.message === 'disconnected') ? <div className='text-center text-gray text-sm'>User {msg.userName} {msg.message}</div> : null}
                        {(msg.message !== 'connected' && msg.message !== 'disconnected') && (msg.userId === userId ? <div className='text-right'><div className='m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block '><div className='!text-gray text-xs'>{msg.userName}</div> {msg.message}</div> </div> : <div className='text-left'><div className='m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block'><div className='!text-gray text-xs'>{msg.userName}</div> {msg.message}</div></div>)}
                    </div>
                ))}
            </div>
            <div className='flex w-full p-5'>
                <button onClick={handleReset} className='w-1/8 px-3 text-gray-400'>{userConnected ? (clickCount === 0 ? "Stop" : "Sure?") : "Next"}</button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='rounded-full w-full h-10 text-black px-3 bg-gray-800 text-white'
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSendMessage} className='w-1/8 px-3 text-xl'> <SendOutlined style={{ rotate: "-30deg", color: "#50C878" }} /></button>
            </div>

        </div>
    );
};

export default SocketRoom;
