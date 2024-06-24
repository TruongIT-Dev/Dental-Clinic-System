import { Link, useNavigate, useParams } from "react-router-dom"
import { DoUpdateCategoryByAdmin, DoViewDetailCategoryByAdmin } from "../../../../apis/api";
import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Image, Space, notification, Breadcrumb } from 'antd';


const FormUpdateCategory = () => {
    //*****************************************************************
    //-------------------------- Variable------------------------------
    const { slug } = useParams();
    const { id } = useParams();
    const { TextArea } = Input;
    const { Title } = Typography;
    const navigate = useNavigate();
    const [form] = Form.useForm();
    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------useState------------------------------

    // Liệt kê Chi tiết Loại hình dịch vụ
    const [detailCategory, setDetailCategory] = useState({});
    console.log("detailCategory", detailCategory)
    const [iconVisible, setIconVisible] = useState(false);
    const [bannerVisible, setBannerVisible] = useState(false);


    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------Call API-------------------------------
    // API Show Thông tin Chi tiết 1 Loại hình dịch vụ
    const fetchDoViewDetailCategoryByAdmin = async () => {
        const APIDoViewDetailCategory = await DoViewDetailCategoryByAdmin(slug);

        const GetDataDetailCategory = APIDoViewDetailCategory?.data || {};
        setDetailCategory(GetDataDetailCategory);
    }

    // API Update Loại hình dịch vụ
    const onFinish = async (values) => {
        console.log('Success:', values);

        const { name, icon_url, banner_url, description } = values;

        try {
            const res = await DoUpdateCategoryByAdmin(id, name, icon_url, banner_url, description);
            console.log("Res:", res);
            if (res.status === 200) {
                navigate('/admin/quan-ly-dich-vu');
                notification.success({
                    message: 'Cập nhật thành công!'
                });
            }
        } catch (error) {
            console.log(error)
            notification.error({
                message: 'Cập nhật thất bại!',
                // description: 'There was an error updating the category.',
            });
        }
    }

    //-----------------------------------------------------------------
    //*****************************************************************


    //*****************************************************************
    //--------------------------useEffect------------------------------
    useEffect(() => {
        fetchDoViewDetailCategoryByAdmin(slug);
    }, [slug])

    useEffect(() => {
        // Check if detailCategory is set and then set form values
        if (detailCategory) {
            form.setFieldsValue({
                name: detailCategory.name,
                icon_url: detailCategory.icon_url,
                banner_url: detailCategory.banner_url,
                description: detailCategory.description,
            });
        }
    }, [detailCategory, form]);
    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------Function-------------------------------

    // Form submit Failed
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //-----------------------------------------------------------------
    //*****************************************************************
    return (
        <div className="container" style={{ height: '100vh' }}>
            <div>
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
                        <Link to={`/admin/quan-ly-dich-vu/${slug}/${id}`} style={{ textDecoration: 'none' }}>{detailCategory.name}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <Title level={2}>Chi tiết Loại hình dịch vụ</Title>
                </div>
                <br />
                <div style={{ marginTop: '1rem' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            wrapperCol={{
                                span: 12
                            }}
                            label="name"
                            name="name"
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            label="Link icon"
                            name="icon_url"
                        >
                            <Input value={detailCategory.icon_url} />
                            {/* <Space>
                                <Button type="primary" onClick={() => setIconVisible(true)}>
                                    Xem ảnh
                                </Button>
                                <Image
                                    width={200}
                                    style={{
                                        display: 'none',
                                    }}
                                    src={detailCategory.icon_url}
                                    preview={{
                                        visible: iconVisible,
                                        src: detailCategory.icon_url,
                                        onVisibleChange: (value) => {
                                            setIconVisible(value);
                                        },
                                    }}
                                />
                            </Space> */}
                        </Form.Item>

                        <Form.Item
                            label="Link banner"
                            name="banner_url"
                        >      
                            <Input value={detailCategory.banner_url} />
                            {/* <Space>
                                <Button type="primary" onClick={() => setBannerVisible(true)}>
                                    Xem ảnh
                                </Button>
                                <Image
                                    width={200}
                                    style={{
                                        display: 'none',
                                    }}
                                    src={detailCategory.banner_url}
                                    preview={{
                                        visible: bannerVisible,
                                        src: detailCategory.banner_url,
                                        onVisibleChange: (value) => {
                                            setBannerVisible(value);
                                        },
                                    }}
                                />
                            </Space> */}
                        </Form.Item>

                        <Form.Item
                            label="Mô tả"
                            name="description"
                        >
                            <TextArea rows={5} value={detailCategory.description} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 4,
                                span: 4,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Chỉnh sửa
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>

    );
}
export default FormUpdateCategory