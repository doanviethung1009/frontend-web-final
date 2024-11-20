
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';


const DataItemsPublic = [
    {
        label: 'Home',
        key: 'home',
        labelKey: 'home',
    },
    {
        label: 'About us',
        key: 'about',
        labelKey: 'about',
        // icon: <MailOutlined />,
    },
    {
        label: 'Product',
        key: 'product',
        // icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Vietnam Travel',
                popupClassName: true,
                key: "vietnam",
                children: [
                    {
                        label: "/products/travelVietnam/northernVietnam",
                        key: 'northern',
                    },
                    {
                        label: "/products/travelVietnam/centralVietnam",
                        key: 'central',
                    },
                    {
                        label: 'Southern Vietnam',
                        key: 'southern',
                    },
                ],
            },
            {
                type: 'group',
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
                type: 'group',
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
        // icon: <AppstoreOutlined />,
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
    {
        key: "language",
        label: "Language",
        children: [
            {
                key: "en",
                label: "English",
            },
            {
                key: "vi",
                label: "Vietnamese",
            }
        ],
    }
];

export default DataItemsPublic;


