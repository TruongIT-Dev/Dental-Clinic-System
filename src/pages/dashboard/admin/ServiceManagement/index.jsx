import { Button, Space, Table, Image, Typography, Input, Modal, Form, Row, Col, message, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { DoDeleteCategoryByAdmin, DoViewCategoryByAdmin, DoViewDetailCategoryByAdmin } from '../../../../apis/api';
import { Link } from 'react-router-dom';
import FormAddNewCategory from './FormAddNewCategory';
// import { useNavigate } from 'react-router-dom';


// Data Bảng Loại hình dịch vụ
// const data = [
//     {
//         key: '1',
//         img: bocRangSu, // Path to the image for the first item
//         category: 'Bọc răng sứ',

//     },
//     {
//         key: '2',
//         img: cayGhepImplant, // Path to the image for the second item
//         category: 'Cấy ghép Implement',

//     },
//     {
//         key: '3',
//         img: niengRangThamMy, // Path to the image for the third item
//         category: 'Niềng răng thẩm mỹ',

//     },
//     {
//         key: '4',
//         img: tayTrangRang, // Path to the image for the third item
//         category: 'Tẩy trắng răng',

//     },
//     {
//         key: '5',
//         img: nhoRangKhon, // Path to the image for the third item
//         category: 'Nhổ răng khôn',

//     },
//     {
//         key: '6',
//         img: benhLyNhaChu, // Path to the image for the third item
//         category: 'Bệnh lý nha chu',

//     },
//     {
//         key: '7',
//         img: dieuTriTuy, // Path to the image for the third item
//         category: 'Niềng răng thẩm mỹ',

//     },
// ];


// Main
const ServiceManagement = () => {
    const { Search } = Input;
    const { TextArea } = Input;
    const { Title } = Typography;

    const [formDetailCategory] = Form.useForm();

    // useState Chứa API Tất Cả Categories
    const [categories, setCategories] = useState([]);

    // useState Chứa API Thông Tin Chi tiết của 1 Categories
    const [detailCategory, setDetailCategory] = useState([]);

    // UseState để mở Modal 
    const [detailServiceModal, setDetailServiceModal] = useState(false);

    const [addNewCategoryModal, setAddNewCategory] = useState(false);

    //****************************************** */
    // API Gọi Tất Cả Loại Hình Dịch Vụ
    const fetchAllCategoryByAdmin = async () => {
        try {
            const APIAllCategoryByAdmin = await DoViewCategoryByAdmin();
            // console.log("APIAllCategoryByAdmin", APIAllCategoryByAdmin)
            const GetDataAllCategoryByAdmin = APIAllCategoryByAdmin?.data || {};
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
    // API Gọi Chi Tiết Thông tin 1 Loại Hình Dịch Vụ
    const fetchDetailCategoryByAdmin = async (slug) => {
        try {
            const APIDetailCategoryByAdmin = await DoViewDetailCategoryByAdmin(slug);
            // console.log("APIDetailCategoryByAdmin", APIDetailCategoryByAdmin)
            const GetDetailCategoryByAdmin = APIDetailCategoryByAdmin?.data || {};
            setDetailCategory(GetDetailCategoryByAdmin);
            // console.log("detailCategory", detailCategory)
        } catch (error) {
            console.log("Failed fetch all categories: ", error);
        }
    }
    //****************************************** */

    //****************************************** */
    // API Update Thông tin 1 Loại Hình Dịch Vụ
    // const onFinishUpdate = async (values) => {
    //     console.log('Success:', values);

    //     const id = idCategory;
    //     console.log("id", id);
    //     const { name, icon_url, banner_url, description } = values;

    //     try {
    //         const APIUpdateCategoryByAdmin = await DoViewCategoryByAdmin(id, name, icon_url, banner_url, description);
    //         console.log("Input form: ", APIUpdateCategoryByAdmin)
    //     } catch (error) {
    //         console.log("Failed fetch all categories: ", error);
    //     }
    // };

    // const onFinishFailedUpdate = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };
    //****************************************** */


    //****************************************** */
    // API Delete Thông tin 1 Loại Hình Dịch Vụ
    const fectchDeleteACategoryByAdmin = async (id_delete) => {

        try {
            const APIDeleteACategory = await DoDeleteCategoryByAdmin(id_delete);
            // console.log("APIDeleteACategory: ", APIDeleteACategory)
            if (APIDeleteACategory.status === 204) {
                fetchAllCategoryByAdmin();
            }
        } catch (error) {
            console.log("Failed delete: ", error);
        }
    }
    const confirm = (id) => {
        fectchDeleteACategoryByAdmin(id);
        message.success('Xóa thành công');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Hủy');
    };
    //****************************************** */

    // *******************************************
    // Mở Modal Xem Chi tiết Thông Tin Dịch vụ
    const showDetailServiceModal = () => {
        setDetailServiceModal(true);
    };
    const handleOk = () => {
        setDetailServiceModal(false);
        formDetailCategory.resetFields();
    };
    const handleCancel = () => {
        setDetailServiceModal(false);
        // setDetailCategory("");
        formDetailCategory.resetFields();
    };

    // Click Xem Chi tiết - Lấy Slug
    const handleGetSlug = (slug) => {
        showDetailServiceModal();
        fetchDetailCategoryByAdmin(slug);
    };

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
                <Link to={`/admin/quan-ly-dich-vu/${data.slug}`} style={{ textDecoration: 'none' }}>{text}</Link>
            )

        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => {
                        handleGetSlug(record.slug);
                    }
                    } type='primary'>
                        Xem và chỉnh sửa
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
                />
                <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: 'green' }}
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
            <Table columns={columns} dataSource={categories} />

            {/* Detail Service Modal */}
            <Modal
                centered
                open={detailServiceModal}
                width={800}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[null]}
            >
                {/* Form Loại hình dịch vụ */}
                <div>
                    <Title level={4}>Chi Tiết</Title>
                    <Form
                        form={formDetailCategory}
                        name='form-category'
                        layout="vertical"
                        // onFinish={onFinishUpdate}
                        // onFinishFailed={onFinishFailedUpdate}
                        // initialValues={detailCategory}
                        labelCol={{
                            span: 12,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                    >
                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    label="Tên"
                                    name="name"
                                >
                                    <Input placeholder={detailCategory.name} />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="Link Icon"
                                    name="icon_url"
                                >
                                    <Input placeholder={detailCategory.icon_url} />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="Link Banner"
                                    name="banner_url"
                                >
                                    <Input placeholder={detailCategory.banner_url} />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Mô tả"
                                    name="description"
                                >
                                    <TextArea rows={4} placeholder={detailCategory.description} />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Nút Submit */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
};
export default ServiceManagement;
