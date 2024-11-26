import { Card, Space, Button } from 'antd';
import { useEffect, useState } from 'react';
import OpenImageModal from './modals/OpenImageModal';
const PreviewCreateTourProcess = (props) => {

    const { listData } = props
    const [listHeroImage, setListHeroImage] = useState([])
    useEffect(() => {
        setListHeroImage(listData.tourImageHero)
    }, [listData])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Space
                direction="vertical"
                size="middle"

                style={{
                    display: 'flex',
                    textAlign: 'center',
                    minWidth: '500px',
                }}
            >
                <Card title="Category" size="small">
                    {listData.tourCategory}
                </Card>
                <Card title="Class" size="small">
                    {listData.tourClass}
                </Card>
                <Card title="Privacy" size="small">
                    {listData.tourPrivacy}
                </Card>
                <Card title="Tour Name" size="small">
                    {listData.tourName}
                </Card>
                <Card title="Tour Code" size="small">
                    {listData.tourCode}
                </Card>
                <Card title="Filter tag" size="small">
                    {listData.filterTag}
                </Card>
                <Card title="Continent" size="small">
                    {listData.tourContinent}
                </Card>
                <Card title="Country" size="small">
                    {listData.tourCountry}
                </Card>
                <Card title="Privacy" size="small">
                    {listData.tourPrivacy}
                </Card>
                <Card title="State/Province/City" size="small">
                    <ul>

                        {listData ? listData.tourState.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                            :
                            <p></p>
                        }
                    </ul>
                </Card>
                <Card title="Schedule" size="small">
                    {/* <p>{listData.tourScheduledChooseDate.$d}</p> */}
                    <p>Card content</p>
                </Card>
                <Card title="Duration" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Transport" size="small">

                </Card>
                <Card title="Accommodation" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Depart from" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Language support" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Description VI" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Description EN" size="small">

                </Card>
                <Card title="Giá tour" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Giá tour USD" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Rating" size="small">

                </Card>
                <Card title="Điểm nổi bật" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Điểm nổi bật EN" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Lịch trình chi tiết" size="small">
                    <p>{listData.tourDetailVI}</p>
                </Card>
                <Card title="Lịch trình chi tiết EN" size="small">
                    <p>{listData.tourDetailEN}</p>
                </Card>
                <Card title="Thumbnail Image" size="small">
                    <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <OpenImageModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        listData={listData}
                    />

                </Card>
                <Card title="Hero Image" size="small">
                    {/* {listHeroImage.map((item) => {
                        return (
                            <div key={item}>
                                <img src={`${import.meta.env.VITE_API_URL}images/hero-${listData.tourCode}/${listHeroImage.item}`} alt="" />
                            </div>
                        )
                    })} */}
                    <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <OpenImageModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        listData={listData}
                    />

                </Card>

            </Space >
            {/* <div>
                <img src={`${import.meta.env.VITE_API_URL}images/thumbnail-123/thumbnail-123-imag.png`} alt="" />
            </div> */}
        </>
    );
};

export default PreviewCreateTourProcess;