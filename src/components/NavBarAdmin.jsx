import { useState } from "react";
import { Menu } from 'antd';
import DataItemsAdmin from "../contents/DataItemsAdmin";
import "../styles/NavBar.scss"
import { useTranslation } from "react-i18next";

const NavBarAdmin = () => {
    const [current, setCurrent] = useState('about');
    const { t } = useTranslation();

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div className="container">
            <div className="logo">
                <p >
                    Vecotra
                </p>
            </div>
            <div className="MenuAdmin">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={DataItemsAdmin} />
            </div>
        </div>
    );
};

export default NavBarAdmin;