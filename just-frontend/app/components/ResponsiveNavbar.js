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
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        handleResize();
    }, []);

    return (
        <Menu mode={isMobile ? "vertical" : "horizontal"} className='bg-black-700' theme='dark'>
            <Menu.Item key="mail">
                <a href="/"><HomeFilled /> Home</a>
            </Menu.Item>
            {/* <SubMenu title={<span>Settings</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu> */}
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