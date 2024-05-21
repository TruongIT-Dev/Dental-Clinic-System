import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// Antd
import { Modal } from 'antd';

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
                                <NavDropdown style={TextHeader} title="Dịch vụ" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Something
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#price' style={TextHeader} eventKey="link-2">Bảng giá</Nav.Link>
                                <Nav.Link href='appoinment' style={TextHeader} eventKey="link-3">Đặt hẹn</Nav.Link>
                            </Nav>
                        </div>

                        {/* Btn */}
                        <div>
                            <Nav className="justify-content-center">

                                {/* Sign In */}
                                <Button onClick={showSignInModal} type='primary' variant="outline-primary">
                                    Sign In
                                    <Modal
                                        open={signInOpen}
                                        onOk={handleSignInOk}
                                        onCancel={handleSignInCancel}
                                        confirmLoading={confirmSignInLoading}
                                        footer={[]}
                                    >
                                        <SignIn />
                                    </Modal>
                                </Button>

                                {/* Sign Up */}
                                <Button onClick={showSignUpModal} type='primary' variant="primary">
                                    Sign Up
                                    <Modal
                                        open={signUpOpen}
                                        onOk={handleSignUpOk}
                                        onCancel={handleSignUpCancel}
                                        confirmLoading={confirmSignUpLoading}
                                        footer={[]}
                                    >
                                        <SignUp />
                                    </Modal>
                                </Button>

                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default NavBar