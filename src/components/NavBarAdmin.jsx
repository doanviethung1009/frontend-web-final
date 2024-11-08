import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavBarAdmin = () => {
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

                    <SubMenu key="more-settings" title="More Settings">
                        <Menu.Item key="privacy">Privacy</Menu.Item>
                        <Menu.Item key="security">Security</Menu.Item>
                    </SubMenu>
                </SubMenu>

                <Menu.Item key="about">About</Menu.Item>
            </Menu>
        </div>
    );
};

export default NavBarAdmin;