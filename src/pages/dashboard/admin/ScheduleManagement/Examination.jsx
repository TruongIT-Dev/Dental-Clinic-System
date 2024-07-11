import { Table, Input, Button, Typography, Space, Modal, Tabs, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { DoViewAllExaminationByAdmin, DoViewPatientOfAExaminationScheduleByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
import 'moment-timezone';
import moment from 'moment';
import ModalViewPatients from './ModalViewPatients';



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
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    const [modalViewPatients, setModalViewPatients] = useState(false);
    const [loadingModalViewPatients, setLoadingModalViewPatients] = useState(true)
    const [patientsInfo, setPatientsInfo] = useState([])
    // *****************************************


    // *****************************************
    // ------------- API Function --------------

    // Liệt kê Tất cả Lịch khám
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
                const GetDataAndTimeRange = GetDataAllExamination.map((item) => ({
                    ...item,
                    time_range: {
                        start_time: item.start_time,
                        end_time: item.end_time,
                    }
                }))
                // console.log("GetDataAllExamination", GetDataAllExamination)
                setAllExamination(GetDataAndTimeRange);
            }

        } catch (error) {
            console.log(error);
        }
    }

    // View Chi tiết Các Bệnh Nhân của 1 Lịch khám
    const fetchViewPatientsOfASchedule = async (id) => {
        try {
            const APIViewPatientsOfASchedule = await DoViewPatientOfAExaminationScheduleByAdmin(id);
            console.log("APIViewPatientsOfASchedule", APIViewPatientsOfASchedule)
            // Lấy thành công
            const GetDataPatientsInfo = APIViewPatientsOfASchedule?.data || [];
            console.log("GetDataPatientsInfo", GetDataPatientsInfo)
            setPatientsInfo(GetDataPatientsInfo);
            console.log("patientsInfo: ", patientsInfo);
        } catch (error) {
            console.log(error)
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

    const showPatientsModal = () => {
        setModalViewPatients(true)
        setLoadingModalViewPatients(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoadingModalViewPatients(false);
        }, 2000);
    };


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    const extractTime = (utcTime) => {
        // Parse the UTC time with Moment.js and extract the time part
        const timePart = moment.utc(utcTime).format('HH:mm'); // Format only hours, minutes, and seconds

        return timePart;
    };

    const columns = [
        // {
        //     title: 'id',
        //     dataIndex: 'schedule_id',
        //     key: 'schedule_id',
        //     render: () => null // hide the content
        // },
        // {
        //     title: 'id',
        //     dataIndex: 'schedule_id',
        //     key: 'schedule_id',
        //     render: () => (
        //         <div style={{ display: 'none' }}></div>
        //     )
        // },
        {
            title: 'STT',
            key: 'index',
            render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
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
            title: 'Ngày',
            dataIndex: 'start_time',
            key: 'start_time',
            width: 150,
            render: (text) => (
                formatDate(text)
            )
        },
        {
            title: 'Thời gian',
            dataIndex: 'time_range',
            key: 'time_range',
            width: 300,
            render: (time_range) => (
                <span>
                    {extractTime(time_range.start_time)} - {extractTime(time_range.end_time)}
                </span>
            )
        },
        {
            title: 'Số bệnh nhân đăng ký',
            dataIndex: 'appointment_count',
            key: 'appointment_count',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type='primary'
                        ghost
                        disabled={record.appointment_count < 1}
                        onClick={() => {
                            if (record.appointment_count >= 1) {
                                showPatientsModal();
                                fetchViewPatientsOfASchedule(record.schedule_id);
                            }
                        }}
                    >
                        View bệnh nhân
                    </Button>
                </Space>
            ),
        },
    ];

    // Tabs Modal
    const renderPatientsInfo = patientsInfo.map((data, index) => ({
        key: data.id,
        label: data.full_name,
        children: (
            <Descriptions layout="vertical" key={index}>
                <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
                <Descriptions.Item label="Họ và Tên">{data.full_name}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{data.phone_number}</Descriptions.Item>
                <Descriptions.Item label="Giới tính">{data.gender}</Descriptions.Item>
                <Descriptions.Item label="Loại hình dịch vụ">{data.service_category}</Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">{formatDate(data.date_of_birth)}</Descriptions.Item>
            </Descriptions>
        ),
    }));



    // Counte STT pagination
    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };

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

            <Table columns={columns} dataSource={allExamination}
                pagination={allExamination.length >= 5 ? { pageSize: 5 } : false}
                onChange={handleTableChange}
            />

            {/* Modal View Patients của 1 Lịch Khám */}
            <Modal
                title={<p>Thông tin bệnh nhân</p>}
                loading={loadingModalViewPatients}
                open={modalViewPatients}
                onCancel={() => setModalViewPatients(false)}
                width={800}
                footer={[]}
            >
                <Tabs defaultActiveKey="1" items={renderPatientsInfo} />
            </Modal>
        </>
    )
}

export default Examination;