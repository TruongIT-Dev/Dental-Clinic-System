import { Table } from 'antd';
const columns = [
    {
        title: 'Dịch vụ',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Đơn vị trả',
        dataIndex: 'DVT',
        key: 'DVT',
    },
    {
        title: 'Bảo hành',
        dataIndex: 'baohanh',
        key: 'baohanh',
    },

];
const data = [
    {
        key: '1',
        name: 'Răng sứ kim loại Titan + Công nghệ SwiftPerfect',
        price: '2.500.000',
        DVT: 'Răng',
        baohanh: '2 năm',
    },
    {
        key: '2',
        name: 'Răng sứ kim loại Cr-co + Công nghệ SwiftPerfect',
        price: '3.500.000',
        DVT: 'Răng',
        baohanh: '5 năm',
    },
    {
        key: '3',
        name: 'Răng sứ Sage + Công nghệ SwiftPerfect',
        price: '5.500.000',
        DVT: 'Răng',
        baohanh: '6 năm',
    },
    {
        key: '4',
        name: 'Răng sứ Bio + Công nghệ SwiftPerfect',
        price: '9.000.000',
        DVT: 'Răng',
        baohanh: '4 năm',
    },
    {
        key: '5',
        name: 'Răng sứ Sage Shine + Công nghệ SwiftPerfect',
        price: '12.500.000',
        DVT: 'Răng',
        baohanh: '2 năm',
    },
    {
        key: '6',
        name: 'Răng sứ Bio Shine HT + Công nghệ SwiftPerfect',
        price: '2.600.000',
        DVT: 'Răng',
        baohanh: '2 năm',
    },
];
const ServiceDetailTable = () => <Table columns={columns} dataSource={data} />;


export default ServiceDetailTable;