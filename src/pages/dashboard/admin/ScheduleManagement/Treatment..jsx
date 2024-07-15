import { Space, Table, Input, Button, Typography, Empty } from 'antd';
import { useEffect, useState } from 'react';
import { DoViewAllTreatmentByAdmin } from '../../../../apis/api';

const Treatment = () => {

    // ***********************************************************************
    //                                Variables

    const { Search } = Input;
    const { Title } = Typography;
    //************************************************************************


    // ***********************************************************************
    //                                useState
    const [listTreatments, setListTreatments] = useState([]);
    //************************************************************************


    // ***********************************************************************
    //                                useEffect
    useEffect(() => {
        fetchListAllTreatmentByAdmin(name)
    }, [name])
    //************************************************************************


    // ***********************************************************************
    //                                API Function

    const fetchListAllTreatmentByAdmin = async (name) => {

        try {
            const APIListAllTreatments = await DoViewAllTreatmentByAdmin(name);

            if (APIListAllTreatments.status === 200) {
                const GetDataListTreatments = APIListAllTreatments?.data || [];
                setListTreatments(GetDataListTreatments);
            }
        } catch (error) {
            console.log(error)
        }
    }
    //************************************************************************


    // ***********************************************************************
    //                                other Function


    const columns = [
        {
            title: 'STT',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
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
    //************************************************************************

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Quản lý lịch điều trị</Title>
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

            {/* Check nếu có data thì show table, không thì Empty data */}
            {listTreatments.length >= 1 ? (
                <>
                    <Table columns={columns} dataSource={listTreatments} />
                </>
            ) :
                (
                    <>
                        <div>
                            <Table
                                columns={columns}
                                dataSource={listTreatments}
                                locale={{ emptyText: <Empty description='Không có dữ liệu' /> }}
                            />
                        </div >
                    </>
                )}


        </>
    )
}

export default Treatment;