
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const DataItemsAdmin = [
    {
        label: 'About us',
        key: 'about',
        icon: <MailOutlined />,
        children: [
            {
                label: 'Our Story',
                key: 'Story',
            },
            {
                label: 'Mission & Vision',
                key: 'Mission',
            },
            {
                label: 'Our Team',
                key: 'Team',
            },
            {
                label: 'Sustainability',
                key: 'Sustainability',
            },
            {
                label: 'Impact',
                key: 'Impact',
            },
        ]
    },
    {
        label: 'Product',
        key: 'Product',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Vietnam Travel',
                popupClassName: true,
                children: [
                    {
                        label: 'Northern Vietnam',
                        key: 'Northern',
                    },
                    {
                        label: 'Central Vietnam',
                        key: 'Central',
                    },
                    {
                        label: 'Southern Vietnam',
                        key: 'Southern',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Overseas Travel',
                children: [
                    {
                        label: 'Asia Destinations',
                        key: 'Asia',
                    },
                    {
                        label: 'Global Adventures',
                        key: 'Global',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Event Organization',
                children: [
                    {
                        label: 'Corporate Retreats',
                        key: 'Corporate',
                    },
                    {
                        label: 'Private Events',
                        key: 'Private',
                    },
                    {
                        label: 'Community Events',
                        key: 'Community',
                    },
                ],
            },
        ],
    },
    {
        label: 'Partner',
        key: 'partner',
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
        key: 'Guide',
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


