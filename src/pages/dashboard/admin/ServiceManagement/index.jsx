import { Button, Space, Table, Image } from 'antd';

import bocRangSu from '../../../../assets/img/catergories/icon-boc-rang-su-1.png';
import cayGhepImplant from '../../../../assets/img/catergories/trong-rang-implant.webp';
import niengRangThamMy from '../../../../assets/img/catergories/nieng-rang-tham-my.png';
import tayTrangRang from '../../../../assets/img/catergories/icon-tay-trang-rang-1.png';
import nhoRangKhon from '../../../../assets/img/catergories/icon-nho-rang-khon-1.png';
import benhLyNhaChu from '../../../../assets/img/catergories/icon-benh-ly-nha-chu.png';
import dieuTriTuy from '../../../../assets/img/catergories/dieu-tri-tuy.png';

const columns = [
    {
        title: 'Ảnh đại diện',
        dataIndex: 'img',
        key: 'img',
        render: (imgPath) => (
            <Image
                width={100}
                src={imgPath} // Use the image path from the 'img' property
            />
        ),
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
                <Button>Xem chi tiết</Button>
                <Button danger>Xóa</Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        img: bocRangSu, // Path to the image for the first item
        category: 'Bọc răng sứ',
    },
    {
        key: '2',
        img: cayGhepImplant, // Path to the image for the second item
        category: 'Cấy ghép Implement',
    },
    {
        key: '3',
        img: niengRangThamMy, // Path to the image for the third item
        category: 'Niềng răng thẩm mỹ',
    },
    {
        key: '4',
        img: tayTrangRang, // Path to the image for the third item
        category: 'Tẩy trắng răng',
    },
    {
        key: '5',
        img: nhoRangKhon, // Path to the image for the third item
        category: 'Nhổ răng khôn',
    },
    {
        key: '6',
        img: benhLyNhaChu, // Path to the image for the third item
        category: 'Bệnh lý nha chu',
    },
    {
        key: '7',
        img: dieuTriTuy, // Path to the image for the third item
        category: 'Niềng răng thẩm mỹ',
    },
];

const ServiceManagement = () => <Table columns={columns} dataSource={data} />;
export default ServiceManagement;
