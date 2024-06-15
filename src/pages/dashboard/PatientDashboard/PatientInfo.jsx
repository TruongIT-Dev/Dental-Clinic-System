import { Descriptions } from 'antd';
const items = [
    {
        key: '1',
        label: <h5>Họ và Tên</h5>,
        children: 'Zhou Maomao',
    },
    {
        key: '2',
        label: <h5>Số điện thoại</h5>,
        children: '1810000000',
    },
    {
        key: '3',
        label: <h5>Thành phố</h5>,
        children: 'Hangzhou, Zhejiang',
    },
    {
        key: '4',
        label: <h5>Địa chỉ</h5>,
        span: 2,
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    {
        key: '5',
        label: 'Remark',
        children: 'empty',
    },
];
const PatientInfo = () => <Descriptions title="THÔNG TIN CÁ NHÂN" layout="vertical" items={items} />;
export default PatientInfo;