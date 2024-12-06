
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";


const DataItemsPublic = [
    {
        label: 'Home',
        key: 'home',
        labelKey: '/',
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
                        labelKey: "/products/travelVietnam/northernVietnam",
                        key: 'northern',
                    },
                    {
                        labelKey: "/products/travelVietnam/centralVietnam",
                        label: "/products/travelVietnam/centralVietnam",
                        key: 'central',
                    },
                    {
                        labelKey: "/products/travelVietnam/southernVietnam",
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
                        labelKey: "/products/overseas/asia",
                    },
                    {
                        labelKey: "/products/overseas/global",
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
                        labelKey: "/products/event/corporate",
                        label: 'Corporate Retreats',
                        key: 'corporate',
                    },
                    {
                        labelKey: "/products/event/private",
                        label: 'Private Events',
                        key: 'private',
                    },
                    {
                        labelKey: "/products/event/community",
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
        labelKey: 'partner'
        // icon: <AppstoreOutlined />,
        // children: [
        //     {
        //         label: "Strategic Partnerships",
        //         key: 'strategicPartnerships',
        //     },
        //     {
        //         label: "Local Collaborators",
        //         key: 'localCollaborators',
        //     },
        //     {
        //         label: "Eco - Accommodations",
        //         key: 'ecoAccommodations',
        //     },
        //     {
        //         label: "Conservation Organizations",
        //         key: 'conservationOrganizations',
        //     },
        //     {
        //         label: "Join as a Partner",
        //         key: 'joinPartnerships',
        //     }
        // ]
        // disabled: true,zs
    },

    {
        key: 'guide',
        label: "Travel Guide",
        labelKey: "guide",
        children: [
            {
                label: "Vietnam Destinations",
                labelKey:'vietnamDestinations',
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


