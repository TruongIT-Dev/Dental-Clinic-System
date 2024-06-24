import { Link } from 'react-router-dom';
import '../../../../scss/AdminAddNewDentist.css'
import { Breadcrumb, Button, Card, Col, Form, Input, Row, Typography } from 'antd';

const AddNewDentist = () => {
    const { Title } = Typography;

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            {/* Header */}
            {/* <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>
                    <Link to='/admin/quan-ly-nha-si' style={{ textDecoration: 'none' }}>Loại hình dịch vụ</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={`#`} style={{ textDecoration: 'none' }}>text</Link>
                </Breadcrumb.Item>
            </Breadcrumb> */}

            <div>
                <Title level={2}>Tạo tài khoản Nha sĩ</Title>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '80%' }}>
                    <Form
                        name="basic"
                        layout='horizontal'
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 10,
                        }}
                        style={{
                            width: '100%'
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Họ và Tên"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập họ tên!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone_number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập số điện thoại!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Giới tính"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn giới tính!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Chuyên khoa"
                            name="specialty_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập chuyên khoa!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Nhập lại mật khẩu"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập lại mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Thời gian tạo tài khoản"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn ngày!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default AddNewDentist