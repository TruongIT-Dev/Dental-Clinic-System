// Antd
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const LinkDropDownStyle = {
    textDecoration: 'none',
    color: '#30374b',
    marginBottom: '0.5rem',
    fontSize: '16px',
}

const items = [
    {
        key: '1',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Bọc răng sứ
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Cấy ghép implant
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Niềng răng thẩm mỹ
            </a>
        ),

    },
    {
        key: '4',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Tẩy trắng răng
            </a>
        ),

    },
    {
        key: '5',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Nhổ răng khôn
            </a>
        ),

    },
    {
        key: '6',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Bệnh lý nha chu
            </a>
        ),

    },
    {
        key: '7',
        label: (
            <a style={LinkDropDownStyle} href="#">
                Điều trị tủy
            </a>
        ),

    },
];

const CategoryDropdown = () => {
    return (
        <>
            {/* <Dropdown
                menu={{
                    items,
                }}
            > */}
            <Space style={{ color: 'black' }}>
                Dịch vụ
                {/* <DownOutlined /> */}
            </Space>
            {/* </Dropdown> */}
        </>
    )
}
export default CategoryDropdown