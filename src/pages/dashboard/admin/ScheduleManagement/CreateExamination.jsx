import { Button, Card, Form, Select, Typography, DatePicker, notification, Space } from 'antd';
import { DoAddNewExaminationByAdmin, DoListAllDentistByAdmin, DoListAllRoomByAdmin } from '../../../../apis/api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment-timezone';

const CreateExamination = () => {

    // *****************************************
    // ------------- Variables -----------------

    const { Title } = Typography;
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const vietnamTimezone = 'Asia/Ho_Chi_Minh';
    // *****************************************


    // *****************************************
    // ------------- useState ------------------

    const [allDentist, setAllDentist] = useState([]);
    const [allRoom, setAllRoom] = useState([]);
    const [startTime, setStartTime] = useState(null);
    // *****************************************


    // *****************************************
    // ------------- API Function --------------

    // API Đặt 1 Lịch khám
    const onFinish = async (values) => {
        console.log('Success:', values);

        // const startTime = values.start_time;
        // const endTime = values.end_time;

        // values.start_time = dayjs(values.start_time).format('YYYY-MM-DDTHH:mm:ss[Z]');
        // values.end_time = dayjs(values.end_time).format('YYYY-MM-DDTHH:mm:ss[Z]');

        const { dentist_id, room_id, start_time, end_time } = values;

        try {
            const APIAddNewExaminationByAdmin = await DoAddNewExaminationByAdmin(dentist_id, room_id, start_time, end_time);
            // console.log("APIAddNewExaminationByAdmin", APIAddNewExaminationByAdmin)
            switch (APIAddNewExaminationByAdmin.status) {
                case 201:
                    notification.success({
                        message: 'Thêm thành công',
                        duration: 2,
                    });
                    navigate('/admin/quan-ly-lich-kham');
                    break;
            }
        } catch (error) {
            console.log("Error add new Examination: ", error);
            const isError = error.response.data.error;
            if (isError.includes("schedule overlaps with other schedules")) {
                notification.error({
                    message: 'Tạo lịch khám thất bại',
                    description: 'Trùng thời gian với lịch khác',
                    duration: 2,
                });
            }
        }
    };

    // Lấy Danh sách các Nha sĩ
    const fetchAllDentistByAdmin = async () => {
        try {

            const APIAllDentist = await DoListAllDentistByAdmin();
            // console.log("APIAllDentist", APIAllDentist)
            if (!APIAllDentist) {
                return;
            }

            if (APIAllDentist.status === 200) {
                const GetDataAllDentist = APIAllDentist?.data || [];
                setAllDentist(GetDataAllDentist)
            }

        } catch (error) {
            console.log('Error list all Dentist: ', error);
        }
    }

    // Lấy Danh sách các Phòng khám
    const fetchAllRoomByAdmin = async () => {

        try {

            const APIRoom = await DoListAllRoomByAdmin();
            // console.log("APIAllDentist", APIAllDentist)
            if (!APIRoom) {
                return;
            }

            if (APIRoom.status === 200) {
                const GetDataAllRoom = APIRoom?.data || [];
                setAllRoom(GetDataAllRoom)
            }

        } catch (error) {
            console.log('Error list all romm: ', error);
        }
    }

    // *****************************************




    // *****************************************
    // ------------- useEffect -----------------

    useEffect(() => {
        fetchAllDentistByAdmin();
    }, [])

    useEffect(() => {
        fetchAllRoomByAdmin();
    }, [])

    // *****************************************




    // *****************************************
    // ------------- Others Function -----------

    // *****************************************

    // Submit undisable khi chọn hết field
    const SubmitButton = ({ form, children }) => {
        const [submittable, setSubmittable] = React.useState(false);

        // Watch all values
        const values = Form.useWatch([], form);
        React.useEffect(() => {
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

    // Date
    const handleDateChange = (value) => {
        if (value) {
            // Convert the selected date to Vietnam timezone
            const vietnamTime = value.tz(vietnamTimezone);
            setStartTime(vietnamTime);
        } else {
            setStartTime(null);
        }
    };

    // Options Danh sách các Nha sĩ
    const OptionsDentistList = allDentist.map((data) => (
        {
            label: data.full_name,
            value: data.id,
        }
    ))

    // Options Danh sách các Phòng khám
    const OptionsRoomList = allRoom.map((data) => (
        {
            label: data.name,
            value: data.id,
        }
    ))

    return (
        <>
            <div>
                {/* Header */}
                <div>
                    <Title level={2}>Tạo lịch khám tổng quát</Title>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                    <Card style={{ width: '80%' }}>
                        <Form
                            name="basic"
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
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Chọn nha sĩ"
                                name="dentist_id"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn nha sĩ'
                                    },
                                ]}
                            >
                                <Select
                                    options={OptionsDentistList}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Chọn phòng"
                                name="room_id"

                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn phòng'
                                    },
                                ]}
                            >
                                <Select
                                    options={OptionsRoomList}

                                />
                            </Form.Item>

                            <Form.Item
                                label="Chọn thời gian bắt đầu"
                                name="start_time"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn thời gian'
                                    },
                                ]}
                            >
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"
                                    onChange={handleDateChange}
                                    value={startTime ? moment(startTime) : null}
                                />
                            </Form.Item>


                            <Form.Item
                                label="Chọn thời gian kết thúc"
                                name="end_time"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn thời gian'
                                    },
                                ]}
                            >
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Space>
                                    <SubmitButton form={form}>Đặt lịch khám</SubmitButton>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default CreateExamination