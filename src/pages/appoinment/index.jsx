
import { Button, Form, Input, Radio } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Appoinment = () => {

    return (
        <>
            <div className="sign-in">
                <div className="container space-1">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-lg-5 mb-md-3">
                        <h2 style={{ color: '#f6921e', fontWeight: '400', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            đặt lịch hẹn
                        </h2>
                        <p style={{ lineHeight: '1.5', margin: 0 }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Vui lòng để lại thông tin, nhu cầu của quý khách.</i>
                        </p>
                        <p style={{ lineHeight: '1.5' }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Nha Khoa Sức Khỏe sẽ liên hệ đến Quý Khách trong thời gian sớm nhất</i>
                        </p>
                    </div>

                    {/* Form Inout */}
                    <div className='w-lg-60 mx-auto bg-light p-3 ' style={{maxWidth:'300', width:'50%'}}>
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
                                marginTop: '1.5rem',
                                width: '100%',
                                display: 'inline-block',
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            {/* Nhập Username */}
                            <Form.Item>
                                <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start', marginLeft:35 }}>
                                    <Radio value="male"> Anh </Radio>
                                    <Radio value="female"> Chị </Radio>
                                </Radio.Group>
                            </Form.Item>

                            {/* Nhập Username */}
                            <Form.Item
                                label="Tên đăng nhập"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập tên đăng nhập!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Nhập Password */}
                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập mật khẩu!',
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
                                        message: 'Yêu cầu nhập email!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* Nhập Số Điện Thoại */}
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập số điện thoại!',
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
                                    Đặt lịch hẹn
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Appoinment