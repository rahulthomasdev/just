import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import LeftMenu from "./ResponsiveNavbar";


const Header = () => {
    const [state, setState] = useState({
        current: 'mail',
        visible: false
    });
    const showDrawer = () => {
        setState({
            visible: true,
        });
    };
    const onClose = () => {
        setState({
            visible: false,
        });
    };
    return (
        <div>
            <nav className="menuBar flex">
                <div className="md:hidden flex items-center justify-center ps-3" style={{ background: "#01172a" }}>
                    <Button className="barsMenu bg-gray-700 text-black  md:hidden" type="primary" onClick={() => showDrawer()}>
                        <span className="barsBtn"><MenuOutlined /></span>
                    </Button>
                </div>
                <div className="logo">
                    <a href=""><h1 className="text-xl font-bold p-5" style={{ background: "#01172a" }}>Just</h1></a>
                </div>
                <div className="menuCon grow" style={{ background: "#01172a" }}>
                    <div className="leftMenu hidden md:block h-full">
                        <LeftMenu />
                    </div>
                </div>
            </nav>
            <Drawer
                title="Just"
                placement="left"
                closable={false}
                onClose={() => onClose()}
                open={state.visible}
                style={{ background: "#01172a" }}
            >
                <LeftMenu />
            </Drawer>
        </div>);
}
export default Header;