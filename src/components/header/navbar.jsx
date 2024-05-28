import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';

// Antd
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

// CSS
import '../../scss/navbar.css';
import { useState } from 'react';


const BrandHeader = {
    fontSize: '32px',
    fontWeight: 500,
    color: '#005f9d',
    textTransform: 'uppercase'
}

const TextHeader = {
    fontSize: '16px',
    color: 'black',
    textDecoration: 'none',
    height: 'fit-content',
}

// Bảng Drop Down cho phần Dịch Vụ
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

// Lấy thông tin người dùng từ LocalStorage
const GetUser = () => {
    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = null;
    }
    return user;
}

const NavBar = () => {
    // ********** USESTATE ***********
    const [user, setUser] = useState(GetUser());

    const account = useSelector(state => state?.account);
    const userSelector = useSelector(state => state?.account?.user?.user);
    const isAuthenticated = account.isAuthenticated;
    const dispatch = useDispatch();

    console.log('account', account)
    console.log('userSelector', userSelector)

    // Function xử lý thoát đăng nhập
    const handleLogOut = () => {
        console.log('Button Logout clicked')
        localStorage.removeItem('access_token');
        dispatch(doLogoutAction());
        setUser(null);
    }

    return (
        <>
            <div style={{ width: '100%', maxWidth: '300' }}>
                <Navbar>
                    <Container>
                        <div>
                            <Navbar.Brand style={BrandHeader} href="/">
                                <img
                                    alt=""
                                    src="/src/assets/img/logo.svg"
                                    width="50"
                                    height="50"
                                    className="d-inline-block"
                                />{' '}
                                Nha Khoa Sức Khỏe
                            </Navbar.Brand>
                        </div>

                        {/* Link Điều Hướng trang web */}
                        <div>
                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Link style={TextHeader} href="/">Trang chủ</Nav.Link>
                                <Nav.Link href='/loai-hinh-dich-vu' style={TextHeader} eventKey='link-2'>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <Space style={{ color: 'black' }}>
                                            Dịch vụ
                                            <DownOutlined />
                                        </Space>
                                        {/* </a> */}
                                    </Dropdown>
                                </Nav.Link>
                                <Nav.Link href='#gia' style={TextHeader} eventKey="link-3">Bảng giá</Nav.Link>
                                <Nav.Link href='/dat-lich-hen' style={TextHeader} eventKey="link-4">Đặt hẹn</Nav.Link>
                            </Nav>
                        </div>

                        {/* Button Sign IN Sign UP */}
                        <div>
                            <Nav className="justify-content-center">

                                {isAuthenticated === true ? (
                                    <li>
                                        <span>Hello, {userSelector.full_name}</span>
                                        <Button onClick={handleLogOut} type="primary">Logout</Button>
                                    </li>
                                ) : (
                                    <>
                                        {/* {account.user.accessToken && (
                                            <>
                                                <Nav.Link href='/dang-nhap' style={TextHeader}>
                                                    <Button type='primary' variant="outline-primary">
                                                        Đăng nhập
                                                    </Button>
                                                </Nav.Link>

                                                <Nav.Link href='/dang-ky' style={TextHeader}>
                                                    <Button type='primary' variant="primary">
                                                        Đăng ký
                                                    </Button>
                                                </Nav.Link>
                                            </>
                                        )} */}
                                        <Nav.Link href='/dang-nhap' style={TextHeader}>
                                            <Button type='primary' variant="outline-primary">
                                                Đăng nhập
                                            </Button>
                                        </Nav.Link>

                                        <Nav.Link href='/dang-ky' style={TextHeader}>
                                            <Button type='primary' variant="primary">
                                                Đăng ký
                                            </Button>
                                        </Nav.Link>
                                    </>
                                )}
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default NavBar