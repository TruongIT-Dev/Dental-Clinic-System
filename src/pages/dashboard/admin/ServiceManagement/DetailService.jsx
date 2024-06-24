import { Space, Table, Button, Input, Popconfirm, message, Modal, Breadcrumb, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DoDeleteDataServiceByAdmin, DoSearchServiceByAdmin, DoViewDataServiceByAdmin, DoViewDetailCategoryByAdmin } from '../../../../apis/api';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormAddNewService from './FormAddNewService';

// Main
const DetailService = () => {
    // const { Title } = Typography;
    const { Search } = Input;
    const { slug } = useParams();


    // useState Chứa API Data của Dịch vụ của 1 Category
    const [dataService, setDataService] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    // const [searchService, setSearchService] = useState([]);
    const [addServiceModal, setAddServiceModal] = useState(false);
    const [detailCategory, setDetailCategory] = useState({});

    // console.log("dataService", dataService)
    // console.log("categoryId", categoryId)
    // ************************************************
    // API Lấy Thông tin Chi tiết Dịch vụ của 1 Category
    const fetchDataService = async (slug) => {
        try {
            const APIDataService = await DoViewDataServiceByAdmin(slug);

            const GetDataService = APIDataService?.data || {};
            // console.log("Data Service nè: ", GetDataService)
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

    // API Lấy tên Của Dịch vụ
    const fetchDoViewDetailCategoryByAdmin = async () => {
        const APIDoViewDetailCategory = await DoViewDetailCategoryByAdmin(slug);

        const GetDataDetailCategory = APIDoViewDetailCategory?.data || {};
        setDetailCategory(GetDataDetailCategory);
    }
    useEffect(() => {
        fetchDoViewDetailCategoryByAdmin(slug);
    }, [slug])



    // API Seach Dịch vụ
    const fetchSearchService = async (name) => {
        try {
            const APISearchService = await DoSearchServiceByAdmin(slug, name);

            const GetDataSearchService = APISearchService?.data || [];
            setDataService(GetDataSearchService);
            // console.log("APISearchService", APISearchService)
        } catch (error) {
            console.log(error)
            // if (error.response.status) {
            //     switch (error.response.status) {
            //         case 500:
            //             notification.error({
            //                 message: 'Không tìm thấy tên',
            //                 duration: 1,
            //             });
            //             break;
            //         case 404:
            //             notification.error({
            //                 message: 'Không tìm thấy tên',
            //                 duration: 1,
            //             });
            //             break;
            //     }
            // }
        }
    }
    useEffect(() => {
        fetchSearchService(slug);
    }, [slug])

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
                    <Button type="primary">
                        <Link to={`/admin/quan-ly-dich-vu/detail/${record.id}`} style={{ textDecoration: 'none' }}> Chỉnh sửa</Link>
                    </Button>
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

    // Lấy id từ url
    const location = useLocation();
    // Use useEffect hook to run some code once the component mounts
    useEffect(() => {
        // Get the URLSearchParams object from the location.search property
        const params = new URLSearchParams(location.search);

        // Get the value of the 'id' parameter from the URL
        const id = params.get('id');
        setCategoryId(Number(id));
        // Log the value of 'id' to the console to verify
        // console.log('ID from URL:', id);

        // You can use 'id' in your component state or for any other logic here
    }, [location.search]); // Re-run the effect whenever location.search changes


    return (
        <>
            {/* Header */}
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>
                    <Link to='/admin/quan-ly-dich-vu' style={{ textDecoration: 'none' }}>Loại hình dịch vụ</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={`#`} style={{ textDecoration: 'none' }}>{detailCategory.name}</Link>
                </Breadcrumb.Item>
            </Breadcrumb>

            {/* <div>
                <Title level={2}>Quản lý dịch vụ {slug}</Title>
            </div> */}

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="Nhập tên dịch vụ"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                    onSearch={fetchSearchService}
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
                    <FormAddNewService data={dataService} id={categoryId} />
                </Modal>
            </div>
            <br></br>
            <Table columns={columns} dataSource={dataService} />;
        </>
    )
}
export default DetailService;