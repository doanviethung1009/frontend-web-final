import React, { Children } from 'react';
import { Card, Space, Button, Modal, Row, Col, Descriptions } from 'antd';
const OpenDetailTour = (props) => {
    // const [open, setOpen] = React.useState(false);
    const { open, setOpen, dataTour } = props

    // const [loading, setLoading] = React.useState(true);
    // const showLoading = () => {
    //     setOpen(true);
    //     setLoading(false);

    //     // // Simple loading mock. You should add cleanup logic in real world.
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 200);
    // };


    const data = [
        {
            key: '1',
            label: 'Tour Name',
            children: dataTour.tourName,
            span: 2,
        }
        , {
            key: "2",
            label: 'Tour Code',
            children: dataTour.tourCode,
            span: 2,
        }
        , {
            key: "3",
            label: 'Tour Class',
            children: dataTour.tourClass,
            span: 2,
        }
        , {
            key: "4",
            label: 'Tour Continent',
            children: dataTour.tourContinent,
            span: 2,
        }
        , {
            key: "5",
            label: 'Tour Country',
            children: dataTour.tourCountry,
            span: 2,
        }
        , {
            key: "6",
            label: 'Tour Category',
            children: dataTour.tourCategory,
            span: 2,
        }
        , {
            key: "7",
            label: 'Tour Durations',
            children: `${dataTour.tourDurationDay || 0} day(s) ${dataTour.tourDurationNight || 0} night(s)`,
            span: 2,
        }
        , {
            key: "8",
            label: 'Depart from',
            children: dataTour.departFrom,
            span: 2,
        }
        , {
            key: "9",
            label: 'Tour Continent',
            children: dataTour.tourContinent,
            span: 2,
        }
        // , {
        //     key: "10",
        //     label: 'Tour filter Tag',
        //     children: dataTour.filterTag,
        //     span: 2,
        // }
        // , {
        //     key: "11",
        //     label: 'Tour Continent',
        //     children: dataTour.tourContinent,
        //     span: 2,
        // }
        , {
            key: "12",
            label: 'Tour Continent',
            children: dataTour.tourContinent,
            span: 2,
        }
        , {
            key: "13",
            label: 'Tour Highlight VI',
            children: dataTour.tourHighlightVI,
            span: 12,
        }
        , {
            key: "14",
            label: 'Tour Highlight EN',
            children: dataTour.tourHighlightEN,
            span: 12,
        }
        , {
            key: "15",
            label: 'Description VI',
            children: dataTour.tourDescriptionVI,
            span: 12,
        }
        , {
            key: "16",
            label: 'Description EN',
            children: dataTour.tourDescriptionEN,
            span: 12,
        }
        , {
            key: "17",
            label: 'Tour Detail VI',
            children: dataTour?.tourDetailVI && Array.isArray(dataTour.tourDetailVI) ? (
                dataTour.tourDetailVI.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        {/* Safely render HTML content */}
                        <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </div>
                ))
            ) : (
                <span>No details available</span>
            ),
            span: 12,
        }
        , {
            key: "18",
            label: 'Tour Detail EN',
            children: dataTour?.tourDetailEN && Array.isArray(dataTour.tourDetailEN) ? (
                dataTour.tourDetailEN.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        {/* Safely render HTML content */}
                        <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </div>
                ))
            ) : (
                <span>No details available</span>
            ),
            span: 12,
        }
        , {
            key: "19",
            label: 'Tour Highlight VI',
            children: (
                <div>
                    <img style={{ width: "300px" }} src={`${import.meta.env.VITE_API_URL}images/thumbnail-${dataTour.tourCode}/${dataTour.tourImageThumbnail}`} alt="" />
                </div>
            ),
            span: 4,
        }
        , {
            key: "19",
            label: 'Tour Highlight VI',
            children: (dataTour?.tourImageHero ? (
                dataTour.tourImageHero.map((item, index) => {
                    return (
                        <div key={index}>
                            <img style={{ width: "300px" }} src={`${import.meta.env.VITE_API_URL}images/hero-${dataTour.tourCode}/${item}`} alt="" />
                        </div>
                    )
                })
            )
                : (
                    <span>
                        No hero image available
                    </span>
                )

            ),
            span: 4,
        }

    ]


    console.log(">>> check log", dataTour)
    return (
        <>
            {/* <Button type="primary" onClick={showLoading}>
                Open Modal
            </Button> */}
            <Modal
                // title={<p>View {dataTour.tourName}</p>}
                // footer={
                //     <Button type="primary" onClick={showLoading}>
                //         Reload
                //     </Button>
                // }
                // loading={loading}
                width={window.innerWidth > 768 ? 1000 : '90%'}
                open={open}
                onCancel={() => setOpen(false)}
                onOk={() => setOpen(false)}
            >
                {/* <>
                    <Row>
                        <Col span={12}><h3>Tour Name:</h3></Col>

                        <Col span={12}> {dataTour.tourName}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Tour Code:</h3></Col>
                        <Col span={12}> {dataTour.tourCode}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Description:</h3></Col>
                        <Col span={12}> {dataTour.tourDescriptionVI}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Category:</h3></Col>
                        <Col span={12}> {dataTour.tourCategory}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Class:</h3></Col>
                        <Col span={12}> {dataTour.tourClass}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Privacy:</h3></Col>
                        <Col span={12}> {dataTour.tourPrivacy}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Continent:</h3></Col>
                        <Col span={12}> {dataTour.tourContinent}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Country:</h3></Col>
                        <Col span={12}> {dataTour.tourCountry}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>State/Province/City:</h3></Col>
                        <Col span={12}> {dataTour.tourState}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Schedule:</h3></Col>
                        <Col span={12}> {dataTour.tourScheduledChooseDate.$d}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Duration:</h3></Col>
                        <Col span={12}> {dataTour.tourDurationDay} days {dataTour.tourDurationNight}  </Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Filter Tag:</h3></Col>
                        <Col span={12}> {dataTour.filterTag}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Price:</h3></Col>
                        <Col span={12}> {dataTour.tourPrice}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Highlights:</h3></Col>
                        <Col span={12}> {dataTour.tourHighlights}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Transportation:</h3></Col>
                        <Col span={12}> {dataTour.tourTransport}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Activities:</h3></Col>
                        <Col span={12}> {dataTour.tourActivities}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Images:</h3></Col>
                        <Col span={12}> {dataTour.tourImageHero}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Accommodation:</h3></Col>
                        <Col span={12}> {dataTour.tourAccommodation}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Feedback:</h3></Col>
                        <Col span={12}> {dataTour.tourFeedback}</Col>
                    </Row>
                    <Row>
                        <Col span={12}><h3>Related Tours:</h3></Col>
                        <Col span={12}> {dataTour.tourRelatedTours}</Col>
                    </Row>
                </> */}
                <Descriptions title={`${dataTour.tourName}`} bordered items={data} />
            </Modal>
        </>
    );
};
export default OpenDetailTour;
