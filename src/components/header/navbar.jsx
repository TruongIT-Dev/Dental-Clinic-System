import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const HeaderText = {
    fontSize: '16px',
    color: 'black',
    textDecoration: 'none',
}

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Bọc răng sứ
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Nhổ răng khôn
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Điều trị tủy
            </a>
        ),
    },
];

const NavBar = () => {

    return (
        <>

            <div>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/src/assets/img/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block"
                            />{' '}
                            Nha Khoa Sức Khỏe
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>


            {/* Link Điều Hướng trang web */}
            <div style={{ width: '100%' }}>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link style={HeaderText} href="/">Trang chủ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={HeaderText} eventKey="link-1">
                            <Dropdown
                                style={{color:'red', }}
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space style={HeaderText}>
                                        Dịch vụ
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={HeaderText} eventKey="link-2">Đội ngũ bác sĩ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={HeaderText} eventKey="link-3">Bảng giá</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>


            <div style={{ width: '30%' }}>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link style={HeaderText} href='/signin'>
                            <Button type='button' variant="outline-primary">
                                Sign In
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={HeaderText} href='/signup'>
                            <Button type='button' variant="primary">
                                Sign Up
                            </Button>
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            </div>
        </>
    )
}
export default NavBar