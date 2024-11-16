
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
                        <th>Category</th>
                        <th>Tên tour</th>
                        <th>Từ khoá SEO</th>
                        <th>Châu lục</th>
                        <th>Quốc gia</th>
                        <th>Tour ID</th>
                        <th>Thời gian(ngay)</th>
                        <th>Thời gian(dem)</th>
                        <th>Phương tiện</th>
                        <th>Lưu trú</th>
                        <th>Khởi hành 1</th>
                        <th>Khởi hành 2</th>
                        <th>Khởi hành từ</th>
                        <th>Hình thức tour</th>
                        <th>Giá VND</th>
                        <th>Giá USD</th>
                        <th>Ngôn ngữ hỗ trợ</th>
                        <th>Tổng quan VI</th>
                        <th>Tổng quan EN</th>
                        <th>Điểm nổi bật VI</th>
                        <th>Điểm nổi bật EN</th>
                        <th>Lịch trình chi tiết VI</th>
                        <th>Lịch trình chi tiết EN</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {getListTour.map((tour) => {
                        return (
                            <tr key={tour._id}>
                                <td >{tour.tourCategory}</td>
                                <td >{tour.tourName}</td>
                                <td >{tour.seoTag}</td>
                                <td>{tour.tourContinence}</td>
                                <td>{tour.tourCountry}</td>
                                <td>{tour.tourCode} </td>
                                <td> {tour.tourDaySub1}</td>
                                <td>{tour.tourDaySub2}</td>
                                <td>{tour.tourTransport}</td>
                                <td>{tour.tourAccommodation}</td>
                                <td>{tour.tourScheduledChooseDate}</td>
                                <td>{tour.tourScheduledSelectedDate}</td>
                                <td>{tour.departFrom}</td>
                                <td>{tour.tourType}</td>
                                <td>{tour.langSupport}</td>
                                <td>{tour.tourPriceVND}</td>
                                <td>{tour.tourPriceEN}</td>
                                <td>{tour.tourDescriptionVI}</td>
                                <td>{tour.tourDescriptionEN}</td>
                                <td>{tour.tourHighlightVI}</td>
                                <td>{tour.tourHighlightVI}</td>
                                <td>{tour.tourDetailVI.map((item) => {

                                    return (
                                        <div key={item._id}>
                                            <h3> {item.title}:</h3>
                                            <p> {item.description}</p>
                                        </div>

                                    )

                                })}</td>
                                <td>{tour.tourDetailEN.map((item) => {

                                    return (
                                        <div key={item._id}>
                                            <h3> {item.title}:</h3>
                                            <p> {item.description}</p>
                                        </div>

                                    )

                                })}</td>
                                <td>
                                    <button onClick={() => {
                                        console.log("delete tour")
                                    }}>Delete</button>
                                    <button onClick={() => {
                                        console.log("edit tour")
                                    }}>Edit</button>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>

            </table >

        </div >
    );
};

export default TourAdmin;