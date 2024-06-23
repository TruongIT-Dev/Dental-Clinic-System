import { useParams } from "react-router-dom"
import { DoUpdateServiceByAdmin, DoViewDetailServiceByAdmin } from "../../../../apis/api";
import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, notification, InputNumber, message } from 'antd';


const FormUpdateService = () => {
    //*****************************************************************
    //-------------------------- Variable------------------------------
    const { id } = useParams();

    const { Title } = Typography;

    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------useState------------------------------

    // Liệt kê Chi tiết Thông tin của 1 dịch vụ
    const [detailService, setDetailService] = useState([]);

    //-----------------------------------------------------------------
    //*****************************************************************

    //*****************************************************************
    //--------------------------Call API-------------------------------
    // API Show Thông tin Chi tiết 1 dịch vụ
    const fetchDoViewDetailServiceByAdmin = async (id) => {
        const APIDoViewDetailService = await DoViewDetailServiceByAdmin(id);

        const GetDataDetailCategory = APIDoViewDetailService?.data || {};
        setDetailService(GetDataDetailCategory);
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

                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên"
                            name="name"
                        >
                            <Input placeholder={detailService.name} />
                        </Form.Item>

                        <Form.Item
                            label="Giá"
                            name="cost"
                        >
                            <InputNumber placeholder={detailService.cost} />
                        </Form.Item>

                        <Form.Item
                            label="Đơn vị"
                            name="unit"
                        >
                            <Input placeholder={detailService.unit} />
                        </Form.Item>

                        <Form.Item
                            label="Thời hạn bảo hành"
                            name="warranty_duration"
                        >
                            <Input placeholder={detailService.warranty_duration} />
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