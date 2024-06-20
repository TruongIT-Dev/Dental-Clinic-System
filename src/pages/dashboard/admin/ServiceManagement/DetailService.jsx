import { Space, Table, Button, Typography, Input, Popconfirm, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DoDeleteDataServiceByAdmin, DoViewDataServiceByAdmin } from '../../../../apis/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormAddNewService from './FormAddNewService';



// Data Chi tiết dịch vụ
// const data = [];
// for (let i = 0; i < 3; ++i) {
//     data.push({
//         key: i.toString(),
//         name: 'Bọc răng sứ',
//         cost: '120.000 VNĐ',
//         dvt: 'Trụ',
//         baohanh: '3 năm',
//     });
// }

const DetailService = () => {
    const { Title } = Typography;
    const { Search } = Input;
    const { slug } = useParams();

    // useState Chứa API Data của Dịch vụ của 1 Category
    const [dataService, setDataService] = useState([]);

    const [addServiceModal, setAddServiceModal] = useState(false);

    // ************************************************
    // API Lấy Thông tin Chi tiết Dịch vụ của 1 Category
    const fetchDataService = async (slug) => {
        try {
            const APIDataService = await DoViewDataServiceByAdmin(slug);
            // console.log("Data Service nè: ", APIDataService)
            const GetDataService = APIDataService?.data || {};
            setDataService(GetDataService);
        } catch (error) {
            console.log("Failed to get data service: ", error);
        }
    }
    useEffect(() => {
        fetchDataService(slug);
    }, [slug])
    // ************************************************

    // API Delete Thông tin 1 Loại Hình Dịch Vụ
    const fectchDeleteAServiceByAdmin = async (id_delete) => {

        try {
            const APIDeleteACategory = await DoDeleteDataServiceByAdmin(id_delete);
            // console.log("APIDeleteACategory: ", APIDeleteACategory)
            if (APIDeleteACategory.status === 204) {
                window.location.reload();
            }
        } catch (error) {
            console.log("Failed delete: ", error);
        }
    }
    const confirm = (id) => {
        fectchDeleteAServiceByAdmin(id);
        message.success('Xóa thành công');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Hủy');
    };
    // ***********************************************************


    // ***********************************************************

    // Mở Modal Thêm Mới 1 Dịch Vụ
    const showAddServiceModal = () => {
        setAddServiceModal(true);
    };
    const handleAddServiceOk = () => {
        setAddServiceModal(false);
    };
    const handleAddSerivceCancel = () => {
        setAddServiceModal(false);
    };
    const columns = [
        {
            title: 'Tên dịch vụ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá (VNĐ)',
            dataIndex: 'cost',
            key: 'cost',
            render: (text) => (
                <span>
                    {text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
            )
        },
        {
            title: 'ĐVT',
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: 'Bảo hành',
            dataIndex: 'warranty_duration',
            key: 'warranty_duration',
        },
        {
            title: 'Action',
            key: 'operation',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary">Chỉnh sửa</Button>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa?"
                        onConfirm={() => confirm(record.id)}
                        // onConfirm={() => { console.log("Record:", record) }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Xóa</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý dịch vụ</Title>
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
                    onClick={showAddServiceModal}
                >
                    Thêm Dịch Vụ
                </Button>
                <Modal title="Thêm Dịch Vụ" open={addServiceModal} onOk={handleAddServiceOk} onCancel={handleAddSerivceCancel} footer={[null]}>
                    <FormAddNewService data={dataService} />
                </Modal>
            </div>
            <br></br>
            <Table columns={columns} dataSource={dataService} />;
        </>
    )
}
export default DetailService;