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
import { useEffect, useState } from "react";
import { DoListAllDentistByDentist } from "../../../../../apis/api";
import { useSelector } from "react-redux";

const AddNewTreatmentScheule = () => {

    // ***********************************************************************
    //                                Variables

    const { Title } = Typography;
    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const [form] = Form.useForm();

    const userInfo = useSelector(state => state?.account?.user?.user?.user_info);
    console.log("userInfo:", userInfo)
    //************************************************************************


    // ***********************************************************************
    //                                useState

    // const [listDentists, setListDentists] = useState([]);
    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    // useEffect(() => {
    //     fetchListAllDentistsByDentist(name)
    // }, [name])
    //************************************************************************


    // ***********************************************************************
    //                                API Function

    // const fetchListAllDentistsByDentist = async (name) => {
    //     try {
    //         const APIListDentists = await DoListAllDentistByDentist(name);
    //         if (APIListDentists.status === 200) {
    //             const GetDataListDentists = APIListDentists?.data || [];
    //             setListDentists(GetDataListDentists);
    //         }
    //     } catch (error) {
    //         console.log("Lỗi Get Danh sách Dentist: ", error)
    //     }
    // }
    //************************************************************************


    // ***********************************************************************
    //                                other Function

    //************************************************************************

    return (

        <>
            {/* Header */}
            <div>
                <Title level={2}>Tạo lịch điều trị</Title>
            </div>
            <div className="container mx-auto px-4 mt-4">


                {/* Chọn Bệnh nhân */}
                <Form
                    form={form}
                    layout="vertical"
                    autoComplete="true"

                    style={{
                        display: 'grid',
                        placeItems: 'center'
                    }}
                >
                    <Card style={{ width: 600 }}>

                        {/* Chọn Nha sĩ */}
                        <Form.Item
                            label="Nha sĩ"
                            name="full_name"
                            rules={[{ required: true, message: 'Vui lòng chọn nha sĩ' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Bệnh nhân"
                            name="full_name"
                            rules={[{ required: true, message: 'Vui lòng chọn bệnh nhân' }]}
                        >
                            <Select
                                showSearch
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Jack',
                                    },
                                    {
                                        value: '2',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: '3',
                                        label: 'Tom',
                                    },
                                ]}
                            />
                        </Form.Item>

                        {/* Chọn thời gian bắt đầu */}
                        <Form.Item
                            label="Ngày bắt đầu"
                            name="start_time"
                            rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}
                        >
                            <DatePicker
                                style={{ width: 200 }}
                                format="YYYY-MM-DD"
                                placeholder='YYYY-MM-DD'
                            />
                        </Form.Item>

                        {/* Chọn thời gian kết thúc */}
                        <Form.Item
                            label="Ngày kết thúc"
                            name="end_time"
                            rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}
                        >
                            <DatePicker
                                style={{ width: 200 }}
                                format="YYYY-MM-DD"
                                placeholder='YYYY-MM-DD'
                            />
                        </Form.Item>

                        {/* Chọn loại hình dịch vụ */}
                        <Form.Item
                            label="Loại hình dịch vụ"
                            name="specialty_id"
                            rules={[{ required: true, message: 'Vui lòng chọn loại hình dịch vụ' }]}
                        >
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

                        {/* Chọn số lần sử dụng dịch vụ*/}
                        <Form.Item
                            label="Số lần sử dụng dịch vụ"
                            name="payment_id"
                            rules={[{ required: true, message: 'Vui lòng chọn số lần sử dụng dịch vụ' }]}
                        >
                            <Select
                                style={{ width: 400 }}
                                options={[
                                    {
                                        value: 'cleaning',
                                        label: 'Tiền mặt',
                                    },
                                    {
                                        value: 'whitening',
                                        label: 'Ngân hàng',
                                    },
                                ]}
                            />
                        </Form.Item>

                        {/* Chọn phòng*/}
                        <Form.Item
                            label="Phòng"
                            name="room_id"
                            rules={[{ required: true, message: 'Vui lòng chọn phòng' }]}
                        >
                            <Select
                                style={{ width: 400 }}
                                options={[
                                    {
                                        value: 'cleaning',
                                        label: 'Tiền mặt',
                                    },
                                    {
                                        value: 'whitening',
                                        label: 'Ngân hàng',
                                    },
                                ]}
                            />
                        </Form.Item>

                        {/* Chọn thanh toán*/}
                        <Form.Item
                            label="Hình thức thanh toán"
                            name="payment_id"
                            rules={[{ required: true, message: 'Vui lòng chọn hình thức thanh toán' }]}
                        >
                            <Select
                                style={{ width: 400 }}
                                options={[
                                    {
                                        value: 'cleaning',
                                        label: 'Tiền mặt',
                                    },
                                    {
                                        value: 'whitening',
                                        label: 'Ngân hàng',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Đặt lịch hẹn
                            </Button>
                        </Form.Item>
                    </Card>
                </Form>
            </div>
        </>
    );
};

export default AddNewTreatmentScheule;
