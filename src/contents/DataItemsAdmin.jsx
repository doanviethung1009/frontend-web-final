
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const DataItemsAdmin = [
    {
        label: 'About us',
        key: 'About us',
        icon: <MailOutlined />,
        children: [
            {
                label: 'Our Story',
                key: 'about:1',
            },
            {
                label: 'Mission & Vision',
                key: 'about:2',
            },
            {
                label: 'Our Team',
                key: 'about:3',
            },
            {
                label: 'Sustainability',
                key: 'about:2',
            },
            {
                label: 'Impact',
                key: 'about:3',
            },
        ]
    },
    {
        label: 'Product',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Vietnam Travel',
                popupClassName: true,
                children: [
                    {
                        label: 'Northern Vietnam',
                        key: 'setting:1',
                    },
                    {
                        label: 'Central Vietnam',
                        key: 'setting:2',
                    },
                    {
                        label: 'Southern Vietnam',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Overseas Travel',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Event Organization',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Partner',
        key: 'app',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: "Strategic Partnerships",
                key: 'partner:1',
            },
            {
                label: "Local Collaborators",
                key: 'partner:2',
            },
            {
                label: "Eco - Accommodations",
                key: 'partner:3',
            },
            {
                label: "Conservation Organizations",
                key: 'partner:4',
            },
            {
                label: "Join as a Partner",
                key: 'partner:5',
            }
        ]
        // disabled: true,zs
    },

    {
        key: 'alipay',
        label: "Travel Guide",
        children: [
            {
                label: "Vietnam Destinations",
                key: 'travelGuide:1',
            },
            {
                label: "Sustainable Travel Tips",
                key: 'travelGuide:2',
            },
            {
                label: "Cultural Etiquette",
                key: 'travelGuide:3',
            },
            {
                label: "Local Food & Souvenirs",
                key: 'travelGuide:4',
            },
            {
                label: "Travel Checklist",
                key: 'travelGuide:5',
            },

        ]
    },
];

export default DataItemsAdmin;


