import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';


const OpenImageModal = (props) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const { isModalOpen, setIsModalOpen, listData } = props;

    useEffect(() => {

    }, [])
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ display: "block" }}>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <img style={{ display: "block", width: "100%" }} src={`${import.meta.env.VITE_API_URL}images/thumbnail-${listData.tourCode}/${listData.tourImageThumbnail}`} alt="" />
            </Modal>
        </div>
    );
};

export default OpenImageModal;