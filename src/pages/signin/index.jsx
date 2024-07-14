import { Button, Form, Input, Row, Col, notification, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetLogin } from '../../apis/api';
import { doLoginAction } from '../../redux/account/accountSlice';

// Ảnh Form Signin
import FormImage from '../../assets/img/Signin/Logo.png'

// CSS Animation
import '../../scss/authText.css';


// ********************************************************************
//                              Others

const { Title, Paragraph } = Typography;

// CSS Form
const FormLayout = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}

// CSS Text of Login Form
const LoginText = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding: '24px'
}

// ********************************************************************

const SignIn = () => {

    // ********************************************************************
    //                              Variables

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ********************************************************************


    // ********************************************************************
    //                              useState

    // ********************************************************************


    // ********************************************************************
    //                              useEffect

    // ********************************************************************


    // ********************************************************************
    //                              Functions

    // Login
    const onFinish = async (values) => {
        const { email, password } = (values);
        // console.log('email: ', email, 'mật khẩu: ', password);
        try {
            let accessToken = '';
            // lấy API
            let res = await GetLogin(email, password);
            // console.log('Response Login: ', res);
            const role = res.data.user_info.role.toLowerCase();
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

            if (res.status === 200 && (role === "admin" || role === "dentist")) {
                // Navigate to the home page
                navigate(`/${role}`);
            } else {
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
                            description: 'Lỗi server! Vui lòng thử lại sau.',
                            duration: 2,
                        });
                        break;
                    case 400:
                        notification.error({
                            message: 'Đăng nhập thất bại',
                            description: 'Thông tin đăng nhập không hợp lệ.',
                            duration: 2,
                        });
                        break;
                }
            }
            notification.error({
                message: 'Đăng nhập thất bại',
                description: 'Email hoặc mật khẩu không chính xác.',
                duration: 2,
            });
        }
        return;
    };
    // ********************************************************************


    // *********** JSX **************
    return (
        <>
            <div className="sign-in" style={{ width: '70%', margin: '4rem auto' }}>
                <div className="container space-1">
                    <div>
                        <Row>
                            <Col span={12}>
                                {/* Form Inout */}
                                <div className='w-lg-60 mx-auto p-3' style={FormLayout}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                src={FormImage}
                                                style={{ width: '185px' }}
                                                alt="logo"
                                            />
                                            <Title level={2} style={{ marginTop: '16px', marginBottom: '40px', textTransform: 'capitalize' }}>đăng nhập</Title>
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
                                            {/* <Form.Item>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                                        <Checkbox>Remember me</Checkbox>
                                                    </Form.Item>

                                                    <a className="login-form-forgot" href="">
                                                        Quên mật khẩu
                                                    </a>
                                                </div>
                                            </Form.Item> */}
                                            <div>
                                                <Form.Item>

                                                    <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                                                        Đăng nhập
                                                    </Button>
                                                    {/* Hoặc <a href="/dang-ky">Đăng ký!</a> */}
                                                </Form.Item>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12}>

                                <div className='form-text' style={LoginText}>
                                    <div style={{ color: 'white', padding: '24px', margin: 'auto' }}>
                                        <Title level={3} style={{ color: 'white', textTransform: 'capitalize' }}>phòng khám nha khoa sức khỏe</Title>
                                        <Paragraph style={{ color: 'white', textAlign: 'justify' }}>
                                            Tại Phòng khám Nha khoa của chúng tôi, sức khỏe răng miệng của bạn là ưu tiên hàng đầu.
                                            Chúng tôi cam kết cung cấp dịch vụ chăm sóc nha khoa chất lượng cao với đội ngũ bác sĩ và nhân viên chuyên nghiệp, tận tâm.
                                            Từ việc kiểm tra định kỳ đến các dịch vụ điều trị phức tạp, chúng tôi luôn sẵn sàng đáp ứng nhu cầu của bạn.
                                            Hãy để chúng tôi giúp bạn có một nụ cười tươi sáng và khỏe mạnh hơn mỗi ngày.
                                        </Paragraph>
                                    </div>
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