
import { useContext, useEffect, useState } from 'react';
import { getTourAPI } from '../../services/apiService';
import '../../styles/adminStyles/tourAdmin.scss'
import { message, Space, Table, Tag } from 'antd';
import { deleteSoftTourAPI } from '../../services/adminAPI/adminApiService';


const TourAdmin = () => {
    const [getListTour, setGetListTour] = useState([])
    // const { checkLang, setCheckLang } = useContext(LangContext)




    const fetchListTour = async () => {
        let response = await getTourAPI();
        console.log(response.message.data);
        if (response.message.data) {
            console.log("test", response.message);
            setGetListTour(response.message.data);
        }
    }

    const columns = [
        {
            title: 'Tour Code',
            dataIndex: `tourCode`,
            key: `tourCode`,
            render: (tourCode) => <a onClick={() => handleOnclickViewDetail(tourCode)}>{tourCode}</a>,
        },
        {
            title: 'Tour Name',
            dataIndex: 'tourName',
            key: 'tourName',
        },
        {
            title: 'Address',
            dataIndex: 'tourContinent',
            key: 'tourContinent',
        },
        {
            title: 'Address',
            dataIndex: 'tourCountry',
            key: 'tourCountry',
        },
        {
            title: 'Address',
            dataIndex: 'tourPrivacy',
            key: 'tourPrivacy',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* <a>Invite {record.name}</a> */}
                    <a onClick={() => handleOnclickViewDetail(record._id)}>View</a>
                    <a>Edit</a>
                    <a onClick={() => handleOnClickDeteleByID(record._id)}>Soft Delete</a>

                </Space>
            ),
        },
    ];

    // const data = []
    // const handleFetchData = () => {
    //     for (let i = 0; i < getListTour.length; i++) {
    //         data.push({
    //             _id: getListTour[i]._id,
    //             tourCode: getListTour[i].tourCode,
    //             tourName: getListTour[i].tourName,
    //             tourContinent: getListTour[i].tourContinent,
    //             tourCountry: getListTour[i].tourCountry,
    //             tourPrivacy: getListTour[i].tourPrivacy,
    //             departFrom: getListTour[i].departFrom,
    //         })
    //     }
    // }

    useEffect(() => {
        fetchListTour();

    }, [])

    // handleFetchData()
    // console.log("handleFetchData", data);

    const handleOnclickViewDetail = (tourCode) => {
        console.log("view detail", tourCode)
    }

    const handleOnClickDeteleByID = async (id) => {
        console.log("delete", id)
        let res = await deleteSoftTourAPI(id)
        console.log("check deleteSoftTourAPI", res)
        if (res.message && res.message.errCode === 0) {
            message.success('Tour deleted successfully');
            fetchListTour();
        }

    }

    return (

        <div className="container-tourAdmin">
            <h1>
                List Tours
            </h1>
            <Table columns={columns} dataSource={getListTour} />
        </div>
    );
};

export default TourAdmin;