import { Button, Card, Form, Input, notification, Typography } from "antd";
import { DoChangePasswordByDentist } from "../../../../apis/api";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const DentistChangePassword = () => {

    // ***********************************************************************
    //                                Variables
    const userInfo = useSelector(state => state?.account?.user?.user);
    const [form] = Form.useForm();
    const { Title } = Typography;
    // console.log("userInfo", userInfo)
    //************************************************************************


    // ***********************************************************************
    //                                useState

    const [token, setToken] = useState('');
    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    useEffect(() => {
        if (!token) {
            setToken(userInfo.access_token);
        }
    })
    //************************************************************************


    // ***********************************************************************
    //                                API Function

    const onFinishChangePassword = async (values) => {
        // console.log("Success: ", values);
        // console.log("token", token)
        const { old_password, new_password } = values;
        const validation = validateNewPassword(old_password, new_password);

        if (!validation.valid) {
            notification.error({
                message: validation.message,
                description: validation.description,
            });
            return;
        }
        try {
            const APIChangePasswordByDentist = await DoChangePasswordByDentist(old_password, new_password, token);
            console.log(APIChangePasswordByDentist)
            // if (APIChangePasswordByDentist.status === 201) {
            //     notification.success({
            //         message: 'Đổi mật khẩu thành công',
            //         duration: 2,
            //     })
            // }
            notification.success({
                message: 'Đổi mật khẩu thành công',
                duration: 2,
            })
            window.location.reload();
        } catch (error) {
            console.log(error);
            switch (error.response.status) {
                case 401:
                    notification.error({
                        message: 'Đổi mật khẩu thất bại',
                        description: 'Unauthorized',
                        duration: 2,
                    })
                    break;
                case 403:
                    notification.error({
                        message: 'Đổi mật khẩu thất bại',
                        description: 'Mật khẩu hiện tại không đúng. Vui lòng thử lại',
                        duration: 2,
                    })
                    break;
                case 500:
                    notification.error({
                        message: 'Đổi mật khẩu thất bại',
                        description: 'Lỗi Server',
                        duration: 2,
                    })
                    break;

                case 400:
                    notification.error({
                        message: 'Đổi mật khẩu thất bại',
                        description: 'Vui lòng nhập đủ ô trống',
                        duration: 2,
                    })
                    break;

                default:
                    notification.error({
                        message: 'Đổi mật khẩu thất bại',
                        description: 'Lỗi không xác định',
                        duration: 2,
                    })
                    break;

            }
        }
    }
    //************************************************************************


    // ***********************************************************************
    //                                other Function


    // Disable Button
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

    const validateNewPassword = (oldPassword, newPassword) => {
        if (oldPassword === newPassword) {
            return {
                valid: false,
                message: 'Đổi mật khẩu thất bại',
                description: "Mật khẩu mới không được trùng với mật khẩu cũ"
            };
        }
        return {
            valid: true,
            message: ''
        };
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

        if (!hasLength || !hasUpperCase || !hasNumber || !hasSpecialChar) {
            errors.push('Tối thiểu 8 ký tự, 1 chữ hoa, 1 chữ số, và 1 ký tự đặc biệt!');
        }

        if (errors.length > 0) {
            return Promise.reject(new Error(errors.join(' ')));
        }

        return Promise.resolve();
    };

    // Validate Nhập lại mật khẩu
    const validateRePassword = (rule, value, callback) => {
        const { getFieldValue } = form;

        if (value && value !== getFieldValue('new_password')) {
            callback('Mật khẩu không khớp!');
        } else {
            callback();
        }
    };
    //************************************************************************

    return (

        <>
            {/* Header */}
            <div>
                <Title level={2}>Thông tin cá nhân</Title>
            </div>
            <div className="container mx-auto px-4 mt-4">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinishChangePassword}
                    autoComplete="true"
                    style={{
                        display: 'grid',
                        placeItems: 'center'
                    }}
                >

                    <Card style={{ width: 600 }}>
                        <Form.Item label="Nhập mật khẩu hiện tại" name="old_password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="Nhập mật khẩu mới" name="new_password" validateDebounce={1000}
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
                            label="Nhập lại mật khẩu mới"
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

                        <Form.Item>
                            <SubmitButton form={form}>Đổi mật khẩu</SubmitButton>
                        </Form.Item>
                    </Card>


                </Form>

            </div>

        </>
    );
};

export default DentistChangePassword;
