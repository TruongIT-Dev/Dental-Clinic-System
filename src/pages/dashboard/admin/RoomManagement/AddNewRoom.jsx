import { Button, Form, Input, Typography } from 'antd';


const AddNewRoom = () => {


    // *****************************************
    // ------------- Variables ----- -----------

    const { Title } = Typography;

    // *****************************************



    // *****************************************
    // ------------- useState ------------------

    // *****************************************



    // *****************************************
    // ------------- API Function --------------

    // Submit Form Success
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    // Submit Form Failed
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // *****************************************




    // *****************************************
    // ------------- useEffect -----------------

    // *****************************************




    // *****************************************
    // ------------- Others function -----------

    // *****************************************

    return (
        <div className="container mt-5">

            <div>
                <Title level={2}>Tạo tài khoản Nha sĩ</Title>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        // maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Đăng ký phòng khám
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AddNewRoom;
