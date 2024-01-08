'use client'
import { HomeFilled, InfoCircleFilled, SettingFilled } from "@ant-design/icons";
import { Menu } from 'antd';
import { useEffect, useState } from 'react';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const LeftMenu = () => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    }
    if (typeof window !== "undefined") {
        window.addEventListener('resize', handleResize);
    }
    useEffect(() => {
        handleResize();
    }, []);

    return (
        <Menu mode={isMobile ? "vertical" : "horizontal"} className='bg-black-700' theme='dark'>
            <Menu.Item key="mail">
                <a href="/"><HomeFilled /> Home</a>
            </Menu.Item>
            <Menu.Item key="settings">
                <a href="/settings"><SettingFilled /> Settings</a>
            </Menu.Item>
            <Menu.Item key="about">
                <a href="/about"><InfoCircleFilled /> About</a>
            </Menu.Item>
        </Menu>
    );

}
export default LeftMenu;