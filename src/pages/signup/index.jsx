import { useState, useEffect } from 'react';
import { Button, Form, Input, Row, Col, Space, notification, Typography } from 'antd';

import { useNavigate } from 'react-router-dom';
import { GetSignUp } from '../../apis/api';

import FormImage from '../../assets/img/Signin/Logo.png'

// CSS Animation
import '../../scss/authText.css';

const FormLayout = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}

const SignupText = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding: '24px'
}

const { Title, Paragraph } = Typography;

const SignUp = () => {
    // const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinishFailed = (errorInfo) => {
        console.log('Đăng ký Failed:', errorInfo);
    };

    const onFinish = async (values) => {
        const { email, full_name, phone_number, password } = values;
        // console.log('input values: ', 'email:', email, 'fullname:', full_name, 'password:', password, 'phone:', phone_number);

        try {
            // Lấy API
            let res = await GetSignUp(email, full_name, phone_number, password);
            console.log('Response Sign Up:', res);
            // Nếu có dữ liệu BE trả về!

            // Check if the API returned a response with status code 201 (Created)
            if (res.status === 201) {
                // Navigate to the login page
                navigate('/dang-nhap');

                // Show a success message
                notification.success({
                    type: 'success',
                    message: 'Đăng ký thành công',
                    duration: 2,
                })
            }
        } catch (error) {
            // Log the error for debugging
            console.log(error);

            // Check the error response status code and show corresponding notifications
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: '400 Bad Request: Please check your input and try again.',
                            duration: 5,
                        });
                        break;
                    case 403:
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: '403 Forbidden: You do not have permission to perform this action.',
                            duration: 5,
                        });
                        break;
                    case 500:
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: '500 Internal Server Error: Something went wrong on our end. Please try again later.',
                            duration: 5,
                        });
                        break;
                    default:
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: error.response.data.errors || 'An unknown error occurred',
                            duration: 5,
                        });
                }
            } else {
                // Handle network errors or other issues that don't have a response
                notification.error({
                    message: 'Đăng ký thất bại',
                    description: 'An error occurred. Please check your network connection and try again.',
                    duration: 5,
                });
            }
        };
    }

    // ************ Checked Mở Button Nếu Người Dùng Nhập Đủ Form thì Cho Đăng Ký ***************
    const SubmitButton = ({ form, children }) => {
        const [submittable, setSubmittable] = useState(false);

        // Watch all values
        const values = Form.useWatch([], form);
        useEffect(() => {
            form
                .validateFields({
                    validateOnly: true,
                })
                .then(() => setSubmittable(true))
                .catch(() => setSubmittable(false));
        }, [form, values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable}>
                {children}
            </Button>
        );
    };


    // *********** Validate Dữ Liệu Người Dùng Nhập *****************
    // Validate Tên Đăng Nhập
    const validateUsername = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(''));
        }
        if (!/^[a-zA-Z]+$/.test(value)) {
            return Promise.reject(new Error('Yêu cầu chỉ chữ thường và chữ cái in hoa!'));
        }
        return Promise.resolve();
    };

    // Validate Số Diện Thoại
    const validatePhoneNumber = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(''));
        }

        const phoneRegex = /^0[1-9][0-9]{8}$/;

        if (!phoneRegex.test(value)) {
            return Promise.reject(new Error('Số điện thoại không hợp lệ!'));
        }
        return Promise.resolve();
    };

    // Validate Mật Khẩu
    const validatePassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(''));
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!passwordRegex.test(value)) {
            return Promise.reject(new Error('Yêu cầu tối thiểu 8 ký tự chứa chữ in hoa, số và 1 ký tự đặc biệt!'));
        }
        return Promise.resolve();
    };

    // Validate Nhập lại mật khẩu
    const validateRePassword = (rule, value, callback) => {
        const { getFieldValue } = form;

        if (value && value !== getFieldValue('password')) {
            callback('Mật khẩu không khớp!');
        } else {
            callback();
        }
    };

    // *********** JSX **************
    return (
         <>
            <div className="sign-in" style={{ width: '80%', margin: '2rem auto' }}>
                <div className="container space-1">
                    <div>
                        <Row>
                            <Col span={12}>
                                {/* Form Inout */}
                                <div className='w-lg-60 mx-auto p-3' style={FormLayout}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height:'100%' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                src={FormImage}
                                                style={{ width: '185px' }}
                                                alt="logo"
                                            />
                                            <Title level={2} style={{ marginTop: '16px', marginBottom: '40px', textTransform:'capitalize' }}>đăng ký</Title>
                                        </div>
                                        <Form
                                            form={form}
                                            name="signup"
                                            labelCol={{
                                                span: 6,
                                            }}
                                            wrapperCol={{
                                                span: 16,
                                            }}
                                            style={{
                                                maxWidth: 600,
                                                width: '100%',
                                                display: 'inline-block'
                                            }}
                                            initialValues={{
                                                remember: true,
                                            }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="off"
                                        >
                                            {/* Nhập Email */}
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[
                                                    {
                                                        type: "email",
                                                        message: "Dữ liệu nhập không chính xác"
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Yêu cầu nhập email!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input placeholder='nhập email' />
                                            </Form.Item>

                                            {/* Nhập Username */}
                                            <Form.Item
                                                label="Họ và Tên"
                                                name="full_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Yêu cầu nhập họ tên!',
                                                    },
                                                    {
                                                        validator: validateUsername,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input placeholder='nhập tên đăng nhập' />
                                            </Form.Item>

                                            {/* Nhập Số Điện Thoại */}
                                            <Form.Item
                                                label="Số điện thoại"
                                                name="phone_number"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Yêu cầu nhập số điện thoại!',
                                                    },
                                                    {
                                                        validator: validatePhoneNumber,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input placeholder='nhập số điện thoại' />
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
                                                    {
                                                        validator: validatePassword,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password placeholder='nhập mật khẩu' />
                                            </Form.Item>

                                            {/* Nhập lại Password */}
                                            <Form.Item
                                                label="Nhập lại mật khẩu"
                                                name="re-password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Yêu cầu nhập mật khẩu!',
                                                    },
                                                    {
                                                        validator: validateRePassword,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password placeholder='nhập mật khẩu' />
                                            </Form.Item>


                                            <Form.Item
                                                wrapperCol={{
                                                    offset: 8,
                                                    span: 16,
                                                }}
                                                style={{ display: 'flex', justifyContent: 'center' }}
                                            >
                                                <Space>
                                                    <SubmitButton form={form}>Đăng ký</SubmitButton>
                                                </Space>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12}>  
                                <div className='form-text' style={SignupText}>
                                    <div style={{ color: 'white', padding: '24px', margin: 'auto' }}>
                                        <Title level={3} style={{ color: 'white', textTransform:'capitalize' }}>phòng khám nha khoa sức khỏe</Title>
                                        <Paragraph style={{ color: 'white', textAlign:'justify' }}>
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

export default SignUp