import { Button, Input, Avatar, Space, Table, Tag } from 'antd';
import {
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
// import ProfilePic from '../../assets/img/Logo/Profile-Pic.png'
import StatisticNumber from './statisticNumber';
import StatisticTable from './statisticTable';



const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const Dashboard = () => {

    // Variables
    const { Search } = Input;

    return (
        <>
            {/* Top Page and short User Profile */}
            <div>
                <div style={{ margin: '0 0 0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h1>Dashboard</h1>
                </div>
                {/* Top-Bar Btn*/}
                <div>
                    <Search
                        placeholder="Search for information"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />

                </div>
                <br></br>
            </div>

            <br />

            {/* API show dữ liệu số */}
            <div>
                <StatisticNumber />
            </div>

            <br />

            {/* Show dữ liệu bảng */}
            <div>
                <StatisticTable />
                {/* <Table columns={columns} dataSource={data} /> */}
            </div>
        </>
    )
}

export default Dashboard