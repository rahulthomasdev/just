'use client'
import { Button, Input, Select, notification } from "antd";
import Cookie from 'js-cookie';
import { useState } from "react";
import "../../styles/style.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Settings() {
    const [interests, setInterests] = useState('');
    const [gender, setGender] = useState('male');
    const [genderFilter, setGenderFilter] = useState('female');


    const handleData = () => {
        const data = { 'interests': interests.split(','), 'gender': gender, 'genderFilter': genderFilter };
        Cookie.set('justSettings', JSON.stringify(data));
        notificationHandle();
    }

    const notificationHandle = () => {
        notification.success({
            message: "Settings upadated.",
            placement: 'topRight'
        })
    }

    return (
        <div className="h-screen w-full flex flex-col">
            <Header />
            <div className="container mx-auto grow p-2">
                <h1 className="text-white text-xl">Settings</h1>
                <p className="text-gray-400 py-3">Interests:</p>
                <div className="mx-3"><Input className="bg-gray-800 border-none text-white" placeholder="Reading, Coding, Traveling etc" onChange={(e) => setInterests(e.target.value)} /></div>
                <p className="text-gray-400 py-3">Gender:</p>
                <div className="mx-3">
                    <Select className="text-white"
                        defaultValue="male"
                        style={{ width: 120, }}
                        onChange={(value) => setGender(value)}
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                        ]}
                    /></div>
                <p className="text-gray-400 py-3">Gender Filter:</p>
                <div className="mx-3">
                    <Select className="text-white"
                        defaultValue="female"
                        style={{ width: 120, }}
                        onChange={(value) => setGenderFilter(value)}
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                        ]}
                    /></div>
                <div>
                    <Button className="text-white m-3 hover:!border-yellow-600 hover:!text-yellow-600 border-green-600" onClick={handleData}>Save</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
