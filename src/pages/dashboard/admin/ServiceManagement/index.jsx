import { Button, Space, Table, Image, Typography, Input, Modal, Form, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import bocRangSu from '../../../../assets/img/catergories/icon-boc-rang-su-1.png';
import cayGhepImplant from '../../../../assets/img/catergories/trong-rang-implant.webp';
import niengRangThamMy from '../../../../assets/img/catergories/nieng-rang-tham-my.png';
import tayTrangRang from '../../../../assets/img/catergories/icon-tay-trang-rang-1.png';
import nhoRangKhon from '../../../../assets/img/catergories/icon-nho-rang-khon-1.png';
import benhLyNhaChu from '../../../../assets/img/catergories/icon-benh-ly-nha-chu.png';
import dieuTriTuy from '../../../../assets/img/catergories/dieu-tri-tuy.png';
import { useState } from 'react';


// Data Bảng Loại hình dịch vụ
const data = [
    {
        key: '1',
        img: bocRangSu, // Path to the image for the first item
        category: 'Bọc răng sứ',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
    {
        key: '2',
        img: cayGhepImplant, // Path to the image for the second item
        category: 'Cấy ghép Implement',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
    {
        key: '3',
        img: niengRangThamMy, // Path to the image for the third item
        category: 'Niềng răng thẩm mỹ',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
    {
        key: '4',
        img: tayTrangRang, // Path to the image for the third item
        category: 'Tẩy trắng răng',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
    {
        key: '5',
        img: nhoRangKhon, // Path to the image for the third item
        category: 'Nhổ răng khôn',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
    {
        key: '6',
        img: benhLyNhaChu, // Path to the image for the third item
        category: 'Bệnh lý nha chu',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
    {
        key: '7',
        img: dieuTriTuy, // Path to the image for the third item
        category: 'Niềng răng thẩm mỹ',
        description: 'Etiam ullamcorper metus augue, vitae pretium velit pellentesque at. Vestibulum tempor nibh eget ex lobortis vestibulum. Proin vitae laoreet ex, vitae ultrices nisl. Suspendisse congue nisl at purus porta, finibus mollis est maximus. Aliquam sed lacus risus. Nam accumsan, libero non rhoncus viverra, urna odio pretium ex, in dapibus lacus lacus vitae dolor. Morbi mattis facilisis arcu, non dignissim dolor cursus at.'
    },
];


// NEST Table
const expandedRowRender = () => {
    // Cột Chi tiết dịch vụ
    const columns = [
        {
            title: 'Tên dịch vụ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá',
            dataIndex: 'cost',
            key: 'cost',
        },
        {
            title: 'ĐVT',
            dataIndex: 'dvt',
            key: 'dvt',
        },
        {
            title: 'Bảo hành',
            dataIndex: 'baohanh',
            key: 'baohanh',
        },
        {
            title: 'Action',
            key: 'operation',
            render: () => (
                <Space size="middle">
                    <Button type="text">Chỉnh sửa</Button>
                    <Button type="text" danger>Xóa</Button>
                </Space>
            ),
        },
    ];
    // Data Chi tiết dịch vụ
    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            name: 'Bọc răng sứ',
            cost: '120.000 VNĐ',
            dvt: 'Trụ',
            baohanh: '3 năm',
        });
    }
    // Bảng Chi tiết Dịch vụ
    return <Table columns={columns} dataSource={data} pagination={false} />;
};


// Main
const ServiceManagement = () => {
    const { Search } = Input;
    const { Title } = Typography;

    const [detailServiceModal, setDetailServiceModal] = useState(false);

    const showDetailServiceModal = () => {
        setDetailServiceModal(true);
    };
    const handleOk = () => {
        setDetailServiceModal(false);
    };
    const handleCancel = () => {
        setDetailServiceModal(false);
    };

    const columns = [
        {
            title: 'Icon',
            dataIndex: 'img',
            key: 'img',
            render: (imgPath) => (
                <Image
                    width={100}
                    src={imgPath} // Use the image path from the 'img' property
                />
            ),
        },
        {
            title: 'Loại hình dịch vụ',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            // className: 'ellipsis', // Apply the ellipsis class
            onCell: () => {
                return {
                    style: {
                        maxWidth: 300,
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        wordBreak:'break-word',
                        // textOverflow: 'ellipsis',
                    }
                };
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={showDetailServiceModal} type='primary'>Cập nhật</Button>
                    <Button danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý loại hình dịch vụ</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                />
                <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#4096FF' }}
                >
                    Thêm Loại Hình Dịch Vụ
                </Button>
            </div>
            <br></br>

            {/* Bảng Loại hình dịch vụ */}
            <Table columns={columns} dataSource={data} expandable={{
                expandedRowRender,
                defaultExpandedRowKeys: ['0'],
            }} />

            {/* Detail Service Modal */}
            <Modal
                centered
                open={detailServiceModal}
                width={800}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button danger key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Cập nhật
                    </Button>,
                ]}
            >
                {/* Form Loại hình dịch vụ */}
                <div>
                    <Title level={4}>Cập nhật loại hình dịch vụ</Title>
                    <Form
                        name='form-category'
                        layout="vertical"
                        labelCol={{
                            span: 12,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                    >
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    label="Icon"
                                    name="vertical"
                                >
                                    <Input placeholder='link ảnh icon' />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    label="Tên loại hình dịch vụ"
                                    name="vertical"
                                >
                                    <Input placeholder='Bọc răng sứ' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal>
        </>
    )
};
export default ServiceManagement;
