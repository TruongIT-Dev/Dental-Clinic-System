// Thư viện
import { Button, Form, Select, DatePicker, Input, notification, Radio } from 'antd';
import { DoAppointment, DoListPayment, DoListScheduleExamination, DoViewCategory } from '../../apis/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

// Function Disabled những ngày sau ngày hôm nay
// const disabledDate = (current) => {
//     const today = moment().startOf('day'); // Start of today (00:00:00)
//     const endOfMonth = moment().endOf('month'); // End of the current month (23:59:59)
//     return current && (current < today || current > endOfMonth);
// };

// *********************** FUNCTION ****************************
// *************************************************************
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

// Disable Button
const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            {children}
        </Button>
    );
};

// *********************** MAIN FUNCTION ***********************
// *************************************************************
const FormAppoinment = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    // *********************** UseState ***********************
    const [getDate, setGetDate] = useState('');
    const [getIdCategory, setGetIdCategory] = useState('');
    const [dentistSchedule, setDentistSchedule] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState([]);
    // console.log('Date: ', getDate)
    // console.log('Id Category: ', getIdCategory);



    // ******************** FETCH API *************************
    // API Hiện Lịch Khám của Dentist
    const ListScheduleExamination = async (date, category_id) => {
        if (!date && !category_id) {
            return (null);
        }
        if (date && category_id) {
            try {
                const fetchListScheduleExamination = await DoListScheduleExamination(date, category_id);
                const getDataDentistSchedule = fetchListScheduleExamination?.data || [];
                // console.log('Display Fetch List Schedule: ', getDataDentistSchedule);
                setDentistSchedule(getDataDentistSchedule);
            } catch (error) {
                return (error);
            }
        }
    }
    useEffect(() => {
        ListScheduleExamination(getDate, getIdCategory);
    }, [getDate, getIdCategory])


    // API Hiện Options Danh sách các Dịch vụ
    const fetchCategory = async () => {
        try {
            const res = await DoViewCategory();
            const APICategory = res?.data || [];
            const adjustedCategory = APICategory.map((category, index) => ({
                ...category,
                id: index + 1,
            }));
            setDataCategory(adjustedCategory);
            // console.log('Data Category: ', adjustedCategory);
        } catch (error) {
            return (error)
        }
    }
    useEffect(() => {
        fetchCategory();
    }, [])

    // API Hiện Options Danh sách các Hình thức thanh toán
    const fetchPayment = async () => {
        try {
            const res = await DoListPayment();
            const APIPayment = res?.data || [];
            setSelectedPayment(APIPayment);
            // console.log('Payment I Have: ', APIPayment);
        } catch (error) {
            console.log('Payment Error: ', error)
        }
    }
    useEffect(() => {
        fetchPayment();
    }, []);

    // ******************** FORM ******************************
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = async (values) => {
        const { examination_schedule_id, patient_note, payment_id } = values;
        console.log('Check Form data: ', values);
        try {
            const doAppointment = await DoAppointment(examination_schedule_id, patient_note, payment_id);
            console.log('doAppointment API: ', doAppointment);
            if (doAppointment.status === 201) {
                navigate('/');
                notification.success({
                    type: 'success',
                    message: 'Đặt lịch khám thành công',
                })
            }
            console.log('Check Form data: ', values);
        } catch (error) {
            console.log(error);
            // Check the error response status code and show corresponding notifications
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        notification.error({
                            message: 'Đăng ký lịch khám thất bại',
                            description: '400 Bad Request',
                            duration: 5,
                        });
                        break;
                    case 500:
                        notification.error({
                            message: 'Đăng ký lịch khám thất bại',
                            description: '500 Internal Server Error',
                            duration: 5,
                        });
                        break;
                    default:
                        notification.error({
                            message: 'Đăng ký thất bại',
                            description: error.response.data.errors || 'Lỗi không xác định',
                            duration: 5,
                        });
                }
            } else {
                // Handle network errors or other issues that don't have a response
                notification.error({
                    message: 'Đăng ký lịch khám thất bại',
                    description: 'Có lỗi xảy ra. Xin kiểm tra lại thiết bị kết nối mạng',
                    duration: 5,
                });
            }
        }

        // console.log('Check Form data: ', values);
    }

    // Danh sách Options các Dịch Vụ
    const categoryOptions = dataCategory.map((data) => (
        {
            value: data.id,
            label: data.name,
        }
    ))

    const toVietnamTime = (timeString) => {
        const date = new Date(timeString);
        const options = {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        return date.toLocaleString('en-US', options);
    };

    // Assuming toVietnamTime function exists and formats the datetime string
    const extractTime = (datetime) => {
        // Extract the time from the datetime string
        return datetime.split(', ')[1];
    };


    // Danh Sách các Schedule của Nha sĩ
    const dentistScheduleOptions = dentistSchedule.map((data) => (
        {
            label: 'Thông tin phòng khám',
            // title: data.room_name,
            options: [
                {
                    label:
                        [
                            `Nha sĩ ${data.dentist_name} | `,
                            `Phòng ${data.room_name} | `,
                            `${extractTime(toVietnamTime(data.start_time))} - `,
                            `${extractTime(toVietnamTime(data.end_time))}.`,
                        ].join(''),
                    value: data.schedule_id,
                },
            ],
        }
    ))

    const handleDateChange = (date, dateString) => {
        console.log('Selected Date:', dateString);
        setGetDate(dateString);
    };

    const handlePayment = (value) => {
        console.log('Click Payment:', value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };

    const handleDentistScheduleChange = (value) => {
        console.log(`selected dentist schedule ${value}`);
    };

    return (
        <>
            {/* Form Inout */}
            <Form
                form={form}
                {...formItemLayout}
                name="basic"
                style={{
                    minWidth: '600px'
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                {/* Chọn ngày khám */}
                <Form.Item
                    label="Chọn ngày khám"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <div className='d-flex flex-start' style={{ width: '100%' }}>
                        <DatePicker
                            placeholder='YYYY-MM-DD'
                            format="YYYY-MM-DD"
                            // disabledDate={disabledDate}
                            onChange={handleDateChange}
                        />
                    </div>
                </Form.Item>


                {/* Chọn loại hình dịch vụ */}
                <Form.Item
                    label="Chọn dịch vụ"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <div className='d-flex flex-start' style={{ width: '100%' }}>
                        <>
                            <Select
                                style={{ width: '70%' }}
                                onChange={
                                    (e) => {
                                        const selectedIndex = e - 1; // Subtract 1 from the index
                                        if (selectedIndex >= 0 && selectedIndex < categoryOptions.length) {
                                            console.log('Select Category:', categoryOptions[selectedIndex].value);
                                            setGetIdCategory(categoryOptions[selectedIndex].value);
                                        }
                                    }
                                }
                                placeholder="Chọn dịch vụ"
                                options={categoryOptions}
                            />
                        </>
                    </div>
                </Form.Item>

                {/* Chọn bác sĩ */}
                <Form.Item
                    label="Chọn phòng và giờ khám"
                    name="examination_schedule_id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        onChange={handleDentistScheduleChange}
                        options={dentistScheduleOptions}
                    />
                </Form.Item>

                {/* Lý do đi khám răng */}
                <Form.Item
                    label="Lý do đặt khám"
                    name="patient_note"
                >
                    <div className='d-flex flex-start' style={{ width: '100%' }}>
                        <TextArea rows={2} />
                    </div>
                </Form.Item>

                {/* Phương thức thanh toán */}
                <Form.Item
                    label="Phương thức thanh toán"
                    name="payment_id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group style={{ display: 'flex', justifyContent: 'flex-start' }} >
                        {selectedPayment.map((data, index) => (
                            <Radio.Button onClick={handlePayment} key={index.id} value={data.id}>{data.name}</Radio.Button>
                        ))}
                    </Radio.Group>
                </Form.Item>


                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <SubmitButton form={form}>Đặt Lịch Hẹn</SubmitButton>
                    </div>
                </Form.Item>
            </Form>
        </>
    )
}

export default FormAppoinment