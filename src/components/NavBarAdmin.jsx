import { Menu } from 'antd';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.Context';
import { toast } from 'react-toastify';
import { LangContext } from '../context/Lang.Context';

const NavBarAdmin = () => {
    const { user, handleOnClickLogout } = useContext(AuthContext)
    // const storedUser = localStorage.getItem("userName");
    const { checkLang, setCheckLang } = useContext(LangContext)
    // console.log("checkLang: " + checkLang)
    // console.log("user", user)


    const { SubMenu } = Menu
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to={"/"}>Home</Link>
                </Menu.Item>

                <SubMenu key="submenu" title="Tour Admin">
                    <Menu.Item key="profile">
                        <Link to={"/createTour"}>
                            Create Tour
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="preferences">
                        <Link to={"/tourAdmin"}>
                            List Tour
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="bar">
                        <Link to={"/processBar"}>
                            Create Tour Process
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="blog">
                        <Link to={"/tourBlog"}>
                            Tour Blog
                        </Link>
                    </Menu.Item>

                    <SubMenu key="more-settings" title="More Settings">
                        <Menu.Item key="privacy">Privacy</Menu.Item>
                        <Menu.Item key="security">Security</Menu.Item>
                    </SubMenu>
                </SubMenu>

                {!user._id ?
                    [<Menu.Item key="login">
                        <Link to={"/login"}>
                            login
                        </Link>
                    </Menu.Item>]
                    : []}
                {user._id ?
                    [
                        <SubMenu key="subMenu" title={`welcome to ${user.userName}`}
                            style={{ float: "right" }}
                        >
                            <Menu.Item
                                key="logout"
                            >
                                <span onClick={() => handleOnClickLogout()} style={{ width: "100%" }}>
                                    logout
                                </span>
                            </Menu.Item>
                        </SubMenu>
                    ] :
                    [

                    ]
                }
                {/* {
                    <Menu.Item key="language">
                        <span onClick={() => setCheckLang(checkLang === 'en' ? 'vi' : 'en')}>
                            {checkLang === 'en' ? 'vi' : 'en'}
                        </span>
                    </Menu.Item>
                } */}
                {/* `welecome to ${user.name}`

                   
                } */}
            </Menu>
        </div >
    );
};

export default NavBarAdmin;