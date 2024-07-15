import { Button, DatePicker, Descriptions, Empty, Input, Modal, Select, Space, Table, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { DoListTreatmentScheduleByDentist, DoViewPatientOfATreatmentScheduleByAdmin } from '../../../../../apis/api'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import dayjs from 'dayjs';


const DentistTreatmentManagement = () => {
    // ***********************************************************************
    //                                Variables

    const { Title } = Typography;
    const { Search } = Input;
    const { Option } = Select;
    const userInfo = useSelector(state => state?.account?.user?.user?.user_info);
    //************************************************************************


    // ***********************************************************************
    //                                useState

    const [listTreatment, setListTreatment] = useState([]);

    const [modalViewPatients, setModalViewPatients] = useState(false);
    const [loadingModalViewPatients, setLoadingModalViewPatients] = useState(true)
    // console.log(listTreatment)
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    });
    const { RangePicker } = DatePicker;

    const [patientsInfo, setPatientsInfo] = useState({})
    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    useEffect(() => {
        fetchListTreatmentScheduleByDentist(userInfo.id)
    }, [userInfo.id])
    //************************************************************************


    // ***********************************************************************
    //                                API Function
    const fetchListTreatmentScheduleByDentist = async (id) => {
        try {
            const APIListTreatment = await DoListTreatmentScheduleByDentist(id);
            if (APIListTreatment.status === 200) {
                const GetDataListTreatment = APIListTreatment?.data || [];
                const GetDataAndTimeRange = GetDataListTreatment.map((item) => ({
                    ...item,
                    time_range: {
                        start_time: item.start_time,
                        end_time: item.end_time,
                    },
                }))
                setListTreatment(GetDataAndTimeRange);
            }
        } catch (error) {
            console.log(error)
        }
    }


    // View Chi tiết Các Bệnh Nhân của 1 Lịch khám
    const fetchViewPatientsOfASchedule = async (id) => {
        try {
            const APIViewPatientsOfASchedule = await DoViewPatientOfATreatmentScheduleByAdmin(id);
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

    const columns = [
        {
            title: 'No.',
            key: 'index',
            render: (text, record, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
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
            title: 'Phòng',
            dataIndex: 'room_name',
            key: 'room_name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type='primary'
                        ghost
                        onClick={() => {
                            showPatientsModal();
                            fetchViewPatientsOfASchedule(record.schedule_id);
                        }}
                    >
                        Xem chi tiết
                    </Button>
                </Space>
            ),
        },
    ];

    const formatCurrency = (amount) => {
        // Check if amount is a number
        if (isNaN(amount)) {
            return "Invalid amount";
        }
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
    }

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách lịch điều trị</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* <Search
                    placeholder="Nhập tên bệnh nhân"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                /> */}
                <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#1677FF' }}
                >
                    <Link to='/dentist/tao-lich-dieu-tri' style={{ textDecoration: 'none' }}>Tạo lịch điều trị   </Link>
                </Button>
            </div>

            <Table columns={columns} dataSource={listTreatment}
                pagination={listTreatment.length >= 5 ? { pageSize: 5 } : false}
                locale={{ emptyText: <Empty description='Không có dữ liệu' /> }}
            />

            {/* Modal View Patients của 1 Lịch Khám */}
            <Modal
                title={<p>Thông tin chi tiết lịch điều trị</p>}
                loading={loadingModalViewPatients}
                open={modalViewPatients}
                onCancel={() => setModalViewPatients(false)}
                width={800}
                footer={[]}
            >
                {/* <Tabs defaultActiveKey="1" items={renderPatientsInfo} /> */}
                <Descriptions layout="vertical">
                    <Descriptions.Item label="Họ và Tên">{patientsInfo.full_name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{patientsInfo.email}</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">{patientsInfo.gender}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">{formatDate(patientsInfo.date_of_birth)}</Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">{patientsInfo.phone_number}</Descriptions.Item>
                    <Descriptions.Item label="Dịch vụ điều trị">{patientsInfo.service_name === null ? 'Không có' : patientsInfo.service_name}</Descriptions.Item>
                    <Descriptions.Item label="Số lần">{patientsInfo.service_quantity}</Descriptions.Item>
                    <Descriptions.Item label="Phí điều trị">{formatCurrency(patientsInfo.service_cost)}</Descriptions.Item>
                    <Descriptions.Item label="Tổng cộng">{formatCurrency(patientsInfo.total_cost)}</Descriptions.Item>
                </Descriptions>
            </Modal>
        </>
    )
};
export default DentistTreatmentManagement;