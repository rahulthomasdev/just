'use client'
import {
    SendOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const ChatComponent = () => {
    const [socket, setSocket] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [userConnected, setUserConnected] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [commonInterests, setcommonInterests] = useState([]);
    let data;
    useEffect(() => {
        const socket = io('https://just-backend-peer.onrender.com', { withCredentials: true });

        socket.on('connect', () => {
            console.log('Connected to the server:', socket.id);
            setUserConnected(true);
        });
        socket.on('userId', (receivedUserId) => {
            setUserId(receivedUserId);
        });
        socket.on('userName', (username) => {
            setUserName(username);
        });
        socket.on('chatEnd', (userData) => {
            data = { "userId": userData.userId, "userName": userData.userName, "message": userData.message }
            setMessages((prevMessages) => [...prevMessages, data]);
            userData.userId === userId ? setUserConnected(false) : null;
        });
        socket.on('chatStart', (chatData) => {
            console.log(`Received chat message: ${chatData}`);
            setcommonInterests(chatData?.userOneInterests?.filter(interest => chatData?.userTwoInterests?.includes(interest)));
        });
        socket.on('paired', ({ user1name, user2name }) => {
            data = { 'user1Name': user1name, 'user2Name': user2name, 'message': 'connected' };
            setMessages((prevMessages) => [...prevMessages, data]);
        })
        socket.on('chatMessage', (messageData) => {
            console.log(`Received chat message: ${messageData.message}`);
            setMessages((prevMessages) => [...prevMessages, messageData]);
        });
        setSocket(socket);
        return () => {
            socket.disconnect();
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
            setMessages([]);
            setUserConnected(true);
            socket.connect();
        }
    }

    function getRandomDarkColor() {
        var darkRed = Math.floor(Math.random() * 128);
        var darkGreen = Math.floor(Math.random() * 128);
        var darkBlue = Math.floor(Math.random() * 128);
        var darkColor = "#" + darkRed.toString(16) + darkGreen.toString(16) + darkBlue.toString(16);

        return darkColor;
    }
    var user1color = getRandomDarkColor();
    var user2color = getRandomDarkColor();

    return (
        <div className='h-full flex-grow flex flex-col justify-between'>
            <div>
                {console.log(messages)}
                {messages.map((msg, index) => (
                    <div key={index}>
                        {(msg.message === 'connected' || msg.message === 'disconnected') ? <div className='text-center text-gray text-sm'>User {msg.user1Name !== userName ? (msg.user1Name ?? msg.userName) : (msg.user2Name ?? msg.userName)} {msg.message}.{commonInterests?.length > 0 ? "You both are interested in" + commonInterests?.forEach(element => {
                            return <span className='font-bold'>{element} </span>;
                        }) : null}</div> : null}
                        {(msg.message !== 'connected' && msg.message !== 'disconnected') && (msg.userId === userId ? <div className='text-right'><div className='m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block '><div className='!text-gray text-xs' style={{ color: user1color }}>{msg.userName}</div> {msg.message}</div> </div> : <div className='text-left'><div className='m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block'><div className='!text-gray text-xs' style={{ color: user2color }}>{msg.userName}</div> {msg.message}</div></div>)}
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

export default ChatComponent;
