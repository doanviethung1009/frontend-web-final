import { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import CreateTourComponent from './CreateTourComponent';
import TestApi from '../../pages/adminPages/TestApi';
import { useNavigate } from 'react-router-dom';
import FileUploader from './FileUploader';
import InboundPolicies from '../publicComponents/InboundPolicies';
import PreviewCreateTourProcess from './PreviewCreateTourProcess';
import { createTourAPI, getTourAPI } from '../../services/apiService';


const ProcessBar = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const navigation = useNavigate()
    const [listData, setListData] = useState("");

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'First',
            // content: 'First-content',
            content: <CreateTourComponent
                next={next}
                listData={listData}
                setListData={setListData}

            />,
        },
        {
            title: 'Second',
            // content: 'Second-content',
            content: <FileUploader
                listData={listData}
                setListData={setListData}
                next={next}

            />,
        },
        {
            title: 'Last',
            content: <PreviewCreateTourProcess
                listData={listData}
            />,
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle = {
        lineHeight: '260px',
        // textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,

    };

    const handleOnClick = async () => {
        let res = await createTourAPI(listData)
        console.log("check createTourAPI", res)
        if (res.message && res.message.errCode === 0) {
            message.success('Tour created successfully');
            navigation(`/tourAdmin`)
        } else (
            message.error(`Error: ${res.message}`)
        )
    }

    console.log(">>> check data", listData)

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Create Tour Progress</h3>
            <div className="processBar-container" style={{
                justifyItems: "center", padding: "20px", overflowY: "auto"
            }}>
                <Steps current={current} items={items} />
                <div style={contentStyle}>{steps[current].content}</div>
                <div style={{ marginTop: 24 }}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => handleOnClick()}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div >
        </div>

    );
};

export default ProcessBar;