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


const data = [
    {
        key: '1',
        img: bocRangSu, // Path to the image for the first item
        category: 'Bọc răng sứ',
    },
    {
        key: '2',
        img: cayGhepImplant, // Path to the image for the second item
        category: 'Cấy ghép Implement',
    },
    {
        key: '3',
        img: niengRangThamMy, // Path to the image for the third item
        category: 'Niềng răng thẩm mỹ',
    },
    {
        key: '4',
        img: tayTrangRang, // Path to the image for the third item
        category: 'Tẩy trắng răng',
    },
    {
        key: '5',
        img: nhoRangKhon, // Path to the image for the third item
        category: 'Nhổ răng khôn',
    },
    {
        key: '6',
        img: benhLyNhaChu, // Path to the image for the third item
        category: 'Bệnh lý nha chu',
    },
    {
        key: '7',
        img: dieuTriTuy, // Path to the image for the third item
        category: 'Niềng răng thẩm mỹ',
    },
];

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
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={showDetailServiceModal}>Chỉnh sửa</Button>
                    <Button danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý Dịch vụ</Title>
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
                    Thêm Dịch Vụ
                </Button>
            </div>
            <br></br>
            <Table columns={columns} dataSource={data} />




            {/* Detail Service Modal */}
            <Modal
                centered
                open={detailServiceModal}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                {/* Form Loại hình dịch vụ */}
                <div>
                    <Title level={4}>Loại hình Dịch vụ</Title>
                    <Form
                        name='form-category'
                        layout="vertical"
                        labelCol={{
                            span: 4,
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
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    label="Tên"
                                    name="vertical"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <br/>
                {/* Form Chi tiết Dịch vụ */}
                <div>
                    <Title level={4}>Loại hình Dịch vụ</Title>
                    <Form
                        name='form-category'
                        layout="vertical"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                    >
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    label="vertical"
                                    name="vertical"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    label="vertical"
                                    name="vertical"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
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
