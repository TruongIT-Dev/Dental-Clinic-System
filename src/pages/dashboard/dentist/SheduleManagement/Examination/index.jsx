import { Button, DatePicker, Descriptions, Empty, Input, Modal, Select, Space, Table, Tabs, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { DoListExaminationScheduleByDentist, DoListTreatmentScheduleByDentist, DoViewPatientOfAExaminationScheduleByAdmin } from '../../../../../apis/api'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import dayjs from 'dayjs';


const DentistExaminationtManagement = () => {
    // ***********************************************************************
    //                                Variables

    const { Title } = Typography;
    const { Search } = Input;
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    const userInfo = useSelector(state => state?.account?.user?.user?.user_info);
    //************************************************************************


    // ***********************************************************************
    //                                useState

    const [listExamination, setListExamination] = useState([]);
    const [loadingModalViewPatients, setLoadingModalViewPatients] = useState(true)
    // console.log(listTreatment)
    const [patientsInfo, setPatientsInfo] = useState([])
    const [modalViewPatients, setModalViewPatients] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    useEffect(() => {
        fetchListExaminationScheduleByDentist(userInfo.id)
    }, [userInfo.id])
    //************************************************************************


    // ***********************************************************************
    //                                API Function
    const fetchListExaminationScheduleByDentist = async (id) => {
        try {
            const APIListExamination = await DoListExaminationScheduleByDentist(id);
            if (APIListExamination.status === 200) {
                const GetDataListExamination = APIListExamination?.data || [];
                const GetDataAndTimeRange = GetDataListExamination.map((item) => ({
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
                setListExamination(GetDataAndTimeRange);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // View Chi tiết Các Bệnh Nhân của 1 Lịch khám
    const fetchViewPatientsOfASchedule = async (id) => {
        try {
            const APIViewPatientsOfASchedule = await DoViewPatientOfAExaminationScheduleByAdmin(id);
            // console.log("APIViewPatientsOfASchedule", APIViewPatientsOfASchedule)
            // Lấy thành công
            const GetDataPatientsInfo = APIViewPatientsOfASchedule?.data || [];
            // console.log("GetDataPatientsInfo", GetDataPatientsInfo)
            setPatientsInfo(GetDataPatientsInfo);
            // console.log("patientsInfo: ", patientsInfo);
        } catch (error) {
            console.log(error)
        }
    }
    //************************************************************************


    // ***********************************************************************
    //                                other Function

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    const showPatientsModal = () => {
        setModalViewPatients(true)
        setLoadingModalViewPatients(true);
    }

    const extractTime = (timestamp) => {

        // Moment
        // Define the Vietnam timezone
        const vietnamTimezone = 'Asia/Ho_Chi_Minh';
        // Convert the timestamp to the Vietnam timezone
        const vietnamTime = moment.tz(timestamp, vietnamTimezone);
        return vietnamTime.format('HH:mm');

        // DayJS
        // const vietnamTime = dayjs(utcTime).tz('Asia/Ho_Chi_Minh');
        // return vietnamTime.local("vi", vi).format('HH:mm');
    };
    //************************************************************************

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
                <Descriptions.Item label="Loại hình dịch vụ quan tâm">{data.service_category === null ? 'Không có' : data.service_category}</Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">{formatDate(data.date_of_birth)}</Descriptions.Item>
            </Descriptions>
        ),
    }));


    const columns = [
        {
            title: 'No.',
            key: 'index',
            render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
        },
        // {
        //     title: 'Tên nha sĩ',
        //     dataIndex: 'dentist_name',
        //     key: 'dentist_name',
        // },
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
                            Chọn
                        </Button>
                        <Button
                            onClick={() => clearFilters()}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Hoàn tác
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
            title: 'Phòng',
            dataIndex: 'room_name',
            key: 'room_name',
        },
        {
            title: 'Thời gian',
            dataIndex: 'time_range',
            key: 'time_range',
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
            align: 'center',  // This will center the conten
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
                        Xem bệnh nhân
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách lịch khám</Title>
            </div>

            {/* Top-Bar Btn*/}
            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="Nhập tên bệnh nhân"
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
                    <Link to='/dentist/tao-lich-dieu-tri' style={{ textDecoration: 'none' }}>Tạo lịch điều trị   </Link>
                </Button>
            </div> */}

            <Table columns={columns} dataSource={listExamination}
                pagination={listExamination.length >= 5 ? { pageSize: 5 } : false}
                locale={{ emptyText: <Empty description='Không có dữ liệu' /> }}
            />
            {/* Modal View Patients của 1 Lịch Khám */}
            <Modal
                title={<p>Thông tin chi tiết lịch khám</p>}
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
};
export default DentistExaminationtManagement;