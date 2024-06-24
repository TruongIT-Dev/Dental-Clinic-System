import { useParams } from "react-router-dom"
import { DoUpdateServiceByAdmin, DoViewDetailServiceByAdmin } from "../../../../apis/api";
import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, notification, InputNumber, message } from 'antd';


const FormUpdateService = () => {
    //*****************************************************************
    //-------------------------- Variable------------------------------
    const { id } = useParams();

    const { Title } = Typography;
    const [form] = Form.useForm();
    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------useState------------------------------

    // Liệt kê Chi tiết Thông tin của 1 dịch vụ
    const [detailService, setDetailService] = useState({});
    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------Call API-------------------------------
    // API Show Thông tin Chi tiết 1 dịch vụ
    const fetchDoViewDetailServiceByAdmin = async (id) => {

        try {
            const APIDoViewDetailService = await DoViewDetailServiceByAdmin(id);

            const GetDataDetailCategory = APIDoViewDetailService?.data || {};
            setDetailService(GetDataDetailCategory);

        } catch (error) {
            console.log(error)
        }
    }

    // API Update Loại hình dịch vụ
    const onFinish = async (values) => {
        console.log('Success:', values);

        const { name, cost, unit, warranty_duration } = values;

        try {
            const res = await DoUpdateServiceByAdmin(id, name, cost, unit, warranty_duration);
            console.log("Res:", res);
            if (res.status === 204) {
                // navigate('/admin/quan-ly-dich-vu');
                window.location.reload();
                message.success('Cập nhật thành công!')
            }
        } catch (error) {
            console.log(error)
            notification.error({
                message: 'Cập nhật thất bại!',
            });
        }
    }

    //-----------------------------------------------------------------
    //*****************************************************************


    //*****************************************************************
    //--------------------------useEffect------------------------------
    useEffect(() => {
        fetchDoViewDetailServiceByAdmin(id);
    }, [id])

    useEffect(() => {
        if (detailService) {
            form.setFieldsValue({
                name: detailService.name,
                cost: detailService.cost,
                unit: detailService.unit,
                warranty_duration: detailService.warranty_duration,
            });
        }
    }, [detailService, form])
    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------Function-------------------------------


    // Form submit Failed
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //-----------------------------------------------------------------
    //*****************************************************************
    return (
        <div className="container" style={{ height: '100vh' }}>
            <div>
                {/* Header */}
                <div>
                    <Title level={2}>Chi tiết dịch vụ</Title>
                </div>
                <br />
                <div style={{ marginTop: '1rem' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 10,
                        }}
                        style={{

                        }}
                        form={form}
                        initialValues={{
                            name: detailService.name,
                            cost: detailService.cost,
                            unit: detailService.unit,
                            warranty_duration: detailService.warranty_duration,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên"
                            name="name"
                        >
                            <Input value={detailService.name} />
                        </Form.Item>

                        <Form.Item
                            label="Giá"
                            name="cost"
                        >
                            <InputNumber value={detailService.cost} />
                        </Form.Item>

                        <Form.Item
                            label="Đơn vị"
                            name="unit"
                        >
                            <Input value={detailService.unit} />
                        </Form.Item>

                        <Form.Item
                            label="Thời hạn bảo hành"
                            name="warranty_duration"
                        >
                            <Input value={detailService.warranty_duration} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                // span: 4,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Chỉnh sửa
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>

    );
}
export default FormUpdateService