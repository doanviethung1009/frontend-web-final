
import { useEffect, useState } from 'react';
import { getTourAPI } from '../../services/apiService';
import '../../styles/adminStyles/tourAdmin.scss'
import { message, Space, Table, Tag } from 'antd';
import { deleteSoftTourAPI, deleteTourAPI, fetchListTourDeletedAPI } from '../../services/adminAPI/adminApiService';
import OpenDetailTour from '../../components/adminComponents/modals/OpenDetailTour';


const TourAdmin = () => {
    // const [getListTour, setGetListTour] = useState([])
    // // const { checkLang, setCheckLang } = useContext(LangContext)
    // const [getListTempTour, setGetListTempTour] = useState([])
    const [activeTours, setActiveTours] = useState([]);
    const [trashTours, setTrashTours] = useState([]);
    const [loading, setLoading] = useState({ active: true, trash: true });
    // const [isLoading, setIsLoading] = useState(true)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const fetchTours = async () => {
        try {
            setLoading({ active: true, trash: true });
            const [activeResponse, trashResponse] = await Promise.all([getTourAPI(), fetchListTourDeletedAPI()]);

            setActiveTours(activeResponse?.message?.data || []);
            setTrashTours(trashResponse?.message?.data || []);
            setLoading({ active: false, trash: false });
        } catch (error) {
            message.error('Failed to fetch tours.');
            console.error(error);
        }
    };

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
                                <a onClick={() => handleOnclickViewDetail(record._id, record)}>View</a>
                                <a>Edit</a>
                                <a onClick={() => handleDelete(record._id, true)}>Soft Delete</a>
                            </>
                            :
                            <>
                                <a onClick={() => handleOnclickViewDetail(record._id)}>View</a>
                                <a > Revert</a>
                                <a onClick={() => handleDelete(record._id, false)}> Delete</a>
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
        // const fetchData = async () => {
        //     //wait for loading
        //     setIsLoading(true)
        //     //fetch all data
        //     await Promise.all([fetchListTour(), fetchListTempTour()])
        //     setIsLoading(false)
        // }
        // fetchData();
        fetchTours()
    }, [])

    // handleFetchData()
    // console.log("handleFetchData", data);

    const handleOnclickViewDetail = (tourCode, record) => {
        console.log("view detail", tourCode)
        console.log("check record", record)
        // setIsOpenModal(true);
        console.log("check is open ", activeTours[0])

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
    // const handleOnClickSoftDeteleByID = async (id) => {
    //     try {
    //         const response = await deleteSoftTourAPI(id);
    //         if (response?.message?.errCode === 0) {
    //             message.success('Tour deleted successfully');
    //             fetchListTour(); // Refresh active tours
    //             fetchListTempTour(); // Refresh trash tours
    //             // fetchData(); // Refresh both active and trash tours
    //         } else {
    //             message.error('Failed to delete tour.');
    //         }
    //     } catch (error) {
    //         message.error('An error occurred while deleting the tour.');
    //         console.error(error);
    //     }
    // };

    // Handle delete action
    // const handleOnClickDeteleByID = async (id) => {
    //     try {
    //         const response = await deleteTourAPI(id);
    //         if (response?.message?.errCode === 0) {
    //             message.success('Tour deleted successfully');
    //             fetchListTour(); // Refresh active tours
    //             fetchListTempTour(); // Refresh trash tours
    //             // fetchData(); // Refresh both active and trash tours
    //         } else {
    //             message.error('Failed to delete tour.');
    //         }
    //     } catch (error) {
    //         message.error('An error occurred while deleting the tour.');
    //         console.error(error);
    //     }
    // };


    //handle delete tour
    const handleDelete = async (id, isSoftDelete) => {
        try {
            const response = isSoftDelete ? await deleteSoftTourAPI(id) : await deleteTourAPI(id);
            if (response?.message?.errCode === 0) {
                message.success('Tour updated successfully');
                fetchTours(); // Refresh tours
            } else {
                message.error('Failed to update tour.');
            }
        } catch (error) {
            message.error('An error occurred while updating the tour.');
            console.error(error);
        }
    };


    return (
        <>
            <div className="container-tourAdmin">
                <h1>
                    List Tours
                </h1>
                {/* {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Table columns={columns} dataSource={activeTours} rowKey="_id" />
                )}
                <h1>Trash Tours</h1>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Table columns={columns} dataSource={trashTours} rowKey="_id" />
                )} */}
                {loading.active ? (
                    <div>Loading...</div>
                ) : (
                    <Table columns={columns} dataSource={activeTours} rowKey="_id" />
                )}
                <h1>Trash Tours</h1>
                {loading.trash ? (
                    <div>Loading...</div>
                ) : (
                    <Table columns={columns} dataSource={trashTours} rowKey="_id" />
                )}
            </div>
            <OpenDetailTour
                open={isOpenModal}
                setOpen={setIsOpenModal}
            />
        </>
    );

};

export default TourAdmin;