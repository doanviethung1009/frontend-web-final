import React from 'react';
import { Button, Modal } from 'antd';
const OpenDetailTour = (props) => {
    // const [open, setOpen] = React.useState(false);
    const { open, setOpen } = props

    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
        setOpen(true);
        // setLoading(false);

        // Simple loading mock. You should add cleanup logic in real world.
        // setTimeout(() => {
        //     setLoading(false);
        // }, 20);
    };
    console.log(">>> check log", open)
    return (
        <>
            <Button type="primary" onClick={showLoading}>
                Open Modal
            </Button>
            <Modal
                title={<p>Loading Modal</p>}
                footer={
                    <Button type="primary" onClick={showLoading}>
                        Reload
                    </Button>
                }
                // loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default OpenDetailTour;
