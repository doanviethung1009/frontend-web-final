import { Menu } from 'antd';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.Context';
import { toast } from 'react-toastify';

const NavBarAdmin = () => {
    const { user, handleOnClickLogout } = useContext(AuthContext)
    // const storedUser = localStorage.getItem("userName");

    console.log("user", user)
    // const handleOnClickLogout = () => {
    //     setUser({
    //         avatar: "",
    //         email: "",
    //         fullName: "",
    //         id: "",
    //         role: "",
    //         phone: "",
    //     });
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('userName');
    //     // localStorage.removeItem('tourId');
    //     toast.success("user has been logged out")
    //     navigate("/login");  // Redirect to login page
    // }

    const { SubMenu } = Menu
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to={"/"}>Home</Link>
                </Menu.Item>

                <SubMenu key="submenu" title="Settings">
                    <Menu.Item key="profile">
                        <Link to={"/createTour"}>
                            Create Tour
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="preferences">
                        <Link to={"/tourAdmin"}>
                            Tour Admin
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="test">
                        <Link to={"/testApi"}>
                            Test API
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
                                <Link onClick={() => handleOnClickLogout()} style={{ width: "100%" }}>
                                    logout
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                    ] :
                    [

                    ]
                }
                {/* `welecome to ${user.name}`

                   
                } */}
            </Menu>
        </div >
    );
};

export default NavBarAdmin;