'use client'

import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocketPeer from "./components/SocketPeer";
import SocketRoom from "./components/SocketRoom";
import Mode from "./front";

export default function Home() {

    const [mode, setMode] = useState(null);
    return (
        <div className="h-screen w-full flex flex-col">
            <Header />
            {console.log(mode)}
            {mode === null && <>
                <Mode setMode={setMode} />
                <Footer />
            </>}
            {mode !== null && (mode ? <SocketPeer /> : <SocketRoom />)}
        </div>
    );
}
