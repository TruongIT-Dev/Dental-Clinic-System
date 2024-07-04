import { Button, Card, Form, Select, Typography, DatePicker, notification } from 'antd';
import { DoAddNewExaminationByAdmin, DoListAllDentistByAdmin, DoListAllRoomByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';


const CreateExamination = () => {

    // *****************************************
    // ------------- Variables -----------------

    const { Title } = Typography;
    const navigate = useNavigate();

    // *****************************************


    // *****************************************
    // ------------- useState ------------------

    const [allDentist, setAllDentist] = useState([]);
    const [allRoom, setAllRoom] = useState([]);

    // *****************************************


    // *****************************************
    // ------------- API Function --------------

    const onFinish = async (values) => {
        console.log('Success:', values);

        // const startTime = values.start_time;
        // const endTime = values.end_time;

        values.start_time = dayjs(values.start_time).format('YYYY-MM-DDTHH:mm:ss[Z]');
        values.end_time = dayjs(values.end_time).format('YYYY-MM-DDTHH:mm:ss[Z]');

        const { dentist_id, room_id, start_time, end_time } = values;

        try {
            const APIAddNewExaminationByAdmin = await DoAddNewExaminationByAdmin(dentist_id, room_id, start_time, end_time);
            console.log("APIAddNewExaminationByAdmin", APIAddNewExaminationByAdmin)

            switch (APIAddNewExaminationByAdmin.status) {
                case 201:
                    notification.success({
                        message: 'Thêm thành công',
                        duration: 2,
                    });
                    navigate('/admin/quan-ly-lich-kham');
                    break;

                default:
                    notification.error({
                        message: 'Thêm thất bại',
                        duration: 2,
                    });
                    break;
            }
        } catch (error) {
            console.log("Error add new Examination: ", error);
            notification.error({
                message: 'Thêm thất bại',
                duration: 2,
            });
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

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                    <Title level={2}>Tạo lịch khám</Title>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                    <Card style={{ width: '80%' }}>
                        <Form
                            name="basic"
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
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Nha sĩ"
                                name="dentist_id"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    options={OptionsDentistList}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Phòng số"
                                name="room_id"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    options={OptionsRoomList}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Thời gian bắt đầu"
                                name="start_time"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                            </Form.Item>


                            <Form.Item
                                label="Thời gian kết thúc"
                                name="end_time"
                                rules={[
                                    {
                                        required: true,
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
                                <Button type="primary" htmlType="submit">
                                    Thêm lịch khám
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default CreateExamination