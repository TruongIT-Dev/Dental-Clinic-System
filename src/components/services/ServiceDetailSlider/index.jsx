import { UserOutlined, PhoneOutlined, CarryOutOutlined } from '@ant-design/icons';
import { Button, Form, Input, DatePicker, Select } from 'antd';



const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const ServiceDetailSlider = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Form
                name="slider_form"
                className="slider-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                {/* Nhập Tên */}
                <Form.Item
                    name="ten-khach-hang"
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên khách hàng" />
                </Form.Item>

                {/* Nhập Số Điện Thoại */}
                <Form.Item
                    name="so-dien-thoai"
                >
                    <Input
                        prefix={<PhoneOutlined className="site-form-item-icon" />}
                        placeholder="Số Điện Thoại"
                    />
                </Form.Item>

                {/* Nhập Loại hình dịch vụ */}
                <Form.Item
                    name="loai-hinh-dich-vu"
                >
                    <Input
                        placeholder="Bọc Răng Sứ"
                        prefix={<CarryOutOutlined className="site-form-item-icon" />}
                        disabled
                    />
                </Form.Item>

                {/* Nhập Ngày */}
                <Form.Item
                    name="ngay-thang-nam"
                    style={{textAlign:'left'}}
                >
                    Chọn ngày: <br/>
                    <DatePicker onChange={onChange} />
                 
                </Form.Item>

                {/* Nhập thời gian */}
                <Form.Item
                    name="ngay-thang-nam"
                    style={{ textAlign: 'left' }}
                >
                    Chọn thời gian: <br />
                    <Select
                        defaultValue="1"
                        style={{
                            width: 130,
                        }}
                        options={[
                            {
                                value: '1',
                                label: '7h-9h15',
                            },
                            {
                                value: '2',
                                label: '9h30-11h45',
                            },
                            {
                                value: '3',
                                label: '12h30-14h45',
                            },
                            {
                                value: '4',
                                label: '15h-17h15',
                            },
                        ]}
                    />

                </Form.Item>

                <Form.Item>
                    <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
                        Đặt Lịch
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default ServiceDetailSlider