import { useDispatch } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';

// Antd
import { Dropdown, Space, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


const LinkDropDownStyle = {
    textDecoration: 'none',
    marginBottom: '0.5rem',
    fontSize: '16px',
}


const UserProfileDropDown = ({ user }) => {

    const dispatch = useDispatch();

    // Function xử lý thoát đăng nhập
    const handleLogOut = () => {
        console.log('Button Logout clicked')
        localStorage.removeItem('access_token');
        dispatch(doLogoutAction());
    }

    const items = [
        {
            key: '1',
            label: (
                <a style={LinkDropDownStyle} href="#">
                    Tài khoản của tôi
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a style={LinkDropDownStyle} href="#">
                    Đổi mật khẩu
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a style={LinkDropDownStyle} href="#">
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
                }}
            >
                <Space style={{ color: 'white', cursor: 'pointer' }}>
                    <Avatar
                        style={{color:'white'}}
                        icon={<UserOutlined />}
                    />
                    {user.full_name}
                    <DownOutlined />
                </Space>
            </Dropdown>
        </>
    )
}
export default UserProfileDropDown