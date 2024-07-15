import {
    Button,
    Input,
    Form,
    Card,
    Select,
    Typography,
    DatePicker,
    InputNumber,
    notification,
} from "antd";
import { useSelector } from "react-redux";
import { DoCreateTreatmentScheduleByDentist, DoListCategoriesByDentist, DoListPatientsByDentist, DoListPaymentsByDentist, DoListRoomsByDentist, DoListServicesByDentist } from "../../../../../apis/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewTreatmentScheule = () => {

    // ***********************************************************************
    //                                Variables

    const { Title } = Typography;
    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const userInfo = useSelector(state => state?.account?.user?.user?.user_info);
    // console.log("userInfo:", userInfo)
    //************************************************************************


    // ***********************************************************************
    //                                useState

    const [listRooms, setListRooms] = useState([]);
    const [listPatients, setListPatients] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [listServices, setListServices] = useState([]);
    const [listPayements, setListPayments] = useState([]);
    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    // List Rooms
    useEffect(() => {
        fetchListRoomByDentist();
    }, [])

    // List Patients
    useEffect(() => {
        fetchListPatientsByDentist();
    }, [])

    // List Categories
    useEffect(() => {
        fetchListCateogriesByDentist();
    }, [])

    // List Services
    // useEffect(() => {
    //     fetchListServicesByDentist(listCategories.slug, name);
    // }, [listCategories.slug])

    // List Payemnts
    useEffect(() => {
        fetchListPaymentsByDentist();
    }, [])
    //************************************************************************


    // ***********************************************************************
    //                                API Function

    // API Đặt Lịch Điều Trị
    const onFinishForm = async (values) => {
        console.log("Submited sucess", values)
        const { dentist_id, end_time, patient_id, payment_id, room_id, service_id, service_quantity, start_time } = values;
        try {
            const APICreateTreatment = await DoCreateTreatmentScheduleByDentist(dentist_id, end_time, patient_id, payment_id, room_id, service_id, service_quantity, start_time)
            if (APICreateTreatment.status === 201) {
                notification.success({
                    message: 'Tạo lịch điều trị thành công.',
                    duration: 2.
                })
                navigate('/dentist/quan-ly-lich-dieu-tri');
            }
        } catch (error) {
            switch (error.response.status) {
                case 403:
                    notification.error({
                        message: 'Tạo lịch điều trị thất bại.',
                        description: 'Bị trùng với lịch hẹn khác.',
                        duration: 2
                    })
                    break;

                case 500:
                    notification.error({
                        message: 'Tạo lịch điều trị thất bại.',
                        description: 'Lỗi server',
                        duration: 2
                    })
                    break;

                default:
                    notification.error({
                        message: 'Tạo lịch điều trị thất bại.',
                        description: 'Lỗi không xác định.',
                        duration: 2
                    })
                    break;
            }
        }
    }

    // API List danh sách Bệnh Nhân
    const fetchListPatientsByDentist = async () => {
        try {
            const APIListPatients = await DoListPatientsByDentist();
            console.log("APIListPatients", APIListPatients)
            if (APIListPatients.status === 200) {
                const GetDataListPatients = APIListPatients?.data || [];
                setListPatients(GetDataListPatients)
            }
        } catch (error) {
            console.log("Lỗi List Patient: ", error)
        }
    }

    // API List danh sách Phòng
    const fetchListRoomByDentist = async () => {
        try {
            const APIListRooms = await DoListRoomsByDentist();
            // console.log("APIListRooms", APIListRooms)
            if (APIListRooms.status === 200) {
                const GetDataListRoom = APIListRooms?.data || [];
                setListRooms(GetDataListRoom);
            }
        } catch (error) {
            console.log("Lỗi List Rooms: ", error);
        }
    }

    // API List danh sách Loại Hình Dịch Vụ
    const fetchListCateogriesByDentist = async () => {
        try {
            const APIListCategories = await DoListCategoriesByDentist();
            if (APIListCategories.status === 200) {
                const GetDataListCategories = APIListCategories?.data || [];
                setListCategories(GetDataListCategories);
            }
        } catch (error) {
            console.log('Lỗi List Categories: ', error);
        }
    }

    // API List danh sách Dịch Vụ
    const fetchListServicesByDentist = async (slug) => {
        try {
            const APIListServices = await DoListServicesByDentist(slug);
            if (APIListServices.status === 200) {
                const GetDataListServices = APIListServices?.data || [];
                setListServices(GetDataListServices);
            }
        } catch (error) {
            console.log("Lỗi List Services: ", error);
        }
    }

    // API List danh sách Phương Thức Thanh Toán
    const fetchListPaymentsByDentist = async () => {
        try {
            const APIListPayments = await DoListPaymentsByDentist();
            if (APIListPayments.status === 200) {
                const GetDataListPayments = APIListPayments?.data || [];
                setListPayments(GetDataListPayments);
            }
        } catch (error) {
            console.log("Lỗi List Payments: ", error);
        }
    }
    //************************************************************************


    // ***********************************************************************
    //                                other Function

    // OPTIONS cho Bệnh nhân
    const OptionsPatients = listPatients.map((patient) => (
        {
            value: patient.id,
            label: patient.full_name,
        }
    ))

    // OPTIONS cho Loại hình dịch vụ
    const OptionsCategories = listCategories.map((categories) => (
        {
            value: categories.slug,
            label: categories.name,
        }
    ))

    // OPTIONS cho Dịch vụ
    const OptionsServices = listServices.map((service) => (
        {
            value: service.id,
            label: service.name,
        }
    ))

    // OPTIONS cho Phòng
    const OptionsRooms = listRooms.map((room) => (
        {
            value: room.id,
            label: room.name,
        }
    ))

    // OPTIONS cho Phương thức thanh toán
    const OptionsPayments = listPayements.map((payment) => (
        {
            value: payment.id,
            label: payment.name,
        }
    ))


    const handleGetSlugForService = (value) => {
        console.log("handleGetSlugForService", value)
        fetchListServicesByDentist(value);
    }

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
                    initialValues={{
                        dentist_id: userInfo.id,
                    }}
                    style={{
                        display: 'grid',
                        placeItems: 'center'
                    }}
                    onFinish={onFinishForm}
                >
                    <Card style={{ width: 600 }}>

                        {/* Chọn Nha sĩ */}
                        <Form.Item
                            label="Nha sĩ"
                            name="dentist_id"
                            rules={[{ required: true, message: 'Vui lòng chọn nha sĩ' }]}
                            style={{ display: 'none' }}
                        >
                            <Input disabled />
                        </Form.Item>

                        <Form.Item
                            label="Chọn bệnh nhân"
                            name="patient_id"
                            rules={[{ required: true, message: 'Vui lòng chọn bệnh nhân' }]}
                        >
                            <Select
                                style={{ width: 300 }}
                                showSearch
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={OptionsPatients}
                            />
                        </Form.Item>

                        {/* Chọn thời gian bắt đầu */}
                        <Form.Item
                            label="Chọn thời gian bắt đầu"
                            name="start_time"
                            rules={[{ required: true, message: 'Vui lòng chọn thời gian bắt đầu' }]}
                        >
                            <DatePicker
                                showTime
                                style={{ width: 200 }}
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder='chọn thời gian'
                            />
                        </Form.Item>

                        {/* Chọn thời gian kết thúc */}
                        <Form.Item
                            label="Chọn thời gian kết thúc"
                            name="end_time"
                            rules={[{ required: true, message: 'Vui lòng chọn thời gian kết thúc' }]}
                        >
                            <DatePicker
                                showTime
                                style={{ width: 200 }}
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder='chọn thời gian'
                            />
                        </Form.Item>

                        {/* Chọn Loại Hình Dịch Vụ */}
                        <Form.Item
                            label="Chọn loại hình dịch vụ"
                            rules={[{ required: true, message: 'Vui lòng chọn loại hình dịch vụ' }]}
                        >
                            <Select
                                style={{ width: 400 }}
                                options={OptionsCategories}
                                onChange={handleGetSlugForService}
                            />
                        </Form.Item>


                        {/* Chọn Dịch vụ */}
                        <Form.Item
                            label="Chọn dịch vụ điều trị"
                            name="service_id"
                            rules={[{ required: true, message: 'Vui lòng chọn dịch vụ điều trị' }]}
                        >
                            <Select
                                options={OptionsServices}
                            />
                        </Form.Item>

                        {/* Chọn số lần sử dụng dịch vụ*/}
                        <Form.Item
                            label="Số lần sử dụng dịch vụ"
                            name="service_quantity"
                            rules={[{ required: true, message: 'Vui lòng nhập số lần sử dụng dịch vụ' }]}
                        >
                            <InputNumber type="number" style={{ width: 200 }} />
                        </Form.Item>

                        {/* Chọn phòng*/}
                        <Form.Item
                            label="Chọn phòng"
                            name="room_id"
                            rules={[{ required: true, message: 'Vui lòng chọn phòng' }]}
                        >
                            <Select
                                style={{ width: 400 }}
                                options={OptionsRooms}
                            />
                        </Form.Item>

                        {/* Chọn thanh toán*/}
                        <Form.Item
                            label="Chọn hình thức thanh toán"
                            name="payment_id"
                            rules={[{ required: true, message: 'Vui lòng chọn hình thức thanh toán' }]}
                        >
                            <Select
                                style={{ width: 400 }}
                                options={OptionsPayments}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Tạo lịch điều trị
                            </Button>
                        </Form.Item>
                    </Card>
                </Form>
            </div>
        </>
    );
};

export default AddNewTreatmentScheule;
