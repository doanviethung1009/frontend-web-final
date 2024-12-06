
import { useContext, useEffect, useState } from 'react';
import { getTourAPI } from '../../services/apiService';
import '../../styles/adminStyles/tourAdmin.scss'
import { LangContext } from '../../context/Lang.Context';
const TourAdmin = () => {
    const [getListTour, setGetListTour] = useState([])
    // const { checkLang, setCheckLang } = useContext(LangContext)



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
        <div className="table-container">
            <h1>
                List Tour
            </h1>
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