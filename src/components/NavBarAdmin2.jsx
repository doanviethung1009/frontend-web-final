import React, { useContext, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Button, Menu } from 'antd';
import { AuthContext } from '../context/Auth.Context';
import { Link } from 'react-router-dom';



const NavBarAdmin2 = () => {
    const { user, handleOnClickLogout } = useContext(AuthContext)
    // const storedUser = localStorage.getItem("userName");
    const items = [
        {
            key: 'g0',
            label: `Welcome to ${user.userName}`,
            type: "group",
            icon: <MailOutlined />,
        },
        {
            key: 'sub1',
            label: <Link to={"/"}> Home Page </Link>,
            icon: <MailOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: 'sub2',
            label: 'Tour Admin',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: '1',
                    label: <Link to={"/tourAdmin"}>List Tour</Link>,
                },
                {
                    key: 'g1',
                    label: 'Create Tour',
                    type: "group",
                    children: [
                        {
                            key: '2',
                            label: <Link to={"/processBar"}>Create Tour Progress</Link>,
                        },
                        {
                            key: '3',
                            label: 'Create Tour',
                        }
                    ]
                },
                {
                    key: 'g2',
                    label: 'Delete Tour',
                    type: "group",
                    children: [
                        {
                            key: '4',
                            label: 'Delete Tour',
                        }
                    ]
                },
                {
                    key: 'g3',
                    type: "group",
                    label: 'Edit Tour',
                    children: [{
                        key: '5',
                        label: 'Edit Tour',
                    }]
                },
                {
                    key: 'g4',
                    type: "group",
                    label: 'Upload Files',
                    children: [{
                        key: '6',
                        label: 'Upload image Tour',
                    }]
                },
                {
                    key: 'sub3',
                    label: 'User',
                    children: [
                        {
                            key: '7',
                            label: 'Option 7',
                        },
                        {
                            key: '8',
                            label: 'Option 8',
                        },
                    ],
                },
            ],
        },
        {
            type: 'divider',
        },
        {
            key: 'sub4',
            label: 'Blogs Admin',
            icon: <SettingOutlined />,
            children: [
                {
                    key: '9',
                    label: 'Option 9',
                },
                {
                    key: '10',
                    label: 'Option 10',
                },
                {
                    key: '11',
                    label: 'Option 11',
                },
                {
                    key: '12',
                    label: 'Option 12',
                },
            ],
        },
        {
            key: 'sub5',
            label: 'Ticket Admin',
            icon: <SettingOutlined />,
            children: [
                {
                    key: 'g5',
                    type: "group",
                    label: 'Dashboard',
                    children: [
                        {
                            key: '13',
                            label: 'List Ticket',
                        },
                    ]
                },
                {
                    key: '14',
                    label: 'Create Ticket',
                },
                {
                    key: '15',
                    label: 'Delete Ticket',
                },
                {
                    key: '16',
                    label: 'Option 18',
                },
            ],
        },
        {
            key: 'grp',
            label: 'Setting',
            type: 'group',
            children: [
                {
                    key: '20',
                    label: user._id ? <span onClick={() => handleOnClickLogout()}> Log out</span> : <Link to={"/login"}>Login</Link>,
                },
            ],
        },
    ];
    console.log("user", user)
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default NavBarAdmin2;