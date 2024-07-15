import { Button, Space, Table, Input, Typography, notification, Modal, Form, Popconfirm, message } from 'antd';
import { useEffect, useState } from 'react';
import { DoAddNewRoomByAdmin, DoDeleteRoomByAdmin, DoUpdateRoomByAdmin, DoViewAllRoomsByAdmin } from '../../../../apis/api';
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
    const [updateModal, setUpdateModal] = useState(false);
    const [roomId, setRoomId] = useState('');
    // *****************************************




    // *****************************************
    // ------------- API Function --------------

    // API Lấy danh sách các Phòng
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

    // API Tạo 1 Phòng mới
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

    // API Delete 1 Phòng
    const fetchDeleteRoomByAdmin = async (id) => {
        try {
            const APIDeleteRoom = await DoDeleteRoomByAdmin(id);
            if (APIDeleteRoom.status === 204) {
                notification.success({
                    message: 'Xóa phòng thành công',
                    duration: 2,
                })
                window.location.reload();
            }
        } catch (error) {
            console.log("Lỗi Delete Phòng: ", error);
            switch (error.response.status) {
                case 403:
                    notification.error({
                        message: 'Xóa phòng thất bại',
                        description: 'Không thể xóa vì có các lịch khám liên quan đến phòng này',
                        duration: 2,
                    })
                    break;
            }
        }
    }


    // Cập nhật Tên phòng
    const onFinishUpdateRoom = async (values) => {
        console.log("update room:", values);
        const id = roomId;
        const { name } = values;
        try {
            const APIUpdateRoom = await DoUpdateRoomByAdmin(id, name);
            if (APIUpdateRoom.status === 204) {
                message.success('Cập nhật thành công');
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteConfirm = (id) => {
        fetchDeleteRoomByAdmin(id);
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

    // Create
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    // Update
    const showUpdateModal = () => {
        setUpdateModal(true);
    };

    const handleUpdateOk = () => {
        setUpdateModal(false);
    };

    const handleUpdateCancel = () => {
        setUpdateModal(false);
    };

    // Columns
    const columns = [
        // {
        //     title: 'STT',
        //     dataIndex: 'id',
        //     key: 'id',
        // },
        {
            title: 'No.',
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
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type='primary'
                        onClick={() => {
                            showUpdateModal();
                            setRoomId(record.id);
                        }}
                    >
                        Chỉnh sửa
                    </Button>
                    <Popconfirm
                        title="Xóa phòng"
                        description="Xác nhận xóa phòng này?"
                        onConfirm={() => handleDeleteConfirm(record.id)}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button danger>Xóa</Button>
                    </Popconfirm>
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
                <Title level={2}>Danh sách phòng</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* <Search
                    placeholder="Nhập tên phòng"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                /> */}
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
                        name="create"
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
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên phòng"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên phòng',
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

            {/* Modal Update phòng  */}
            <Modal title="Cập nhật tên phòng" open={updateModal} onOk={handleUpdateOk} onCancel={handleUpdateCancel} footer={[null]}>
                <Form
                    name="update"
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
                    onFinish={onFinishUpdateRoom}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên phòng"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên phòng',
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
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


            <Table columns={columns} dataSource={rooms}
                pagination={rooms.length >= 5 ? { pageSize: 5 } : false}
                onChange={handleTableChange}
            /> {/* Remove the unnecessary semicolon */}
        </>
    );
};

export default RoomManagement;
