import { Link } from 'react-router-dom';
import '../../../../scss/AdminAddNewDentist.css'
import { Breadcrumb, Button, Card, Col, DatePicker, Form, Image, Input, Radio, Row, Select, Typography, message } from 'antd';
import { useState } from 'react';
import banner from '../../../../assets/img/add_dentist/add-dentist-banner.jpg'
import { DoAddNewDentistByAdmin } from '../../../../apis/api';

const AddNewDentist = () => {


    // ****************************************
    // --------------Variables-----------------
    const { Title } = Typography;
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();


    // ****************************************
    // --------------useState-----------------

    const [date, setDate] = useState('');


    // ****************************************
    // --------------API Function--------------

    const onFinish = (values) => {
        console.log('Success:', values);
        const { email, full_name, phone_number, gender, date_of_birth, specialty, password } = values;
        const formattedValues = {
            ...values,
            dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format('YYYY-MM-DD') : null,
        };
        console.log('Success:', formattedValues);
        try {
            const APIAddNewDentist = DoAddNewDentistByAdmin(email, full_name, phone_number, gender, date_of_birth, specialty, password);
            console.log("APIAddNewDentist", APIAddNewDentist)
            switch (APIAddNewDentist.status) {
                case 201:
                    message.success('Thêm Nha sĩ thành công');
                    // window.location.reload();
                    break;
                case 400:
                    message.error('Bad Request');
                    break;
                default:
                    message.error('Thêm thất bại');
                    break;
            }
        } catch (error) {
            console.log(error)
        }
    };


    // ****************************************
    // --------------useEffect-----------------


    // ****************************************
    // --------------Other Functions-----------

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleChangeDate = (date, dateString) => {
        console.log(dateString);
        setDate(dateString)
    };


    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Tạo tài khoản Nha sĩ</Title>
            </div>

            <div style={{ marginTop: '3rem' }}>
                {/* <Card style={{ width: '80%' }}> */}


                <Form
                    form={form}
                    name="basic"
                    layout='horizontal'

                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 10,
                    }}
                    style={{
                        width: '100%'
                    }}
                    initialValues={{
                        date_of_birth: date,
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {

                                message: 'Vui lòng nhập email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Họ và Tên"
                        name="fullname"
                        rules={[
                            {

                                message: 'Vui lòng nhập họ tên!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone_number"
                        rules={[
                            {

                                message: 'Vui lòng nhập số điện thoại!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Giới tính"
                        name="gender"
                        rules={[
                            {

                                message: 'Vui lòng chọn giới tính!',
                            },
                        ]}
                    >
                        <Select
                            defaultValue="Chọn giới tính"
                            onChange={handleChange}
                            allowClear
                            options={[
                                {
                                    value: 'male',
                                    label: 'Nam',
                                },
                                {
                                    value: 'female',
                                    label: 'Nữ',
                                },

                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Ngày sinh"
                        name="date_of_birth"
                        rules={[
                            {
                                message: 'Vui lòng chọn ngày!',
                            },
                        ]}
                    >
                        {/* <DatePicker
                            placeholder='YYYY-MM-DD'
                            format="YYYY-MM-DD"
                            onChange={handleChangeDate}
                        /> */}
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Chuyên khoa"
                        name="specialty"
                        rules={[
                            {

                                message: 'Vui lòng nhập chuyên khoa!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {

                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                {/* </Card> */}
            </div>
        </>
    )
}

export default AddNewDentist