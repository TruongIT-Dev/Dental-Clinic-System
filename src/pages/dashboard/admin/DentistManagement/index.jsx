import { Space, Table, Input, Button, Typography, Modal, Form, Descriptions } from 'antd';
import { DoViewAllDentistByAdmin, DoViewInfoDentistByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';


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

    // -----------------------------------------
    // *****************************************


    // *****************************************
    // ------------- useEffect ------------------

    useEffect(() => {
        fetchAllDentist(name);
    }, [name])


    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- Other Functions ------------

    const columns = [
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
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' ghost>Cập nhật</Button>
                    <Button danger>Xoá</Button>
                </Space>
            ),
        },
    ];

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
        return `${year}-${month}-${day}`;
    };

    // -----------------------------------------
    // *****************************************




    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý Nha sĩ</Title>
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
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#4096FF' }}
                >
                    Tạo tài khoản
                </Button>
            </div>
            <br></br>

            <Table columns={columns} dataSource={listDentist} />;

            {/* Register Modal */}
            <Modal width={700} open={infoModal} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                <Descriptions title="Thông tin Nha sĩ" layout="vertical">
                    <Descriptions.Item label="Email">{infoDentist.email}</Descriptions.Item>
                    <Descriptions.Item label="Họ và Tên">{infoDentist.full_name}</Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">{infoDentist.phone_number}</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">{infoDentist.gender}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">{infoDentist.date_of_birth}</Descriptions.Item>
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