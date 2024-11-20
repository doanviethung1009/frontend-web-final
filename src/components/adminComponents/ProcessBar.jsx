import { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import CreateTourComponent from './CreateTourComponent';
import TestApi from '../../pages/adminPages/TestApi';
import { useNavigate } from 'react-router-dom';
import FileUploader from './FileUploader';
import InboundPolicies from '../publicComponents/InboundPolicies';


const ProcessBar = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const navigation = useNavigate()
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
            />,
        },
        {
            title: 'Second',
            // content: 'Second-content',
            content: <FileUploader />,
        },
        {
            title: 'Last',
            content: <InboundPolicies />,
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        paddingLeft: 150,
    };

    return (
        <div>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => {
                        message.success('Processing complete!')
                        navigation('/tourAdmin')
                    }}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProcessBar;