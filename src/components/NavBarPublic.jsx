import { useEffect, useState, useCallback } from "react";
import { Button, Menu, } from 'antd';
import DataItemsPublic from "../contents/DataItemsPublic";
import "../styles/NavBar.scss"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_vecotra.png"

// FUNCTION_TO_GET_WINDOW_DIMENSIONS
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const NavBarPublic = (props) => {
    const [current, setCurrent] = useState('home');
    // const [checkLang, setCheckLang] = useState('en');
    const { checkLang, setCheckLang } = props;
    const { t, i18n } = useTranslation();

    // GET_WINDOW_DIMENSIONS
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const { height, width } = windowDimensions;
    let isWidthOver450px = width > 450;
    // END GET_WINDOW_DIMENSIONS

    // Change language and update state
    const handleOnChangeLanguageButton = (lang) => {
        // console.log('>>check language', lang);
        // console.log("check i18n", i18n.language)
        // i18n.changeLanguage(i18n.language === lang ? 'vi' : 'en');
        // i18n.changeLanguage(lang);
        setCheckLang(lang);
    }

    // Memoize handleOnChangeLanguage to ensure it doesn't change on each render
    const handleOnChangeLanguage = useCallback((key) => {
        if (key) {
            i18n.changeLanguage(key);
            // console.log(`Language changed to: ${key}`);
        }
    }, [i18n]);


    useEffect(() => {
        handleOnChangeLanguage(checkLang);
    }, [checkLang, handleOnChangeLanguage])

    // Handle menu click events
    const onClick = (e) => {
        // console.log('click ', e);
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


    // Create menu items based on DataItemsPublic
    const menuItems = DataItemsPublic.map((item) => {
        // CHECK_IF_WIDTH_IS_OVER_450PX_WILL_NOT_SHOW_LANGUAGE
        if (isWidthOver450px && item.key === 'language') return;

        return {
            key: item.key,
            label: t(item.key),
            icon: item.icon,
            children: item.children?.map((child) => {
                // Check if the child's key is "en" or "vi" and set the label accordingly
                let label = (child.key === "en" || child.key === "vi" || child.children)
                    ? t(child.key) // Use Link if key is "en" or "vi"
                    : <Link to={`${child.label}`}>{t(child.key)}</Link>; // Otherwise, just use translated text
                // need to return to render the child
                return {
                    key: child.key,
                    label,
                    icon: child.icon,
                    children: child.children?.map((grandchild) => ({
                        key: grandchild.key,
                        label: <Link to={`${grandchild.label}`}>{t(grandchild.key)}</Link>,
                        icon: grandchild.icon,
                    })).filter((grandchild) => grandchild.key !== 'popupClassName'),
                };
            }),
        }
    });

    // const menuItems2 = DataItemsPublic.map((item) => (
    //     {
    //         key: item.key,
    //         label: t(item.key),
    //         icon: item.icon,
    //         children: item.children?.map((child) => ({
    //             key: child.key,
    //             label: <Link to={`${child.label}`} >{t(child.key)}</Link>,
    //             icon: child.icon,
    //             children: child.children?.map((grandchild) => {
    //                 let key = grandchild.key;
    //                 let icon = grandchild.icon;
    //                 let label = (grandchild.key === "en" || grandchild.key === "vi")
    //                     ? t(grandchild.key)   // Use Link if key is "en" or "vi"
    //                     : <Link to={`${grandchild.label}`}>{t(grandchild.key)}</Link>;  // Otherwise, just use translated text
    //                 console.log("check", label)
    //                 return {
    //                     key,
    //                     icon,
    //                     label,
    //                 }
    //             })
    //         })
    //         )
    //     }
    // ))

    return (
        <div className="container">
            <div className="logo">
                <p>
                    <a href="/">
                        <img src={logo} alt="logo_vecotra" style={{ width: "150px" }} />
                    </a>
                </p>
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
        </div>
    );
};

export default NavBarPublic;