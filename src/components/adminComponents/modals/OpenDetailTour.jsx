import React from 'react';
import { Button, Modal } from 'antd';
const OpenDetailTour = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
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
                loading={loading}
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
