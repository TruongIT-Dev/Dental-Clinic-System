import React, { useState } from 'react';
import { Button, Descriptions, Modal } from 'antd';
const ViewPatientInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                View bệnh nhân
            </Button>
            <Modal width={700} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Descriptions title="Thông tin bệnh nhân" layout="vertical">
                    <Descriptions.Item label="Email">abc@gmail.com</Descriptions.Item>
                    <Descriptions.Item label="Họ và Tên">Nguyễn Thị Hương</Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">0351648263</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">Nữ</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">15/2/2000</Descriptions.Item>
                </Descriptions>
            </Modal>
        </>
    );
};
export default ViewPatientInfo;