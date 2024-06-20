import { Space, Table, Input, Button, Typography } from 'antd';
import { DoViewAllDentistByAdmin } from '../../../../apis/api';
import { useEffect, useState } from 'react';
const columns = [
    {
        title: 'Họ và tên',
        dataIndex: 'full_name',
        key: 'full_name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone_number',
        key: 'phone_number',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'date_of_birth',
        key: 'date_of_birth',
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: 'Chuyên khoa',
        dataIndex: 'specialty',
        key: 'specialty',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type='primary' ghost>Cập nhật</Button>
                <Button danger>Xoá</Button>
            </Space>
        ),
    },
];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['doctor'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];
const DentistManagement = () => {

    const { Search } = Input;
    const { Title } = Typography;

    const [listDentist, setListDentst] = useState([]);

    const fetchAllDentist = async () => {
        const APIAllDentist = await DoViewAllDentistByAdmin();
        const GetDataAllDentist = APIAllDentist?.data || {};
        setListDentst(GetDataAllDentist);
    }
    useEffect(() => {
        fetchAllDentist();
    }, [])

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý Nha sĩ</Title>
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

            <Table columns={columns} dataSource={listDentist} />;

        </>
    )
}

export default DentistManagement;