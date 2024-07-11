import { Button, Descriptions, Tabs } from 'antd';
import React from 'react';

const ModalViewPatients = ({ patients_info }) => {
    console.log("patients_info", patients_info)
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Tabs Modal
    const items = [
        {
            key: "patients_info.id",
            label: "patients_info.full_name",
            children: (
                <Descriptions layout="vertical">
                    <Descriptions.Item label="Email">{patients_info.email}</Descriptions.Item>
                    <Descriptions.Item label="Họ và Tên">{patients_info.full_name}</Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">{patients_info.phone_number}</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">{patients_info.gender}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">{formatDate(patients_info.date_of_birth)}</Descriptions.Item>
                    <Descriptions.Item label="Chuyên khoa">{patients_info.specialty_name}</Descriptions.Item>
                    <Descriptions.Item label="Dịch vụ">{patients_info.service_category}</Descriptions.Item>
                    <Descriptions.Item label="Ngày tạo tài khoản">
                        {formatDate(patients_info.created_at)}
                    </Descriptions.Item>
                    Description
                </Descriptions>
            ),
        },
    ];

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} />
        </>
    );
};

export default ModalViewPatients;
