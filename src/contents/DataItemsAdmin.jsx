
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const DataItemsAdmin = [
    {
        label: 'About us',
        key: 'about',
        labelKey: 'about',
        icon: <MailOutlined />,
        children: [
            {
                label: 'Our Story',
                key: 'story',
            },
            {
                label: 'Mission & Vision',
                key: 'mission',
            },
            {
                label: 'Our Team',
                key: 'team',
            },
            {
                label: 'Sustainability',
                key: 'sustainability',
            },
            {
                label: 'Impact',
                key: 'Impact',
            },
        ]
    },
    {
        label: 'Product',
        key: 'product',
        icon: <SettingOutlined />,
        children: [
            {
                // type: 'group',
                label: 'Vietnam Travel',
                popupClassName: true,
                key: "vietnam",
                children: [
                    {
                        label: 'Northern Vietnam',
                        key: 'northern',
                    },
                    {
                        label: 'Central Vietnam',
                        key: 'central',
                    },
                    {
                        label: 'Southern Vietnam',
                        key: 'southern',
                    },
                ],
            },
            {
                // type: 'group',
                label: 'Overseas Travel',
                key: 'overseas',
                children: [
                    {
                        label: 'Asia Destinations',
                        key: 'asia',
                    },
                    {
                        label: 'Global Adventures',
                        key: 'global',
                    },
                ],
            },
            {
                // type: 'group',
                label: 'Event Organization',
                key: 'event',
                children: [
                    {
                        label: 'Corporate Retreats',
                        key: 'corporate',
                    },
                    {
                        label: 'Private Events',
                        key: 'private',
                    },
                    {
                        label: 'Community Events',
                        key: 'community',
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
                key: 'strategicPartnerships',
            },
            {
                label: "Local Collaborators",
                key: 'localCollaborators',
            },
            {
                label: "Eco - Accommodations",
                key: 'ecoAccommodations',
            },
            {
                label: "Conservation Organizations",
                key: 'conservationOrganizations',
            },
            {
                label: "Join as a Partner",
                key: 'joinPartnerships',
            }
        ]
        // disabled: true,zs
    },

    {
        key: 'guide',
        label: "Travel Guide",
        children: [
            {
                label: "Vietnam Destinations",
                key: 'travelGuide1',
            },
            {
                label: "Sustainable Travel Tips",
                key: 'travelGuide2',
            },
            {
                label: "Cultural Etiquette",
                key: 'travelGuide3',
            },
            {
                label: "Local Food & Souvenirs",
                key: 'travelGuide4',
            },
            {
                label: "Travel Checklist",
                key: 'travelGuide5',
            },

        ]
    },
];

export default DataItemsAdmin;


