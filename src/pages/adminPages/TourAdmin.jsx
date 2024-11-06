
import { useEffect, useState } from 'react';
import { getTourAPI } from '../../services/apiService';
import '../../styles/adminStyles/tourAdmin.scss'
const TourAdmin = () => {
    const [getListTour, setGetListTour] = useState([])


    const fetchListTour = async () => {
        let response = await getTourAPI();
        console.log(response.message.data);
        if (response.message.data) {
            console.log(response.message.data);
            setGetListTour(response.message.data);
        }

    }

    useEffect(() => {
        fetchListTour();
    }, [])


    return (

        <div  >

            <table>
                <thead>
                    <tr>
                        <th>Mã Tour</th>
                        <th>Tour Name</th>
                        <th>Phương tiện</th>
                        <th>Lưu trú</th>
                        <th>Nơi khởi hành</th>
                        <th>Nơi đến</th>
                        <th>Thời gian</th>
                        <th>Số ngày</th>
                        <th>Loại tour</th>
                        <th>Giá</th>
                        <th>Tổng quan</th>
                        <th>Điểm nổi bật</th>
                        <th>Lịch trình chi tiết</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {getListTour.map((tour) => {
                        return (
                            <tr key={tour._id}>
                                <td >{tour.tourCode}</td>
                                <td >{tour.tourName}</td>
                                {/* <td >
                                {tour.tourTransport.map((transport) => {
                                    return <span key={transport._id}>{transport.vehicle} <br /></span>
                                })}
                            </td> */}
                                <td>{tour.tourAccommodation}</td>
                                <td>{tour.departFrom}</td>
                                <td>{tour.departTo}</td>
                                <td>{tour.tourSchedule}</td>
                                <td>{tour.tourDuration}</td>
                                <td>{tour.departTo}</td>
                                <td>{tour.tourAccommodation}</td>
                                <td>{tour.departFrom}</td>
                                <td>{tour.departTo}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table >

        </div >
    );
};

export default TourAdmin;