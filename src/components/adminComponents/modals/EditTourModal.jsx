import React, { useState } from 'react';
import { Card, Space, Button, Modal, Row, Col, Descriptions, Input, Select } from 'antd';


const EditTourModal = (props) => {
    const { edit, setEdit, dataTour, setDataTour } = props;
    // const [newDataTour, setNewDataTour] = useState([])
    console.log(">> Edit", dataTour)
    //get action inputs
    const handleOnChange = (key, value) => {
        console.log(value);
        setDataTour((prevData) =>
        ({
            ...prevData,
            [key]: value
        }));
    }

    //get action select 
    const handleSelectOnChangeClass = (value) => {
        setDataTour((prevData) =>
        ({
            ...prevData,
            tourClass: value
        }));

    };

    const handleSelectOnChangeContinent = (value) => {
        setDataTour((prevData) =>
        ({
            ...prevData,
            tourContinent: value
        }));
    }

    const data = [
        {
            key: '1',
            label: 'Tour Name',
            children: (
                <>
                    <Input defaultValue={dataTour.tourName} onChange={(event) => handleOnChange("tourName", event.target.value)}></Input>
                </>
            ),
            span: 2,
        }
        , {
            key: "2",
            label: 'Tour Code',
            children: (
                <>
                    <Input defaultValue={dataTour.tourCode} onChange={(event) => handleOnChange("tourCode", event.target.value)} disabled></Input>
                </>
            ),
            span: 2,
        }
        , {
            key: "3",
            label: 'Tour Class',
            children: (
                <>
                    <Select
                        defaultValue={dataTour.tourClass}
                        style={{
                            width: 120,
                        }}
                        onChange={handleSelectOnChangeClass}
                        options={[
                            {
                                value: 'luxury',
                                label: 'Luxury',
                            },
                            {
                                value: 'premium',
                                label: 'Premium',
                            },
                            {
                                value: 'economy',
                                label: 'Economy',
                            },
                        ]}
                    />
                </>
            ),
            span: 2,
        }
        , {
            key: "4",
            label: 'Tour Continent',
            children: (
                <>
                    <Select
                        defaultValue={dataTour.tourContinent}
                        style={{
                            width: 120,
                        }}
                        onChange={handleSelectOnChangeClass}
                        options={[
                            {
                                value: 'asia',
                                label: 'Asia',
                            },
                            {
                                value: 'africa',
                                label: 'Africa',
                            },
                            {
                                value: 'northAmerica',
                                label: 'North America',
                            },
                            {
                                value: 'southAmerica',
                                label: 'South America',
                            },
                            {
                                value: 'antarctica',
                                label: 'Antarctica',
                            },
                            {
                                value: 'northAmerica',
                                label: 'North America',
                            },
                            {
                                value: 'eu',
                                label: 'Europe',
                            },
                            {
                                value: 'australia',
                                label: 'Australia',
                            },
                        ]}
                    />
                </>
            ),
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



    console.log(">>> check ", dataTour)

    return (
        <>
            <Modal
                title="Edit Tour"
                open={edit}
                onOk={() => setEdit(false)}
                onCancel={() => setEdit(false)}
                width={window.innerWidth > 768 ? 1000 : '90%'}
            >

                {/* <Input value={editDataTour.tourName}></Input>
                <p>Some contents...</p>
                <p>Some contents...</p> */}
                <Descriptions title={`${dataTour.tourName}`} bordered items={data} />
            </Modal>
        </>
    );
};

export default EditTourModal;