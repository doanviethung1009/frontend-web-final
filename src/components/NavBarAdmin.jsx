import { Menu } from 'antd';

const NavBarAdmin = () => {
    const { SubMenu } = Menu
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    Home
                </Menu.Item>

                <SubMenu key="submenu" title="Settings">
                    <Menu.Item key="profile">Profile</Menu.Item>
                    <Menu.Item key="preferences">Preferences</Menu.Item>

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