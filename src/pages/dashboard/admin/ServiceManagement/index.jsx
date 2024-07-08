import { Button, Space, Table, Image, Typography, Input, Modal, message, Popconfirm, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { DoDeleteCategoryByAdmin, DoSearchCategoryByAdmin, DoViewCategoryByAdmin } from '../../../../apis/api';
import { Link } from 'react-router-dom';
import FormAddNewCategory from './FormAddNewCategory';



// Main
const ServiceManagement = () => {
    const { Search } = Input;
    const { Title } = Typography;

    // useState Chứa API Tất Cả Categories
    const [categories, setCategories] = useState([]);

    const [addNewCategoryModal, setAddNewCategory] = useState(false);

    const [searchName, setSearchName] = useState([]);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });

    // const [idUpdate, setIdUpdate] = useState(null);

    //****************************************** */
    // API Gọi Tất Cả Loại Hình Dịch Vụ
    const fetchAllCategoryByAdmin = async () => {
        try {
            const APIAllCategoryByAdmin = await DoViewCategoryByAdmin();
            // console.log("APIAllCategoryByAdmin", APIAllCategoryByAdmin)
            const GetDataAllCategoryByAdmin = APIAllCategoryByAdmin?.data || {};
            // console.log("GetDataAllCategoryByAdmin", GetDataAllCategoryByAdmin)
            setCategories(GetDataAllCategoryByAdmin);
        } catch (error) {
            console.log("Failed fetch all categories: ", error);
        }

    }
    useEffect(() => {
        fetchAllCategoryByAdmin();
    }, [])
    //****************************************** */

    //****************************************** */

    //****************************************** */

    //****************************************** */
    // API Delete Thông tin 1 Loại Hình Dịch Vụ
    const fectchDeleteACategoryByAdmin = async (id_delete) => {

        try {
            const APIDeleteACategory = await DoDeleteCategoryByAdmin(id_delete);
            // console.log("APIDeleteACategory: ", APIDeleteACategory)
            if (APIDeleteACategory.status === 204) {
                message.success('Xóa thành công');
                fetchAllCategoryByAdmin();
                window.location.reload();
            }
        } catch (error) {
            console.log("Failed delete: ", error);
            if (error.response.status) {
                switch (error.response.status) {
                    case 500:
                        notification.error({
                            message: 'Xóa thất bại',
                            description: 'Internal Server Error',
                            duration: 5,
                        });
                        break;
                    case 403:
                        notification.error({
                            message: 'Xóa thất bại',
                            description: 'Internal Server Error',
                            duration: 5,
                        });
                        break;
                }
            }
        }
    }
    const confirm = (id) => {
        fectchDeleteACategoryByAdmin(id);
    };
    const cancel = (e) => {
        console.log(e);
    };
    //****************************************** */


    //********************************************* */
    // Api Search Loại hình dịch vụ theo Tên
    const onSearch = async (name) => {
        try {
            // console.log("Value search", name);
            const APISearch = await DoSearchCategoryByAdmin(name);
            const GetDataSearch = APISearch?.data || [];
            // console.log("APISearch", GetDataSearch)
            setSearchName(GetDataSearch);

        } catch (error) {
            console.log("Search error", error);
            if (error.response.status) {
                switch (error.response.status) {
                    case 404:
                        notification.error({
                            message: 'Không tìm thấy tên',
                            duration: 2,
                        });
                        break;
                }
            }
        }
    }
    useEffect(() => {
        onSearch(searchName);
    }, [])

    // *******************************************

    // Modal Thêm mới Loại hình dịch vụ
    const showAddCategoryModal = () => {
        setAddNewCategory(true);
    };
    const handleAddCategoryOk = () => {
        setAddNewCategory(false);
    };
    const handleAddCategoryCancel = () => {
        setAddNewCategory(false);
    };

    // *******************************************

    //********************************************
    // Cột bảng Table Categories
    const columns = [
        {
            title: 'STT',
            key: 'index',
            render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
        },
        {
            title: 'Icon',
            dataIndex: 'icon_url',
            key: 'icon_url',
            render: (icon_url) => (
                <Image
                    width={100}
                    src={icon_url}
                />
            ),
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            render: (text, data) => (
                <Link to={`/admin/quan-ly-dich-vu/${data.slug}?id=${data.id}`} style={{ textDecoration: 'none' }}>{text}</Link>
            )
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='primary'>
                        <Link to={`/admin/quan-ly-dich-vu/${record.slug}/${record.id}`} style={{ textDecoration: 'none' }} >Xem và chỉnh sửa</Link>
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa?"
                        onConfirm={() => confirm(record.id)}
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

    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Các Loại Hình Dịch Vụ</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="Nhập tên"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                    onSearch={onSearch}
                />
                <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#1677FF' }}
                    onClick={showAddCategoryModal}
                >
                    Thêm Mới
                </Button>
                <Modal width={800} title="Thêm Loại Hình Dịch Vụ" open={addNewCategoryModal} onOk={handleAddCategoryOk} onCancel={handleAddCategoryCancel} footer={[null]}>
                    <FormAddNewCategory />
                </Modal>
            </div>
            <br></br>

            {/* Bảng Loại hình dịch vụ */}
            <Table columns={columns} dataSource={searchName}
                pagination={searchName.length >= 5 ? { pageSize: 5 } : false}
                onChange={handleTableChange}
            />

        </>
    )
}
export default ServiceManagement;
