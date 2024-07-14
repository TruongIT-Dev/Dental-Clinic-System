import { Button, Input, Select, Space, Table, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const data = [
    {
        key: '1',
        name: 'Nguyễn Văn Toàn',
        age: 1,
        address: 'Nam',
        number: '0351564895',
        room: 'thunv@gmail.com',
        dob: '15/2/1998'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 2,
        address: 'Nữ',
        number: '0352615486',
        room: 'hai@gmail.com',
        dob: '15/8/2023'
    },
];
const DentistPatientManagement = () => {
    const { Title } = Typography;
    const { Search } = Input;
    const { Option } = Select;




    const handleStatusChange = (value, record) => {
        // Handle status change logic here
        console.log('Changed status to:', value, 'for record:', record);
    };

    const columns = [
        {
            title: 'STT',
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
            title: 'Giới tính',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Ngày sinh',
            key: 'dob',
            dataIndex: 'dob',
        },
        {
            title: 'Email',
            dataIndex: 'room',
            key: 'room',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'number',
            key: 'number',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' ghost>View bệnh nhân</Button>
                    <Button type='primary'><Link to='/dentist/ho-so-benh-nhan' style={{ textDecoration: 'none' }}>Tạo hồ sơ</Link></Button>
                </Space>
            ),
        },
    ];
    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Danh sách bệnh nhân</Title>
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
                {/* <Button
                    icon={<PlusOutlined />}
                    size={'large'}
                    type="primary"
                    style={{ width: 'fit-content', margin: '20px', backgroundColor: '#1677FF' }}
                >
                    <Link to='/dentist/ho-so-benh-nhan' style={{ textDecoration: 'none' }}>Tạo hồ sơ bệnh nhân</Link>
                </Button> */}
            </div>
            <Table columns={columns} dataSource={data} />
        </>
    )
};
export default DentistPatientManagement;