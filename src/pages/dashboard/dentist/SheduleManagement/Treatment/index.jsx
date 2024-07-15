import { Button, Input, Select, Space, Table, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const data = [
    {
        key: '1',
        name: 'Nguyễn Văn Toàn',
        age: 32,
        address: 'Trám răng',
        number: '8:00 - 9:00',
        room: '1'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'Sâu răng',
        number: '8:00 - 9:00',
        room: '1'
    },
];
const DentistTreatmentManagement = () => {
    const { Title } = Typography;
    const { Search } = Input;
    const { Option } = Select;




    const handleStatusChange = (value, record) => {
        // Handle status change logic here
        console.log('Changed status to:', value, 'for record:', record);
    };

    const columns = [
        {
            title: 'Mã phiếu',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Tên bệnh nhân',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Loại hình dịch vụ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (status, record) => {
                return (
                    <Select
                        defaultValue={"Đã khám"}
                        onChange={(value) => handleStatusChange(value, record)}
                        style={{ width: 120 }}
                    >
                        <Option value="Đang chờ">
                            <Tag color="red">Đang chờ</Tag>
                        </Option>
                        <Option value="Đã khám">
                            <Tag color="green">Đã khám</Tag>
                        </Option>
                    </Select>
                );
            },
        },
        {
            title: 'Thời gian',
            dataIndex: 'number',
            key: 'number',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Phòng',
            dataIndex: 'room',
            key: 'room',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button>Cập nhật</Button>
                    <Button type='primary'>Chi tiết</Button>
                </Space>
            ),
        },
    ];
    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách lịch điều trị</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
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
            </div>
            <Table columns={columns} dataSource={data} />
        </>
    )
};
export default DentistTreatmentManagement;