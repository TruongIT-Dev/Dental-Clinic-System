
import { Button, Form, Input, Select, DatePicker } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Appoinment = () => {


    return (
        <>
            <div className="sign-in">
                <div className="container space-1">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-lg-5 mb-md-3">
                        <h2 style={{ color: '#f6921e', fontWeight: '500', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            đặt lịch hẹn
                        </h2>
                        <p style={{ lineHeight: '1.5', margin: 0 }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Vui lòng để lại thông tin, nhu cầu của quý khách.</i>
                        </p>
                        <p style={{ lineHeight: '1.5' }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Nha Khoa Sức Khỏe sẽ liên hệ đến Quý Khách trong thời gian sớm nhất</i>
                        </p>
                    </div>

                    {/* Form Inout */}
                    <div className='w-lg-60 mx-auto bg-light p-3 ' style={{ maxWidth: '300', width: '50%' }}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 450,
                                marginTop: '1.5rem',
                                width: '100%',
                                display: 'inline-block',
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
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
                                label="Họ và Tên"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập tên đăng nhập!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Nhập Số Điện Thoại */}
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập số điện thoại!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Chọn loại hình dịch vụ */}
                            <Form.Item
                                label="Loại dịch vụ"
                                name="category"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Chọn dịch vụ"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Bọc răng sứ',
                                        },
                                        {
                                            value: '2',
                                            label: 'Cấy ghép implant',
                                        },
                                        {
                                            value: '3',
                                            label: 'Niềng răng thẩm mỹ',
                                        },
                                        {
                                            value: '4',
                                            label: 'Tẩy trắng răng',
                                        },
                                        {
                                            value: '5',
                                            label: 'Nhổ răng khôn',
                                        },
                                        {
                                            value: '6',
                                            label: 'Bệnh lý nha chu',
                                        },
                                        {
                                            value: '7',
                                            label: 'Điều trị tủy',
                                        },
                                    ]}
                                />
                            </Form.Item>

                            {/* Chọn thời gian */}
                            <Form.Item
                                label="Chọn ngày"
                                name="date"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker style={{ width: '100%' }} needConfirm />
                            </Form.Item>

                            {/* Chọn bác sĩ */}
                            <Form.Item
                                label="Chọn bác sĩ"
                                name="doctor"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='chọn bác sĩ để khám'
                                    style={{
                                        width: '100%',
                                    }}
                                    options={[
                                        {
                                            value: 'doctorA',
                                            label: 'doctorA',
                                        },
                                        {
                                            value: 'doctorB',
                                            label: 'doctorB',
                                        },
                                        {
                                            value: 'doctorC',
                                            label: 'doctorC',
                                        },
                                        {
                                            value: 'doctorD',
                                            label: 'doctorD',
                                        },
                                    ]}
                                />
                            </Form.Item>

                            {/* Chọn thời gian */}
                            <Form.Item
                                label="Chọn thời gian"
                                name="time"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='chọn thời gian khám'
                                    style={{
                                        width: '100%',
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
                                <div style={{display:'flex', justifyContent:'flex-end'}}>
                                    <Button type="primary" htmlType="submit">
                                        Đặt lịch hẹn
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Appoinment