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
                    {/* {listData.filterTag} */}
                </Card>
                <Card title="Continent" size="small">
                    {/* {listData.tourContinent} */}
                </Card>
                <Card title="Country" size="small">
                    {/* {listData.tourCountry} */}
                </Card>
                <Card title="Privacy" size="small">
                    {/* {listData.tourPrivacy} */}
                </Card>
                <Card title="State/Province/City" size="small">
                    <ul>

                        {listData.tourState ? listData.tourState.map((item, index) => (
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
                    <p>{listData.tourDurationDay} days {listData.tourDurationNight}  </ p >

                </Card>
                <Card title="Transport" size="small">
                    <ul>

                        {listData.tourTransport ? listData.tourTransport.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                            :
                            <p></p>
                        }
                    </ul>
                </Card>
                <Card title="Accommodation" size="small">
                    <ul>

                        {listData.tourAccommodation ? listData.tourAccommodation.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                            :
                            <p></p>
                        }
                    </ul>
                </Card>
                <Card title="Depart from" size="small">
                    {listData.departFrom ? listData.departFrom : null}

                </Card>
                <Card title="Language support" size="small">

                    <ul>

                        {listData.langSupport ? listData.langSupport.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                            :
                            <p></p>
                        }
                    </ul>
                </Card>
                <Card title="Description VI" size="small">
                    {listData ? listData.tourDescriptionVI : null}

                </Card>
                <Card title="Description EN" size="small">
                    {listData ? listData.tourDescriptionEN : null}

                </Card>
                <Card title="Giá tour" size="small">
                    {listData ? listData.tourPriceVND : null}

                </Card>
                <Card title="Giá tour USD" size="small">
                    {listData ? listData.tourPriceEN : null}
                </Card>
                <Card title="Rating" size="small">
                    {listData ? listData.tourStar : null}
                </Card>
                <Card title="Điểm nổi bật" size="small">
                    {listData ? listData.tourHighlightVI : null}
                </Card>
                <Card title="Điểm nổi bật EN" size="small">
                    {listData ? listData.tourHighlightEN : null}
                </Card>
                <Card title="Lịch trình chi tiết" size="small" style={{ padding: "10px", textAlign: "left" }} >
                    {
                        listData.tourDetailVI ? listData.tourDetailVI.map((item, index) => {
                            return (
                                <>
                                    <ul>
                                        <h3>
                                            {item.title}
                                        </h3>
                                    </ul>
                                    <ul >
                                        {/* {item.description} */}
                                        <li dangerouslySetInnerHTML={{ __html: item.description }}>
                                        </li>
                                    </ul>


                                </>
                            )
                        }

                        )
                            :
                            <p></p>
                    }

                </Card >
                <Card title="Lịch trình chi tiết EN" size="small" style={{ padding: "10px", textAlign: "left" }}>
                    {/* {listData ? listData.tourDetailEN.map((item, index) => {
                        return (
                            <>
                                <h3>
                                    {item.title}
                                </h3>
                                <ul key={index}>
                                    <li> {item.description}</li>
                                </ul>
                            </>
                        )
                    }
                    )
                        :
                        <p></p>
                    } */}
                    {listData.tourDetailEN ? listData.tourDetailEN.map((item, index) => {
                        return (
                            <>
                                <ul>
                                    <h3>
                                        {item.title}
                                    </h3>
                                </ul>
                                <ul >
                                    {/* {item.description} */}
                                    <li dangerouslySetInnerHTML={{ __html: item.description }}>
                                    </li>
                                </ul>


                            </>
                        )
                    }

                    )
                        :
                        <p></p>
                    }

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