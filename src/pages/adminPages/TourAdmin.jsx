
import { useContext, useEffect, useState } from 'react';
import { getTourAPI } from '../../services/apiService';
import '../../styles/adminStyles/tourAdmin.scss'
import { message, Space, Table, Tag } from 'antd';
import { deleteSoftTourAPI, deleteTourAPI, fetchListTourDeletedAPI } from '../../services/adminAPI/adminApiService';


const TourAdmin = () => {
    const [getListTour, setGetListTour] = useState([])
    // const { checkLang, setCheckLang } = useContext(LangContext)
    const [getListTempTour, setGetListTempTour] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    // Fetch active tours
    const fetchListTour = async () => {
        try {
            const response = await getTourAPI();
            if (response?.message?.data) {
                setGetListTour(response.message.data);
            }
        } catch (error) {
            message.error('Failed to fetch active tours.');
            console.error(error);
        }
    };

    // Fetch deleted tours
    const fetchListTempTour = async () => {
        try {
            const response = await fetchListTourDeletedAPI();
            if (response?.message?.data) {
                setGetListTempTour(response.message.data);
            }
        } catch (error) {
            message.error('Failed to fetch deleted tours.');
            console.error(error);
        }
    };

    // Fetch all data 
    // const fetchData = async () => {
    //     //wait for loading
    //     setIsLoading(true)
    //     //fetch all data
    //     await Promise.all([fetchListTour(), fetchListTempTour()])
    //     setIsLoading(false)

    // }

    const columns = [
        {
            title: 'Tour Code',
            dataIndex: `tourCode`,
            key: `tourCode`,
            render: (_, record) => <a onClick={() => handleOnclickViewDetail(record._id)}>{record.tourCode}</a>,
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
                    {
                        !record.deleted ?
                            <>
                                <a onClick={() => handleOnclickViewDetail(record._id)}>View</a>
                                <a>Edit</a>
                                <a onClick={() => handleOnClickSoftDeteleByID(record._id)}>Soft Delete</a>
                            </>
                            :
                            <>
                                <a onClick={() => handleOnclickViewDetail(record._id)}>View</a>
                                <a > Revert</a>
                                <a onClick={() => handleOnClickDeteleByID(record._id)}> Delete</a>
                            </>


                    }

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

    // Fetch all data on mount
    useEffect(() => {
        // fetchListTour();
        // fetchListTempTour();
        const fetchData = async () => {
            //wait for loading
            setIsLoading(true)
            //fetch all data
            await Promise.all([fetchListTour(), fetchListTempTour()])
            setIsLoading(false)
        }
        fetchData();
    }, [])

    // handleFetchData()
    // console.log("handleFetchData", data);

    const handleOnclickViewDetail = (tourCode) => {
        console.log("view detail", tourCode)
    }

    // const handleOnClickDeteleByID = async (id) => {
    //     console.log("delete", id)
    //     let res = await deleteSoftTourAPI(id)
    //     console.log("check deleteSoftTourAPI", res)
    //     if (res.message && res.message.errCode === 0) {
    //         message.success('Tour deleted successfully');
    //         fetchListTour();
    //     }

    // }

    // Handle delete action
    const handleOnClickSoftDeteleByID = async (id) => {
        try {
            const response = await deleteSoftTourAPI(id);
            if (response?.message?.errCode === 0) {
                message.success('Tour deleted successfully');
                fetchListTour(); // Refresh active tours
                fetchListTempTour(); // Refresh trash tours
                // fetchData(); // Refresh both active and trash tours
            } else {
                message.error('Failed to delete tour.');
            }
        } catch (error) {
            message.error('An error occurred while deleting the tour.');
            console.error(error);
        }
    };

    // Handle delete action
    const handleOnClickDeteleByID = async (id) => {
        try {
            const response = await deleteTourAPI(id);
            if (response?.message?.errCode === 0) {
                message.success('Tour deleted successfully');
                fetchListTour(); // Refresh active tours
                fetchListTempTour(); // Refresh trash tours
                // fetchData(); // Refresh both active and trash tours
            } else {
                message.error('Failed to delete tour.');
            }
        } catch (error) {
            message.error('An error occurred while deleting the tour.');
            console.error(error);
        }
    };

    return (

        <div className="container-tourAdmin">
            <h1>
                List Tours
            </h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={getListTour} rowKey="_id" />
            )}
            <h1>Trash Tours</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={getListTempTour} rowKey="_id" />
            )}
        </div>
    );
};

export default TourAdmin;