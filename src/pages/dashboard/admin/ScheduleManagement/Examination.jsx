import { Table, Input, Button, Typography, Space, Modal, Tabs, Descriptions, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { DoViewAllExaminationByAdmin, DoViewPatientOfAExaminationScheduleByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
import 'moment-timezone';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale('vi');
// Extend Dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);


const Examination = () => {


    // *****************************************
    // ------------- Variables -----------------

    const { Search } = Input;
    const { Title } = Typography;
    const { RangePicker } = DatePicker;

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
    // Filter theo Ngày
    const [filteredInfo, setFilteredInfo] = useState({});
    // *****************************************


    // *****************************************
    // ------------- API Function --------------

    // Liệt kê Tất cả Lịch khám
    const fetchAllExaminationByAdmin = async () => {
        try {
            const APIAllExamination = await DoViewAllExaminationByAdmin();
            // console.log("APIAllExamination", APIAllExamination)
            if (!APIAllExamination) {
                return;
            }
            if (APIAllExamination.status === 200) {
                const GetDataAllExamination = APIAllExamination?.data || [];
                const GetDataAndTimeRange = GetDataAllExamination.map((item) => ({
                    ...item,
                    time_range: {
                        start_time: item.start_time,
                        end_time: item.end_time,
                    },
                    patient_count: {
                        current_patients: item.current_patients,
                        max_patients: item.max_patients,
                    }
                }))
                console.log("GetDataAllExamination", GetDataAllExamination)
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
        return `${day}/${month}/${year}`;
    };


    const extractTime = (utcTime) => {
        const vietnamTime = dayjs(utcTime).tz('Asia/Ho_Chi_Minh');
        return vietnamTime.local().format('HH:mm:ssZ');
    };

    const columns = [
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
            ),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <RangePicker
                        value={selectedKeys[0] ? [dayjs(selectedKeys[0][0]), dayjs(selectedKeys[0][1])] : []}
                        onChange={(dates) => setSelectedKeys(dates ? [[dates[0].toISOString(), dates[1].toISOString()]] : [])}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => confirm()}
                            size="small"
                            style={{ width: 90 }}
                        >
                            OK
                        </Button>
                        <Button
                            onClick={() => clearFilters()}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Reset
                        </Button>
                    </Space>
                </div>
            ),
            onFilter: (value, record) => {
                if (!value[0]) return true;
                const recordDate = dayjs(record.start_time).startOf('day');
                const [start, end] = value.map(v => dayjs(v).startOf('day'));
                return recordDate.isBetween(start, end, null, '[]');
            },
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
            dataIndex: 'patient_count',
            key: 'patient_count',
            render: (text, record) => (
                `${record.current_patients} / ${record.max_patients}`
            )
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type='primary'
                        ghost
                        disabled={record.current_patients < 1}
                        onClick={() => {
                            if (record.current_patients >= 1) {
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
                {/* <Descriptions.Item label="Họ và Tên">{data.full_name}</Descriptions.Item> */}
                <Descriptions.Item label="Giới tính">{data.gender}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{data.phone_number}</Descriptions.Item>
                <Descriptions.Item label="Loại hình dịch vụ">{data.service_category}</Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">{formatDate(data.date_of_birth)}</Descriptions.Item>
            </Descriptions>
        ),
    }));



    // Counte STT pagination
    const handleTableChange = (pagination, filters, sorter) => {
        setPagination(pagination);
        setFilteredInfo(filters);
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