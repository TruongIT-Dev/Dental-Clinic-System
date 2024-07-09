import { useState, useEffect } from 'react';
import { Button, Form, Input, Row, Col, Space, notification, Typography, DatePicker, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GetSignUp } from '../../apis/api';
import FormImage from '../../assets/img/Signin/Logo.png'
import '../../scss/authText.css';
import dayjs from 'dayjs';




// ********************************************************************
//                              CSS

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

// ********************************************************************

const SignUp = () => {
    // ********************************************************************
    //                              Variables

    const { Title, Paragraph } = Typography;
    const [form] = Form.useForm();
    const navigate = useNavigate();

    // ********************************************************************


    // ********************************************************************
    //                              useState

    const [date, setDate] = useState("");


    // ********************************************************************


    // ********************************************************************
    //                              useEffect

    // ********************************************************************



    // ********************************************************************
    //                              API Functions

    // Submit Form
    const onFinish = async (values) => {
        values.date_of_birth = dayjs(values.date_of_birth).format("YYYY-MM-DD");
        const { email, full_name, phone_number, date_of_birth, gender, password } = values;
        // console.log(values);
        try {
            // Lấy API
            let res = await GetSignUp(email, full_name, phone_number, date_of_birth, gender, password);
            // console.log('Response Sign Up:', res);
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
            const isEmailExisted = error.response.data.email_error;
            const isPhoneNumberExisted = error.response.data.phone_number_error;
            // Check the error response status code and show corresponding notifications
            if (error.response) {
                switch (error.response.status) {
                    case 403: {
                        if (isEmailExisted) {
                            form.setFields([
                                {
                                    name: 'email',
                                    errors: ['Email đã tồn tại!'],
                                }
                            ])
                        }

                        if (isPhoneNumberExisted) {
                            form.setFields([
                                {
                                    name: 'phone_number',
                                    errors: ['Số điện thoại đã tồn tại!'],
                                }
                            ])
                        }
                        break;
                    }
                    case 400: {
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: 'Thông tin nhập không hợp lệ!',
                            duration: 2,
                        });
                        break;
                    }
                    case 500:
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: 'Lỗi server',
                            duration: 2,
                        });
                        break;
                }
            }
        }
    }

    // ********************************************************************


    // ********************************************************************
    //                              Functions

    // Datepicker pick box
    const onChangeDate = (date) => {
        setDate(date)
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
        if (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ\s]+$/.test(value)) {
            return Promise.reject(new Error('Yêu cầu chỉ chữ cái (bao gồm chữ tiếng Việt) và dấu cách!'));
        }
        if (value.length > 20) {
            return Promise.reject(new Error('Tên đăng nhập không được vượt quá 30 ký tự!'));
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

    // Validator Password
    const validatePassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(''));
        }

        const errors = [];
        const hasLength = (value.length) >= 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        if (!hasLength) {
            errors.push('Bao gồm tối thiểu 8 ký tự, ');
        }

        if (!hasUpperCase) {
            errors.push('ít nhất 1 chữ in hoa, ');
        }

        if (!hasNumber) {
            errors.push('1 chữ số, ');
        }

        if (!hasSpecialChar) {
            errors.push('và 1 ký tự đặc biệt!');
        }

        if (errors.length > 0) {
            return Promise.reject(new Error(errors.join(' ')));
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
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                src={FormImage}
                                                style={{ width: '185px' }}
                                                alt="logo"
                                            />
                                            <Title level={2} style={{ marginTop: '16px', marginBottom: '40px', textTransform: 'capitalize' }}>đăng ký</Title>
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
                                                display: 'inline-block',
                                                textAlign: 'start'
                                            }}
                                            initialValues={{
                                                remember: true,
                                                date_of_birth: date,
                                            }}
                                            onFinish={onFinish}
                                            autoComplete="off"
                                        >
                                            {/* Nhập Email */}
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                validateDebounce={1000}
                                                rules={[
                                                    {
                                                        type: "email",
                                                        message: "Email không hợp lệ!"
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng nhập email!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input />
                                            </Form.Item>

                                            {/* Nhập Username */}
                                            <Form.Item
                                                label="Họ và Tên"
                                                name="full_name"
                                                validateDebounce={1000}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng nhập họ tên!',
                                                    },
                                                    {
                                                        validator: validateUsername,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input />
                                            </Form.Item>

                                            {/* Nhập Số Điện Thoại */}
                                            <Form.Item
                                                label="Số điện thoại"
                                                name="phone_number"
                                                validateDebounce={1000}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng nhập số điện thoại!',
                                                    },
                                                    {
                                                        validator: validatePhoneNumber,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Ngày sinh"
                                                name="date_of_birth"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng chọn ngày!',
                                                    },
                                                ]}
                                            >
                                                <DatePicker
                                                    placeholder='YYYY-MM-DD'
                                                    onChange={onChangeDate}
                                                    format="YYYY-MM-DD"
                                                />
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
                                                <Radio.Group name="radiogroup">
                                                    <Radio value='Nam'>Nam</Radio>
                                                    <Radio value='Nữ'>Nữ</Radio>
                                                </Radio.Group>
                                            </Form.Item>

                                            {/* Nhập Password */}
                                            <Form.Item
                                                label="Mật khẩu"
                                                name="password"
                                                validateDebounce={1000}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng nhập mật khẩu!',
                                                    },
                                                    {
                                                        validator: validatePassword,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password />
                                            </Form.Item>

                                            {/* Nhập lại Password */}
                                            <Form.Item
                                                label="Nhập lại mật khẩu"
                                                name="re-password"
                                                validateDebounce={1000}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng nhập mật khẩu!',
                                                    },
                                                    {
                                                        validator: validateRePassword,
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password />
                                            </Form.Item>

                                            <Form.Item
                                                wrapperCol={{
                                                    offset: 6,
                                                    span: 16,
                                                }}
                                            >
                                                <Space>
                                                    <SubmitButton form={form}>Đăng ký tài khoản</SubmitButton>
                                                </Space>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12}>
                                <div className='form-text' style={SignupText}>
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

export default SignUp