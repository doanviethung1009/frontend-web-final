import { useEffect, useState, useCallback } from "react";
import { Button, Menu, } from 'antd';
import DataItemsPublic from "../contents/DataItemsPublic";
import "../styles/NavBar.scss"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavBarPublic = () => {
    const [current, setCurrent] = useState('about');
    const [checkLang, setCheckLang] = useState('vi');
    const { t, i18n } = useTranslation();

    const handleOnChangeLanguageButton = (lang) => {
        console.log('>>check language', lang);
        // i18n.changeLanguage(i18n.language === lang ? 'vi' : 'en');
        i18n.changeLanguage(lang);
        setCheckLang(lang);
    }

    // Memoize handleOnChangeLanguage to ensure it doesn't change on each render
    const handleOnChangeLanguage = useCallback((key) => {
        if (key) {
            i18n.changeLanguage(key);
            console.log(`Language changed to: ${key}`);
        }
    }, [i18n]);


    useEffect(() => {
        newFunction();

        function newFunction() {
            handleOnChangeLanguage(checkLang);
        }
    }, [checkLang, handleOnChangeLanguage])

    const onClick = (e) => {
        console.log('click ', e);
        if (e.key === 'en') {
            setCheckLang(e.key);
        } else if (e.key === 'vi') {
            setCheckLang(e.key);
        }
        setCurrent(e.key);
    };



    // const items = [
    //     {
    //         key: 'en',
    //         label: 'en',
    //         onClick: () => handleOnChangeLanguage('en')

    //     },
    //     {
    //         key: 'vi',
    //         label: 'vi',
    //         onClick: () => handleOnChangeLanguage('vi')
    //     },

    // ]

    const menuItems = DataItemsPublic.map((item) => (
        {
            key: item.key,
            label: t(item.key),
            icon: item.icon,
            children: item.children?.map((child) => ({
                key: child.key,
                label: <Link to={`${child.label}`} >{t(child.key)}</Link>,
                icon: child.icon,
                children: child.children?.map((grandchild) => ({
                    key: grandchild.key,
                    label: (<Link to={`${grandchild.label}`}>{t(grandchild.key)}</Link>),
                    icon: grandchild.icon,
                }))?.filter((grandchild) => grandchild.key !== 'popupClassName'),
            })),

        }
    ))
    return (
        <div className="container">
            <div className="logo">
                <p>  <a href="/"  >
                    Vecotra
                </a></p>
            </div>
            <div className="MenuAdmin">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} />
            </div>
            <div className="containerLang">
                {checkLang === 'en' ? <Button className="btnLang" onClick={() => handleOnChangeLanguageButton('vi')}>
                    vi
                </Button> :
                    <Button className="btnLang" onClick={() => handleOnChangeLanguageButton('en')}>
                        en
                    </Button>
                }
                {/* <Button onClick={() => handleOnChangeLanguage([checkLang])}>
            </Button> */}
            </div>
        </div >
    );
};

export default NavBarPublic;