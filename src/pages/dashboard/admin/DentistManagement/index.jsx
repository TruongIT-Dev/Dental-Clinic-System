import { Space, Table, Input, Button, Typography, Modal, Descriptions, notification, Popconfirm, Empty, Tag } from 'antd';
import { DoDeleteDentistByAdmin, DoViewAllDentistByAdmin, DoViewInfoDentistByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const DentistManagement = () => {

    // *****************************************
    // ------------- Variables ------------------

    const { Search } = Input;
    const { Title } = Typography;

    // -----------------------------------------
    // *****************************************


    // *****************************************
    // ------------- useState ------------------
    const [listDentist, setListDentst] = useState([]);
    const [infoModal, setInfoModal] = useState(false);
    const [infoDentist, setInfoDentist] = useState({});
    // console.log("infoDentist", infoDentist)
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    // -----------------------------------------
    // *****************************************


    // *****************************************
    // ------------- API Function --------------

    // API View và Search Danh sách các nha sĩ
    const fetchAllDentist = async (name) => {
        try {
            const APIAllDentist = await DoViewAllDentistByAdmin(name);
            const GetDataAllDentist = APIAllDentist?.data || [];
            setListDentst(GetDataAllDentist);
        } catch (error) {
            console.log(error)
            if (error.response.status) {
                switch (error.response.status) {
                    case 404:
                        setListDentst(null)
                        break;
                }
            }
        }
    }

    // API View Info của 1 Dentist
    const fetchInfoDentist = async (id) => {
        try {
            const APIInfoDentist = await DoViewInfoDentistByAdmin(id);
            const GetDataInfoDentist = APIInfoDentist?.data || {}
            setInfoDentist(GetDataInfoDentist)
        } catch (error) {
            console.log(error);
        }
    }


    // API Delete 1 Nha Sĩ
    const fetchDeleteDentistByAdmin = async (dentist_id) => {
        try {
            const APIDeleteDentist = await DoDeleteDentistByAdmin(dentist_id);
            if (APIDeleteDentist.status === 204) {
                notification.success({
                    message: 'Khóa tài khoản thành công',
                    duration: 2,
                });
                window.location.reload();
            }
        } catch (error) {
            console.log("Error Delete Dentist:", error)
            if (error.response.status) {
                notification.error({
                    message: 'Khóa tài khoản thất bại',
                    duration: 2,
                });
            }
        }
    }
    // -----------------------------------------
    // *****************************************


    // *****************************************
    // ------------- useEffect -----------------

    useEffect(() => {
        fetchAllDentist(name);
    }, [name])


    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- Other Functions ------------

    const confirmDeleteDentist = (id) => {
        fetchDeleteDentistByAdmin(id)
    };
    const cancelDeleteDentist = (e) => {
        console.log(e);
    };

    const columns = [
        {
            title: 'No.',
            key: 'index',
            render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'full_name',
            key: 'full_name',
            render: (text, data) => (
                <a
                    style={{ color: 'blue' }}
                    onClick={() => {
                        showInfoModal();
                        fetchInfoDentist(data.id);
                    }}
                >
                    {text}
                </a>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
            render: (text) => (
                formatDate(text)
            )
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Chuyên khoa',
            dataIndex: 'specialty',
            key: 'specialty',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'deleted_at',
            key: 'deleted_at',
            render: (deleted_at) => (
                <Tag color={deleted_at.Valid ? 'red' : 'green'}>
                    {deleted_at.Valid ? 'Deactive' : 'Active'}
                </Tag>
            ),
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="Xác nhận khóa tài khoản?"
                        onConfirm={() => confirmDeleteDentist(record.id)}
                        onCancel={cancelDeleteDentist}
                        okText="Có"
                        cancelText="Hủy"
                    >
                        <Button danger>Khóa tài khoản</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    // Counte STT pagination
    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };

    const showInfoModal = () => {
        setInfoModal(true);
    };
    const handleOk = () => {
        setInfoModal(false);
    };
    const handleCancel = () => {
        setInfoModal(false);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    // -----------------------------------------
    // *****************************************

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách Nha sĩ</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="Nhập tên nha sĩ"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                    onSearch={fetchAllDentist}
                />
                <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#1677FF' }}
                >
                    <Link to='/admin/tao-nha-si' style={{ textDecoration: 'none' }}>Tạo tài khoản</Link>
                </Button>
            </div>
            <br></br>

            {listDentist ? (
                <Table columns={columns} dataSource={listDentist}
                    pagination={listDentist.length >= 5 ? { pageSize: 5 } : false}
                    onChange={handleTableChange}
                />
            ) : (
                <div style={{ marginTop: '5rem' }}>
                    <Empty description='Không có dữ liệu' />
                </div>
            )}


            {/* Register Modal */}
            <Modal width={700} open={infoModal} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                <Descriptions title="Thông tin Nha sĩ" layout="vertical">
                    <Descriptions.Item label="Email">{infoDentist.email}</Descriptions.Item>
                    <Descriptions.Item label="Họ và Tên">{infoDentist.full_name}</Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">{infoDentist.phone_number}</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">{infoDentist.gender}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">{formatDate(infoDentist.date_of_birth)}</Descriptions.Item>
                    <Descriptions.Item label="Chuyên khoa">{infoDentist.specialty_name}</Descriptions.Item>
                    <Descriptions.Item label="Ngày tạo tài khoản">
                        {formatDate(infoDentist.created_at)}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </>
    )
}

export default DentistManagement;