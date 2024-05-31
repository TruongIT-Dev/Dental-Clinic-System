import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';

// Antd
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
            <a style={LinkDropDownStyle}  href="#">
                Cấy ghép implant
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a style={LinkDropDownStyle}  href="#">
                Niềng răng thẩm mỹ
            </a>
        ),

    },
    {
        key: '4',
        label: (
            <a style={LinkDropDownStyle}  href="#">
                Tẩy trắng răng
            </a>
        ),

    },
    {
        key: '5',
        label: (
            <a style={LinkDropDownStyle}  href="#">
                Nhổ răng khôn
            </a>
        ),

    },
    {
        key: '6',
        label: (
            <a style={LinkDropDownStyle}  href="#">
                Bệnh lý nha chu
            </a>
        ),

    },
    {
        key: '7',
        label: (
            <a style={LinkDropDownStyle}  href="#">
                Điều trị tủy
            </a>
        ),

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

    // set biến 'account' chứa all
    const account = useSelector(state => state?.account);

    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const userSelector = useSelector(state => state?.account?.user?.user);

    // check biến 'account' đã authenticated là TRUE chưa.
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
                                Nha Khoa Kim
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
                                    </Dropdown>
                                </Nav.Link>
                                {/* <Nav.Link href='#gia' style={TextHeader} eventKey="link-3">Bảng giá</Nav.Link> */}
                                <Nav.Link href='/lich-lam-viec' style={TextHeader} eventKey="link-4">Lịch làm việc</Nav.Link>
                                <Nav.Link href='/dat-lich-hen' style={TextHeader} eventKey="link-5">Đặt hẹn</Nav.Link>
                                <Nav.Link href='/lien-he' style={TextHeader} eventKey="link-6">Liên hệ</Nav.Link>
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