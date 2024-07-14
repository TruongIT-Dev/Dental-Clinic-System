import React from 'react';
import { Form, Input, Select, Button, Card, DatePicker, Radio, Typography } from 'antd';

const { Option } = Select;
const { Title } = Typography;

const PatientMedicalRecord = () => {

    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Tạo hồ sơ bệnh nhân</Title>
            </div>

            <Form
                layout="vertical"
                autoComplete="true"
                onFinish={onFinish}
                style={{
                    display: 'grid',
                    placeItems: 'center'
                }}
            >
                <Card style={{ width: 600 }}>
                    <Form.Item label="Họ và tên" name="full_name" rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Số điện thoại" name="phone_number" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Ngày sinh" name="date_of_birth" rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}>
                        <DatePicker
                            style={{ width: 200 }}
                            format="YYYY-MM-DD"
                            placeholder='YYYY-MM-DD'
                        />
                    </Form.Item>

                    <Form.Item label="Giới tính" name="gender" rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}>
                        <Radio.Group name="radiogroup">
                            <Radio value='Nam'>Nam</Radio>
                            <Radio value='Nữ'>Nữ</Radio>
                            <Radio value='Khác'>Khác</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Nhóm máu" name="blood_type" rules={[{ required: true, message: 'Vui lòng chọn nhóm máu!' }]}>
                        <Select
                            style={{ width: 200 }}
                            placeholder="Chọn nhóm máu"
                        >
                            <Option value="A">A</Option>
                            <Option value="B">B</Option>
                            <Option value="AB">AB</Option>
                            <Option value="O">O</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Tình trạng răng" name="dental_condition" rules={[{ required: true, message: 'Vui lòng nhập tình trạng răng!' }]}>
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item label="Tiền sử bệnh" name="medical_history">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item label="Dị ứng" name="allergies">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Tạo hồ sơ
                        </Button>
                    </Form.Item>
                </Card>
            </Form>
        </>

    );
};

export default PatientMedicalRecord;
