// Thư viện
import { Button, Form, Select, DatePicker, notification } from 'antd';
import { DoAppointment, DoListSchedule, DoViewCategory } from '../../apis/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            span: 15,
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
    const [dentistSchedule, setDentistSchedule] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);

    // const [getIdCategory, setGetIdCategory] = useState('');

    // ******************** FETCH API *************************
    // API Hiện Lịch Khám của Dentist
    const ListScheduleExamination = async (date) => {
        if (!date) {
            return (null);
        }
        if (date) {
            try {
                const fetchListSchedule = await DoListSchedule(date);
                const getDataDentistSchedule = fetchListSchedule?.data || {};
                setDentistSchedule(getDataDentistSchedule);
                // console.log("dentistSchedule", getDataDentistSchedule)
            } catch (error) {
                return (error);
            }
        }
    }
    useEffect(() => {
        ListScheduleExamination(getDate);
    }, [getDate])


    // API Hiện Options Danh sách các Dịch vụ
    const fetchCategory = async () => {
        try {
            const res = await DoViewCategory();
            const APICategory = res?.data || [];
            // const adjustedCategory = APICategory.map((category, index) => ({
            //     ...category,
            //     id: index + 1,
            // }));
            // setDataCategory(adjustedCategory);
            setDataCategory(APICategory);
            // console.log('Data Category: ', APICategory);
        } catch (error) {
            return (error)
        }
    }
    useEffect(() => {
        fetchCategory();
    }, [])

    // ******************** FORM ******************************
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    // Submit Form - API Submit Form
    const onFinish = async (values) => {

        const { examination_schedule_id, service_category_id } = values;
        console.log('Check Form data: ', values);
        try {
            const doAppointment = await DoAppointment(examination_schedule_id, service_category_id);

            if (doAppointment.status === 201) {
                navigate('/dat-lich-hen');
                notification.success({
                    type: 'success',
                    message: 'Đặt lịch khám thành công',
                })
            }
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
    }

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


    // Danh sách Options các Dịch Vụ
    const categoryOptions = dataCategory.map((data) => (
        {
            label: data.name,
            value: data.id,
        }
    ))

    // Danh Sách các Schedule của Nha sĩ
    const dentistScheduleOptions = dentistSchedule.map((data) => (
        {
            // label: 'Thông tin phòng khám',
            // // title: data.room_name,
            // options: [
            //     {
            //         label:
            //             [
            //                 `Nha sĩ ${data.dentist_name} | `,
            //                 `Phòng ${data.room_name} | `,
            //                 `${extractTime(toVietnamTime(data.start_time))} - `,
            //                 `${extractTime(toVietnamTime(data.end_time))}.`,
            //             ].join(''),
            //         value: data.schedule_id,
            //     },
            // ],
            label:
                [
                    `Nha sĩ ${data.dentist_name} | `,
                    `Phòng ${data.room_name} | `,
                    `${extractTime(toVietnamTime(data.start_time))} - `,
                    `${extractTime(toVietnamTime(data.end_time))}.`,
                ].join(''),
            value: data.schedule_id,
        }
    ))
    // console.log("List of dentistSchedule: ", dentistSchedule)

    const handleDateChange = (date, dateString) => {
        console.log('Selected Date:', dateString);
        setGetDate(dateString);
    };

    const handleDentistScheduleChange = (value) => {
        console.log(`selected dentist schedule ${value}`);
    };

    const handleCategoryChange = (value) => {
        console.log(`selected category ${value}`);
    };

    return (
        <>
            {/* Form Inout */}
            <Form
                name="basic"
                form={form}
                {...formItemLayout}
                style={{
                    minWidth: '600px'
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{ service_category_id: undefined }}
            >

                {/* Chọn ngày khám */}
                <Form.Item
                    label="Chọn ngày khám"
                    rules={[
                        {
                            required: true,
                            message:'Vui lòng chọn ngày'
                        },
                    ]}
                >
                    <div className='d-flex flex-start' style={{ width: '100%' }}>
                        <DatePicker
                            placeholder='YYYY-MM-DD'
                            format="YYYY-MM-DD"
                            onChange={handleDateChange}
                        // disabledDate={disabledDate}
                        />
                    </div>
                </Form.Item>


                {/* Chọn phòng và giờ khám */}
                <Form.Item
                    name="examination_schedule_id"
                    label="Chọn phòng và giờ khám"
                    rules={[
                        {
                            required: true,
                            message:'Vui lòng chọn phòng và giờ khám'
                        },
                    ]}
                >
                    <Select
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        options={dentistScheduleOptions}
                        onChange={handleDentistScheduleChange}
                    />
                </Form.Item>

                {/* Chọn loại hình dịch vụ */}
                <Form.Item
                    name="service_category_id"
                    label="Loại hình dịch vụ quan tâm"
                    rules={[
                        {
                            required: true,
                            message:'Vui lòng chọn loại hình dịch vụ'
                        },
                    ]}
                >
                    <Select
                        placeholder="Chọn dịch vụ"
                        allowClear
                        style={{ width: '100%' }}
                        options={categoryOptions}
                        onChange={handleCategoryChange}
                    />
                </Form.Item>

                <Form.Item>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <SubmitButton form={form}>Đặt Lịch Hẹn</SubmitButton>
                    </div>
                </Form.Item>
            </Form >
        </>
    )
}

export default FormAppoinment