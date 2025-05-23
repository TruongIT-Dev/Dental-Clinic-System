import { useDispatch } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';
import { useNavigate } from 'react-router-dom';
// Antd
import { Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


const LinkDropDownStyle = {
    textDecoration: 'none',
    marginBottom: '0.5rem',
    fontSize: '16px',
}

const UserProfileDropDown = ({ user }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function xử lý thoát đăng nhập
    const handleLogOut = () => {
        console.log('Button Logout clicked')
        localStorage.removeItem('access_token');
        dispatch(doLogoutAction());
        navigate('/');
    }

    const items = [
        {
            key: '1',
            label: (
                <a style={LinkDropDownStyle} href="/patient/thong-tin-ca-nhan">
                    Tài khoản của tôi
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a style={LinkDropDownStyle} href="/patient/doi-mat-khau">
                    Đổi mật khẩu
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a style={LinkDropDownStyle} href="/patient/lich-kham">
                    Lịch khám
                </a>
            ),

        },
        {
            key: '4',
            label: (
                <a style={LinkDropDownStyle} href="#" onClick={handleLogOut}>
                    Đăng xuất
                </a>
            ),
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                style={{
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
                placement="bottom"
            >
                <Space style={{ color: 'white', cursor: 'pointer', fontSize: '16px', }}>
                    <UserOutlined />
                    {user.full_name}
                    <DownOutlined />
                </Space>
            </Dropdown>
        </>
    )
}
export default UserProfileDropDown