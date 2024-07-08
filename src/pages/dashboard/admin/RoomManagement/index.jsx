import { Button, Space, Table, Input, Typography, notification, Modal, Form } from 'antd';
import { useEffect, useState } from 'react';
import { DoAddNewRoomByAdmin, DoViewAllRoomsByAdmin } from '../../../../apis/api';
import { PlusOutlined } from '@ant-design/icons';



const RoomManagement = () => {


    // *****************************************
    // ------------- Variables -----------------

    const { Search } = Input;
    const { Title } = Typography;

    // *****************************************




    // *****************************************
    // ------------- useState ------------------

    const [rooms, setRooms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    // *****************************************




    // *****************************************
    // ------------- API Function --------------

    const fetchAllRoomsByAdmin = async () => {

        try {
            const APIAllRooms = await DoViewAllRoomsByAdmin();
            const GetDataRooms = APIAllRooms?.data || {};

            if (APIAllRooms.status === 200) {
                setRooms(GetDataRooms);
            }
        } catch (error) {

            if (error.response.status) {
                switch (error.response.status) {
                    case 500:
                        console.log(error)
                        break;
                }
            }
        }
    }

    // Submit Form Success
    const onFinish = async (values) => {

        console.log('Success:', values);

        const { name } = values;

        try {
            const APIAddNewRoom = await DoAddNewRoomByAdmin(name);
            console.log("APIAddNewRoom", APIAddNewRoom)
            switch (APIAddNewRoom.status) {
                case 201:
                    notification.success({
                        message: 'Thêm thành công',
                        duration: 2,
                    });
                    window.location.reload();
                    break;

                default:
                    notification.error({
                        message: 'Thêm thất bại',
                        duration: 2,
                    });
                    break;
            }
        } catch (error) {
            console.log(error)
        }
    };

    // Submit Form Failed
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // *****************************************




    // *****************************************
    // ------------- useEffect -----------------

    useEffect(() => {
        fetchAllRoomsByAdmin();
    }, [])

    // *****************************************




    // *****************************************
    // ------------- Others function -----------

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Columns
    const columns = [
        // {
        //     title: 'STT',
        //     dataIndex: 'id',
        //     key: 'id',
        // },
        {
            title: 'STT',
            key: 'index',
            render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
        },
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Button type='primary'>Chỉnh sửa</Button>
                    <Button danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    // Counte STT pagination
    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };
    // *****************************************


    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách phòng khám</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="Nhập tên phòng"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                />
                <Button
                    onClick={showModal}
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#1677FF' }}
                >
                    {/* <Link to='/admin/tao-phong-kham' style={{ textDecoration: 'none' }}>Tạo phòng</Link> */}
                    Tạo phòng
                </Button>

                {/* Modal Form Tạo Phòng Khám */}
                <Modal title="Đăng ký phòng khám mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[null]}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            // maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên phòng"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên phòng khám!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <br />

            <Table columns={columns} dataSource={rooms}
                pagination={rooms.length >= 5 ? { pageSize: 5 } : false}
                onChange={handleTableChange}
            /> {/* Remove the unnecessary semicolon */}
        </>
    );
};

export default RoomManagement;
