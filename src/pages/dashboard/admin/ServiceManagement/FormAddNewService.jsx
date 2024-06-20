import { Button, Form, Input, message, InputNumber } from 'antd';
import { DoAddNewServiceByAdmin } from '../../../../apis/api';
import { useState } from 'react';

const FormAddNewService = ({ data }) => {

    // console.log("prop data: ", data);
    const [categoryId, setCategoryId] = useState(data.length > 0 ? data[0].category_id : null);

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
            console.log("Input data new service: ", APIAddNewService);

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

    // // Extract category_id from the first object in data array
    // const categoryId = data.length > 0 ? data[0].category_id : null;

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
                    category_id: categoryId, // Initialize categoryId in form
                    remember: true,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Loại Hình Dịch Vụ"
                    name="category_id"
                // rules={[
                //     {
                //         required: true,
                //     },
                // ]}
                >
                    <InputNumber disabled />
                </Form.Item>

                <Form.Item
                    label="Tên Dịch Vụ"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="cost"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="ĐVT"
                    name="unit"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Bảo hành"
                    name="warranty_duration"
                    rules={[
                        {
                            required: true,
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
                        Thêm mới dịch vụ
                    </Button>

                    <Button style={{ marginLeft: '12px' }} htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

};
export default FormAddNewService;