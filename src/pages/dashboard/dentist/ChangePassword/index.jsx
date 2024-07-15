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
    const navigate = useNavigate();
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
                        description: 'Mật khẩu không đúng. Vui lòng thử lại',
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
                        description: 'Bad Request',
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
                        <Form.Item label="Mật khẩu cũ" name="old_password">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Mật khẩu mới" name="new_password">
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <SubmitButton form={form}>Đổi Mật Khẩu</SubmitButton>
                        </Form.Item>
                    </Card>


                </Form>

            </div>

        </>
    );
};

export default DentistChangePassword;
