import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CarryOutOutlined } from '@ant-design/icons';

// Components
import CategoryDropdown from './CategoryDropdown';
import UserProfileDropDown from './UserProfileDropDown';

// CSS
import '../../scss/navbar.css';
import { Space, Avatar } from 'antd';



const BrandHeader = {
    disPlay: 'flex',
    alignItems :'center',
    fontSize: '32px',
    fontWeight: 500,
    color: '#005f9d',
    textTransform: 'uppercase',
    paddingBottom: '0',
}

const TextHeader = {
    fontSize: '16px',
    color: 'black',
    textDecoration: 'none',
    textTransform: 'capitalize',
    marginRight: '12px',
   paddingBottom: '0',
}

const ButtonHeader = {
    padding: 0,
}

const NavBar = () => {
    // ********** USESTATE ***********

    // set biến 'account' chứa all
    const account = useSelector(state => state?.account);

    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const userSelector = useSelector(state => state?.account?.user?.user?.user_info);

    // // check biến 'account' đã authenticated là TRUE chưa.
    const isAuthenticated = account.isAuthenticated;

    // console.log('User info: ' ,userSelector);

    return (
        <>
            <div style={{ width: '100%', maxWidth: '300' }}>
                <Navbar style={{ padding: '0' }}>
                    <Container>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <Navbar.Brand style={BrandHeader} href="/">
                                Nha Khoa Sức Khỏe
                            </Navbar.Brand>
                        </div>

                        {/* Link Điều Hướng trang web */}
                        <div>
                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Link style={TextHeader} href="/">Trang chủ</Nav.Link>
                                <Nav.Link href='/loai-hinh-dich-vu' style={TextHeader} eventKey='link-2'>
                                    <CategoryDropdown />
                                </Nav.Link>
                                <Nav.Link href='/lich-lam-viec' style={TextHeader} eventKey="link-4">Lịch làm việc</Nav.Link>
                                <Nav.Link href='/lien-he' style={TextHeader} eventKey="link-6">Liên hệ</Nav.Link>
                                <Nav.Link href='/dat-lich-hen' style={TextHeader} eventKey="link-5">
                                    <Space style={{color:'red',fontWeight:'500', textTransform: 'capitalize', cursor: 'pointer' }}>
                                        <CarryOutOutlined />
                                        Đặt lịch hẹn
                                    </Space>
                                </Nav.Link>
                            </Nav>
                        </div>

                        {/* Button Sign IN Sign UP */}
                        <div>
                            <Nav className="justify-content-center">
                                {isAuthenticated === true ? (
                                    <>
                                        <Nav.Link href='#user' style={ButtonHeader}>
                                            <Button className='btn btn-primary' type='button'>
                                                <UserProfileDropDown user={userSelector} />
                                            </Button>
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link href='/dang-nhap' style={ButtonHeader}>
                                            <Button type='primary' variant="outline-primary">
                                                Đăng nhập
                                            </Button>
                                        </Nav.Link>

                                        <Nav.Link href='/dang-ky' style={ButtonHeader}>
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