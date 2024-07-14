import { Button, Input, Select, Space, Table, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import ViewPatientInfo from './ViewPatientInfo';

const data = [
    {
        key: '1',
        name: 'Nguyễn Thị Hương',
        age: 32,
        address: 'Cấy ghép răng',
        number: '8:00 - 9:00',
        room: '1'
    },
    {
        key: '2',
        name: 'Trần Văn Toàn',
        age: 42,
        address: 'Sửa răng sứ',
        number: '7:00 - 8:00',
        room: '3'
    },
];
const DentistExaminationtManagement = () => {
    const { Title } = Typography;
    const { Search } = Input;
    const { Option } = Select;




    const handleStatusChange = (value, record) => {
        // Handle status change logic here
        console.log('Changed status to:', value, 'for record:', record);
    };

    const columns = [
        {
            title: 'Mã lịch khám',
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
                        defaultValue={"Đang chờ"}
                        onChange={(value) => handleStatusChange(value, record)}
                        style={{ width: 120, border: 'none' }}
                    >
                        <Option value="Đang chờ">
                            <Tag color="red">Đang chờ</Tag>
                        </Option>
                        <Option value="Đã khám">
                            <Tag color="green">Đã khám</Tag>
                        </Option>
                    </Select >
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
                    <ViewPatientInfo />
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
                    <Link to='/dentist/tao-lich-dieu-tri' style={{ textDecoration: 'none' }}>Tạo lịch điều trị   </Link>
                </Button> */}
            </div>
            <Table columns={columns} dataSource={data} />
        </>
    )
};
export default DentistExaminationtManagement;