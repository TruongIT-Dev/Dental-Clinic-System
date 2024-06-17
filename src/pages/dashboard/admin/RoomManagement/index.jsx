import { Button, Space, Table, Input, Typography } from 'antd';

const { Search } = Input; // Correct object destructuring for Search component
const { Title } = Typography; // Correct object destructuring for Title component

const columns = [
    {
        title: 'Phòng khám',
        dataIndex: 'room',
        key: 'room',
    },
    {
        title: 'Bác sĩ',
        dataIndex: 'doctor',
        key: 'doctor',
    },
    {
        title: 'Loại hình dịch vụ',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button>Cập nhật</Button>
                <Button danger>Xóa</Button>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        room: '1',
        doctor: 'Dr. Tony Start',
        category: 'Bệnh lý nha chu',
    },
    {
        key: '2',
        room: '2',
        doctor: 'Dr. Banner',
        category: 'Chữa sâu răng',
    },
    {
        key: '3',
        room: '3',
        doctor: 'Dr. Thor Ragnarok',
        category: 'Điều trị tủy',
    },
];

const RoomManagement = () => {
    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý Phòng khám</Title>
            </div>

            {/* Top-Bar Btn*/}
            <div>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    style={{ margin: '20px', width: '33%' }}
                />
            </div>
            <br />

            <Table columns={columns} dataSource={data} /> {/* Remove the unnecessary semicolon */}
        </>
    );
};

export default RoomManagement;
