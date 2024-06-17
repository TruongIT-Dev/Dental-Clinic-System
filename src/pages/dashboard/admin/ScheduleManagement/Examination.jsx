import { Space, Table, Input, Button, Typography } from 'antd';
const columns = [
    {
        title: 'Tên bệnh nhân',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Tuổi',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type='primary' ghost>Cập nhật</Button>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        sex: 'nam',
        address: 'New York No. 1 Lake Park',
        status: 'Chưa khám',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        sex: 'nữ',
        address: 'London No. 1 Lake Park',
        status: 'Đã khám',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        sex: 'nữ',
        address: 'Sydney No. 1 Lake Park',
        status: 'Chưa khám',
        tags: ['cool', 'teacher'],
    },
];
const Examination = () => {

    const { Search } = Input;
    const { Title } = Typography;

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý lịch khám</Title>
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
            <br></br>

            <Table columns={columns} dataSource={data} />;

        </>
    )
}

export default Examination;