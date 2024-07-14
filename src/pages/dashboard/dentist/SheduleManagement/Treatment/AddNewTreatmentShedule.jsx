import {
    Button,
    Input,
    Form,
    Card,
    Select,
    Typography,
    Radio,
    DatePicker,
    TimePicker,
} from "antd";

const AddNewTreatmentScheule = () => {

    const { Title } = Typography;

    return (

        <>
            {/* Header */}
            <div>
                <Title level={2}>Tạo lịch điều trị</Title>
            </div>
            <div className="container mx-auto px-4 mt-4">
                <Form
                    layout="vertical"
                    autoComplete="true"
                    style={{
                        display: 'grid',
                        placeItems: 'center'
                    }}
                >
                    <Card style={{ width: 600 }}>
                        <Form.Item label="Họ và tên" name="full_name" rules={[{ required: true, message: 'Please input the patient\'s full name!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Số điện thoại" name="phone_number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Ngày sinh" name="date_of_birth" rules={[{ required: true, message: 'Please select the date of birth!' }]}>
                            <DatePicker
                                style={{ width: 200 }}
                                format="YYYY-MM-DD"
                                placeholder='YYYY-MM-DD'
                            />
                        </Form.Item>

                        <Form.Item label="Giới tính" name="gender" rules={[{ required: true, message: 'Please select the gender!' }]}>
                            <Radio.Group name="radiogroup">
                                <Radio value='Nam'>Nam</Radio>
                                <Radio value='Nữ'>Nữ</Radio>
                                <Radio value='Khác'>Khác</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="Loại hình dịch vụ" name="specialty_id" rules={[{ required: true, message: 'Please select the specialty!' }]}>
                            <Select
                                style={{ width: 400 }}
                                options={[
                                    {
                                        value: 'cleaning',
                                        label: 'Làm sạch răng',
                                    },
                                    {
                                        value: 'whitening',
                                        label: 'Tẩy trắng răng',
                                    },
                                    {
                                        value: 'orthodontics',
                                        label: 'Chỉnh nha',
                                    },
                                    {
                                        value: 'surgery',
                                        label: 'Phẫu thuật nha khoa',
                                    },
                                    {
                                        value: 'implants',
                                        label: 'Cấy ghép nha khoa',
                                    },
                                    {
                                        value: 'extractions',
                                        label: 'Nhổ răng',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Ngày hẹn" name="appointment_date" rules={[{ required: true, message: 'Please select the appointment date!' }]}>
                            <DatePicker
                                style={{ width: 200 }}
                                format="YYYY-MM-DD"
                                placeholder='YYYY-MM-DD'
                            />
                        </Form.Item>

                        <Form.Item label="Giờ hẹn" name="appointment_time" rules={[{ required: true, message: 'Please select the appointment time!' }]}>
                            <TimePicker
                                style={{ width: 200 }}
                                format="HH:mm"
                                placeholder='HH:mm'
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Lưu lịch hẹn
                            </Button>
                        </Form.Item>
                    </Card>
                </Form>

            </div>

        </>
    );
};

export default AddNewTreatmentScheule;
