
import { Button, Form, Input, Radio } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const SignUpContent = () => {

    return (
        <>
            <div className="sign-in">
                <div className="container space-1">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-lg-5 mb-md-3">
                        <h2 style={{ color: '#f6921e', fontWeight: '400', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            Đăng Ký
                        </h2>
                        <p style={{ lineHeight: '1.5', margin: 0 }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Vui lòng để lại thông tin, nhu cầu của quý khách.</i>
                        </p>
                        <p style={{ lineHeight: '1.5' }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Nha Khoa Kim sẽ liên hệ đến Quý Khách trong thời gian sớm nhất</i>
                        </p>
                    </div>

                    <div className='w-lg-60 mx-auto bg-light p-3 '>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item>
                                <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Radio value="male"> Anh </Radio>
                                    <Radio value="female"> Chị </Radio>
                                </Radio.Group>
                            </Form.Item>

                            {/* Nhập Username */}
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Nhập Password */}
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* Nhập Email */}
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* Nhập Số Điện Thoại */}
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            
                            <Form.Item
                            // wrapperCol={{
                            //     offset: 8,
                            //     span: 16,
                            // }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUpContent