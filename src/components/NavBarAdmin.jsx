import { useState } from "react";
import { Menu, Dropdown, Button } from 'antd';
import DataItemsAdmin from "../contents/DataItemsAdmin";
import "../styles/NavBar.scss"
import { useTranslation } from "react-i18next";

const NavBarAdmin = () => {
    const [current, setCurrent] = useState('about');
    const { t, i18n } = useTranslation();

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const handleOnChangeLanguage = (lang) => {
        console.log('>>check language', lang);
        // i18n.changeLanguage(i18n.language === lang ? 'en' : 'vi');
        i18n.changeLanguage(lang);
    }
    const items = [
        {
            key: 'en',
            label: 'en',
            onClick: () => handleOnChangeLanguage('en')

        },
        {
            key: 'vi',
            label: 'vi',
            onClick: () => handleOnChangeLanguage('vi')
        },

    ]

    const menuItems = DataItemsAdmin.map((item) => (
        {
            key: item.key,
            label: t(item.key),
            icon: item.icon,
            children: item.children?.map((child) => ({
                key: child.key,
                label: t(child.key),
                icon: child.icon,
                children: child.children?.map((grandchild) => ({
                    key: grandchild.key,
                    label: t(grandchild.key),
                    icon: grandchild.icon,
                }))?.filter((grandchild) => grandchild.key !== 'popupClassName'),
            })),

        }
    ))
    return (
        <div className="container">
            <div className="logo">
                <p >
                    Vecotra
                </p>
            </div>
            <div className="MenuAdmin">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} />
            </div>
            <div className="containerButton">
                {/* <button className="btnVI" onClick={() => handleOnChangeLanguage('vi')}>vi</button>
                <button className="btnEN" onClick={() => handleOnChangeLanguage('en')}>en</button> */}
                <Dropdown
                    menu={{ items }}
                    placement="bottom"
                // onClick={() => handleOnChangeLanguage(items.label)}
                >
                    <Button >Lang</Button>
                </Dropdown>


            </div>
        </div >
    );
};

export default NavBarAdmin;