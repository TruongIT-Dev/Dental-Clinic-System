import { useState } from 'react';
import { Button, Form, Input, Radio, message, notification } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doLoginAction, doLogoutAction } from '../../redux/account/accountSlice';
import { GetSignUp } from '../../apis/api';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
//  hi

const SignUp = () => {

    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { email, full_name, password, phone_number } = values;
        console.log('input values: ', 'email:', email, 'fullname:', full_name, 'password:', password, 'phone:', phone_number);
        setIsLoading(true);
        let res = await GetSignUp(email, full_name, password, phone_number);
        console.log('res api signup', res);
        setIsLoading(false);
        
        if (res) {
            message.success("Register successfully");
            navigate('/dich-vu');
        } else {
            navigate('/error');
        }

        // notification.error({
        //     message: 'Register Error',
        //     description: res.data && Array.isArray(message) ? res.message[0] : res.message,
        //     duration: 5
        // })

        // if (res?.data) {
        //     let accessToken = res.data?.accessToken;
        //     localStorage.setItem('access_token', accessToken);
        //     dispatch(doLoginAction({ accessToken: accessToken }));
        //     message.success("Register successfully");
        //     navigate("/dich-vu");
        //     return;
        // }
        // notification.error({
        //     message: 'Login Error',
        //     description: res.data && Array.isArray(message) ? res.message[0] : res.message,
        //     duration: 5
        // })
    };


    // // Checking Data before send to server
    // const [formData, setFormData] = useState({
    //     fullname: '',
    //     email: '',
    //     password: '',
    //     phone:''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData); // This will log the form data when the form is submitted
    //     // Now you can proceed with sending formData to the server or perform any other action
    // };

    return (
        <>
            <div className="sign-up" style={{ width: '100%' }}>
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
                            {/* <Form.Item>
                                <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Radio value="male"> Anh </Radio>
                                    <Radio value="female"> Chị </Radio>
                                </Radio.Group>
                            </Form.Item> */}

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
                                <Input />
                            </Form.Item>

                            {/* Nhập Username */}
                            <Form.Item
                                label="Tên đăng nhập"
                                name="full_name"
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


                            {/* Nhập Số Điện Thoại */}
                            <Form.Item
                                label="Số điện thoại"
                                name="phone_number"
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
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Button

                                    type="primary" htmlType="submit" loading={isLoading} >
                                    Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp