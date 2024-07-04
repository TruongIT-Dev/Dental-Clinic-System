import { Table, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { DoViewAllExaminationByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
import 'moment-timezone'; 
import moment from 'moment';



const Examination = () => {


    // *****************************************
    // ------------- Variables -----------------

    const { Search } = Input;
    const { Title } = Typography;

    // *****************************************

    // *****************************************
    // ------------- useState ------------------
    const [allExamination, setAllExamination] = useState([]);
    // console.log("allExamination", allExamination)
    // *****************************************


    // *****************************************
    // ------------- API Function --------------
    const fetchAllExaminationByAdmin = async () => {

        try {
            const APIAllExamination = await DoViewAllExaminationByAdmin();
            // console.log("APIAllExamination", APIAllExamination)
            if (!APIAllExamination) {
                // console.log("API Examination: NO DATA");
                return;
            }

            if (APIAllExamination.status === 200) {
                const GetDataAllExamination = APIAllExamination?.data || [];
                // console.log("GetDataAllExamination", GetDataAllExamination)
                setAllExamination(GetDataAllExamination);
            }

        } catch (error) {
            console.log(error);
        }
    }

    // *****************************************


    // *****************************************
    // ------------- useEffect -----------------

    useEffect(() => {
        fetchAllExaminationByAdmin();
    }, [])

    // *****************************************



    // *****************************************
    // ------------- Other Funtion -------------


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // const toVietnamTime = (timeString) => {
    //     const date = new Date(timeString);
    //     const options = {
    //         timeZone: 'Asia/Ho_Chi_Minh',
    //         hour12: false,
    //         year: 'numeric',
    //         month: '2-digit',
    //         day: '2-digit',
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         second: '2-digit',
    //     };
    //     return date.toLocaleString('en-US', options);
    // };


    // // Assuming toVietnamTime function exists and formats the datetime string
    // const extractTime = (datetime) => {
    //     // Extract the time from the datetime string
    //     return datetime.split(', ')[1];
    // };
    
    
    const extractTime = (utcTime) => {
        // Parse the UTC time with Moment.js and extract the time part
        const timePart = moment.utc(utcTime).format('HH:mm:ss'); // Format only hours, minutes, and seconds

        return timePart;
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'schedule_id',
            key: 'schedule_id',
        },
        {
            title: 'Tên nha sĩ',
            dataIndex: 'dentist_name',
            key: 'dentist_name',
        },
        {
            title: 'Phòng',
            dataIndex: 'room_name',
            key: 'room_name',
        },
        {
            title: 'Loại',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Thời gian',
            children: [
                {
                    title: 'Ngày',
                    dataIndex: 'start_time',
                    key: 'start_time',
                    width: 150,
                    render: (text) => (
                        formatDate(text)
                    )
                },
                {
                    title: 'Slot',
                    children: [
                        {
                            title: 'Từ',
                            dataIndex: 'start_time',
                            key: 'start_time',
                            width: 150,
                            render: (text) => (
                                // extractTime(convertToVietnamTime(text))
                                extractTime(text)
                            )
                        },
                        {
                            title: 'Đến',
                            dataIndex: 'end_time',
                            key: 'end_time',
                            width: 150,
                            render: (text) => (
                                // extractTime(convertToVietnamTime(text))
                                extractTime(text)
                            )
                        },
                    ]
                },
            ]
        },
        {
            title: 'Số bệnh nhân đăng ký',
            dataIndex: 'appointment_count',
            key: 'appointment_count',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <Button type='primary' ghost>Cập nhật</Button>
        //         </Space>
        //     ),
        // },
    ];

    // *****************************************
    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách lịch khám</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="Nhập lịch khám"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                />
                <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#1677FF' }}
                >
                    <Link to='/admin/tao-lich-kham' style={{ textDecoration: 'none' }}>Tạo lịch khám</Link>
                </Button>
            </div>
            <br></br>

            <Table columns={columns} dataSource={allExamination} />

        </>
    )
}

export default Examination;