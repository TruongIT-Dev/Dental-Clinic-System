import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// Antd
import { Modal } from 'antd';
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

// CSS
import '../../scss/navbar.css';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/signup';


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


// Items Dropdown Ant Design
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

const NavBar = () => {

    // Sign In
    const [signInOpen, setSignInOpen] = useState(false);
    const [confirmSignInLoading, setConfirmSignInLoading] = useState(false);

    const showSignInModal = () => {
        setSignInOpen(true);
    };

    const handleSignInOk = () => {
        setConfirmSignInLoading(true);
        setTimeout(() => {
            setSignInOpen(false);
            setConfirmSignInLoading(false);
        }, 1000);
    };
    const handleSignInCancel = () => {
        console.log('Clicked cancel button');
        setConfirmSignInLoading(true);
        setTimeout(() => {
            setSignInOpen(false);
            setConfirmSignInLoading(false);
        }, 1000);

        // Not Running? Why?
        // setSignInOpen(false);
    };

    // Sign Up
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [confirmSignUpLoading, setConfirmSignUpLoading] = useState(false);

    const showSignUpModal = () => {
        setSignUpOpen(true);
    };

    const handleSignUpOk = () => {
        // setModalText('The modal will be closed after two seconds');
        setConfirmSignUpLoading(true);
        setTimeout(() => {
            setSignUpOpen(false);
            setConfirmSignUpLoading(false);
        }, 1000);
    };
    const handleSignUpCancel = () => {
        console.log('Clicked cancel button');
        setConfirmSignUpLoading(true);
        setTimeout(() => {
            setSignUpOpen(false);
            setConfirmSignUpLoading(false);
        }, 1000);
    };
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
                                {/* <NavDropdown href='/service' style={TextHeader} title="Dịch vụ" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/service">
                                        Serivce
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Something
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                <Nav.Link href='/loai-hinh-dich-vu' style={TextHeader} eventKey='link-2'>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        {/* <a onClick={(e) => e.preventDefault()}> */}
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


                                {/* Sign In */}
                                <Nav.Link href='/dang-nhap' style={TextHeader}>
                                    <Button onClick={showSignInModal} type='primary' variant="outline-primary">
                                        Sign In
                                        {/* <Modal
                                        open={signInOpen}
                                        onOk={handleSignInOk}
                                        onCancel={handleSignInCancel}
                                        confirmLoading={confirmSignInLoading}
                                        footer={[]}
                                    >
                                        <SignIn />
                                    </Modal> */}
                                    </Button>
                                </Nav.Link>

                                {/* Sign Up */}
                                <Nav.Link href='/dang-ky' style={TextHeader}>
                                    <Button onClick={showSignUpModal} type='primary' variant="primary">
                                        Sign Up
                                        {/* <Modal
                                        open={signUpOpen}
                                        onOk={handleSignUpOk}
                                        onCancel={handleSignUpCancel}
                                        confirmLoading={confirmSignUpLoading}
                                        footer={[]}
                                    >
                                        <SignUp />
                                    </Modal> */}
                                    </Button>
                                </Nav.Link>

                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default NavBar