import { Button, Form, Input, Row, Col, Image, Checkbox, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { GetLogin } from '../../apis/api';
import { doLoginAction } from '../../redux/account/accountSlice';

const FormLayout = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let accessToken = '';
    const onFinish = async (values) => {
        const { email, password } = (values);
        // console.log('email: ', email, 'mật khẩu: ', password);
        try {
            // lấy API
            let res = await GetLogin(email, password);
            console.log('Response Login: ', res);
            // set biến token
            accessToken = res.data.access_token;
            // console.log('token:', accessToken);
            // lưu vào LocalStorage
            localStorage.setItem('access_token', accessToken);
            // Goi Redux
            dispatch(doLoginAction({
                // access_token: accessToken,
                user: res.data
            }));

            if (res.status === 200) {
                // Navigate to the home page
                navigate('/');
                // Show a success message
                notification.success({
                    type: 'success',
                    message: 'Đăng nhập thành công',
                    duration: 2,
                })
            }
        } catch (error) {
            // Log the error for debugging
            console.log(error);
            if (error.response.status) {
                switch (error.response.status) {
                    case 500:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: 'Hệ thống không phản hồi',
                            duration: 5,
                        });
                        break;
                    case 400:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: 'Thông tin đăng nhập không hợp lệ.',
                            duration: 5,
                        });
                        break;
                }
            }
            notification.error({
                message: 'Đăng nhập thất bại',
                description: 'Email hoặc mật khẩu không chính xác.',
                duration: 5,
            });
        }
        return;
    };


    // *********** JSX **************
    return (
        <>
            <div className="sign-in" style={{ width: '90%', margin: '4rem auto' }}>
                <div className="container space-1">
                    <div>
                        <Row>
                            <Col span={12}>
                                {/* Img */}
                                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image.PreviewGroup
                                        preview={{
                                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                        }}
                                    >
                                        <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                    </Image.PreviewGroup>
                                </div>
                            </Col>
                            <Col span={12}>
                                {/* Form Inout */}
                                <div className='w-lg-60 mx-auto p-3' style={FormLayout}>
                                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-lg-5 mb-md-3">
                                        <h2 style={{ color: '#f6921e', fontWeight: '400', textTransform: 'uppercase' }}>
                                            Đăng Nhập
                                        </h2>
                                    </div>
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        style={{
                                            width: '100%',
                                            maxWidth: '300px',
                                            margin: 'auto',
                                            display: 'block',
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: "email",
                                                    message: "Email không đúng dịnh dạng!"
                                                },
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập email!',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập mật khẩu!',
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="Mật khẩu"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>

                                                <a className="login-form-forgot" href="">
                                                    Quên mật khẩu
                                                </a>
                                            </div>
                                        </Form.Item>
                                        <div>
                                            <Form.Item>

                                                <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                                                    Đăng nhập
                                                </Button>
                                                Hoặc <a href="/dang-ky">Đăng ký!</a>
                                            </Form.Item>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn