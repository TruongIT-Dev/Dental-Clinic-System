import { Button, Form, Input, Row, Col, Image, Checkbox, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { GetLogin } from '../../apis/api';
import { doLoginAction } from '../../redux/account/accountSlice';

const FormLayout = {
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 3px 10px 0 rgba(0, 0, 0, .14)',
    boxSizing: 'border - box',
    overflow: 'hidden',
}

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let accessToken = '';
    const onFinish = async (values) => {
        const { email, password } = (values);
        // console.log('email: ', email, 'mật khẩu: ', password);
        try {
            let res = await GetLogin(email, password);
            console.log('Response Login: ', res);
            accessToken = res.data.access_token;
            localStorage.setItem('access_token', accessToken);
            dispatch(doLoginAction({ user: res.data.user_info }));

            if (res.status === 200) {
                // Navigate to the home page
                navigate('/');
                // Show a success message
                notification.success("Đăng nhập thành công");
            }
        } catch (error) {
            // Log the error for debugging
            console.log(error);

            // Check the error response status code and show corresponding notifications
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: '400 Bad Request',
                            duration: 5,
                        });
                        break;
                    case 401:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: '401 Unauthorized',
                            duration: 5,
                        });
                        break;
                    case 404:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: '404 Not Found',
                            duration: 5,
                        });
                        break;
                    case 500:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: '500 Internal Server Error',
                            duration: 5,
                        });
                        break;
                    default:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: error.response.data.errors || 'An unknown error occurred',
                            duration: 5,
                        });
                }
            } else {
                // Handle network errors or other issues that don't have a response
                notification.error({
                    message: 'Đăng nhập thất bại',
                    description: 'An error occurred. Please check your network connection and try again.',
                    duration: 5,
                });
            }
        }
        // setIsLoading(false);
        return;
    };


    // *********** JSX **************
    return (
        <>
            <div className="sign-in" style={{ width: '100%' }}>
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
                                        <p style={{ lineHeight: '1.5', margin: 0 }}>
                                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Vui lòng để lại thông tin, nhu cầu của quý khách.</i>
                                        </p>
                                        <p style={{ lineHeight: '1.5' }}>
                                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Nha Khoa Kim sẽ liên hệ đến Quý Khách trong thời gian sớm nhất</i>
                                        </p>
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
                                                Or <a href="">Đăng ký!</a>
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