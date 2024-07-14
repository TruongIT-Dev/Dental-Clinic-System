import { Button, Form, Input, message, InputNumber } from 'antd';
import { DoAddNewServiceByAdmin } from '../../../../apis/api';

// import CSS
import '../../../../scss/FormAddNewService.css';

const FormAddNewService = ({ data, id, category }) => {

    // console.log("prop data: ", data);
    // console.log("prop id: ", id);
    // console.log("prop category: ", category);

    const [form] = Form.useForm();

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async (values) => {
        const { category_id, cost, name, unit, warranty_duration } = values;
        console.log("Check Form Data: ", values);
        try {
            const APIAddNewService = await DoAddNewServiceByAdmin(category_id, cost, name, unit, warranty_duration);
            // console.log("Input data new service: ", APIAddNewService);

            switch (APIAddNewService.status) {
                case 201:
                    message.success('Thêm dịch vụ thành công');
                    window.location.reload();
                    break;
                case 400:
                    message.error('Bad Request');
                    break;
                case 403:
                    message.error('Không có quyền xóa dịch vụ này');
                    break;
                default:
                    message.error('Xóa dịch vụ thất bại');
                    break;
            }
        } catch (error) {
            console.log("Lỗi Thêm Dịch vụ:", error);
        }

    };

    return (
        <>
            <Form
                name="add-new-service"
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    category_id: id, // Initialize categoryId in form
                    remember: true,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Loại Hình Dịch Vụ"
                    name="category_id"
                    style={{ display: 'none' }}
                >
                    <InputNumber disabled />
                </Form.Item>

                <Form.Item
                    label="Tên Dịch Vụ"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên dịch vụ',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá (VNĐ)"
                    name="cost"
                    rules={[
                        {
                            type: 'number',
                            message: 'Dữ liệu nhập không chính xác'
                        },
                        {
                            required: true,
                            message: 'Vui lòng nhập giá dịch vụ'
                        },
                    ]}
                >
                    <InputNumber type='number' className='input-number' />
                </Form.Item>

                <Form.Item
                    label="Đơn vị"
                    name="unit"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập đơn vị'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Bảo hành"
                    name="warranty_duration"
                // rules={[
                //     {
                //         required: true,
                //     },
                // ]}
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
                        Thêm mới dịch vụ
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

};
export default FormAddNewService;