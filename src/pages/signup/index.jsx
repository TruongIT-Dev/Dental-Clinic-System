import { useState, useEffect } from 'react';
import { Button, Form, Input, Row, Col, Image, Space, notification } from 'antd';

import { useNavigate } from 'react-router-dom';
import { GetSignUp } from '../../apis/api';


const FormLayout = {
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 3px 10px 0 rgba(0, 0, 0, .14)',
    boxSizing: 'border - box',
    overflow: 'hidden',
}


const SignUp = () => {
    // const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinishFailed = (errorInfo) => {
        console.log('Đăng ký Failed:', errorInfo);
    };

    const onFinish = async (values) => {
        const { full_name, email, password, phone_number } = values;
        // console.log('input values: ', 'email:', email, 'fullname:', full_name, 'password:', password, 'phone:', phone_number);

        try {
            // Lấy API
            let res = await GetSignUp(full_name, email, password, phone_number);
            console.log('Response Sign Up:', res);
            // Nếu có dữ liệu BE trả về!

            // Check if the API returned a response with status code 201 (Created)
            if (res.status === 201) {
                // Navigate to the login page
                navigate('/dang-nhap');

                // Show a success message
                notification.success("Đăng ký thành công")
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
        if (!/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
            return Promise.reject(new Error('Yêu cầu chứa ít nhất một chữ cái viết hoa và 1 chữ số!'));
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
            return Promise.reject(new Error('Vui lòng nhập 10 chữ số, bắt đầu bằng số 0 và chữ số tiếp theo khác 0.'));
        }
        return Promise.resolve();
    };

    // Validate Mật Khẩu
    const validatePassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(''));
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(value)) {
            return Promise.reject(new Error('Yêu cầu chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.'));
        }
        return Promise.resolve();
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
                                            Đăng Ký
                                        </h2>
                                        <p style={{ lineHeight: '1.5', margin: 0 }}>
                                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Vui lòng để lại thông tin, nhu cầu của quý khách.</i>
                                        </p>
                                        <p style={{ lineHeight: '1.5' }}>
                                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Nha Khoa Kim sẽ liên hệ đến Quý Khách trong thời gian sớm nhất</i>
                                        </p>
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

                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                        >
                                            <Space>
                                                <SubmitButton form={form}>Đăng ký</SubmitButton>
                                                <Button htmlType="reset">Reset</Button>
                                            </Space>
                                        </Form.Item>
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

export default SignUp