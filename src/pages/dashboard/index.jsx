import {
    PieChartOutlined,
    TeamOutlined,
    ProfileOutlined,
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Col, Layout, Menu, Row, theme, Breadcrumb } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



const { Content, Footer, Sider } = Layout;

const AdminDashboard = () => {

    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const account = useSelector(state => state?.account?.user?.user?.user_info);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    console.log("account", account)

    // Function xử lý thoát đăng nhập
    // const handleLogOut = () => {
    //     console.log('Button Logout clicked')
    //     localStorage.removeItem('access_token');
    //     dispatch(doLogoutAction());
    //     navigate('/');
    // }

    // const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout hasSider
            style={{
                // minHeight: '100vh',
            }}
        >

            <Sider width={270} >
                <div className="demo-logo-vertical" style={{ height: 40, }} />

                <div style={{ color: "#fff", padding: "0 15px", marginBottom: "1rem" }}>
                    <Row>
                        <Col span={6}>
                            <Avatar icon={<UserOutlined />} />
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24} style={{ color: "#FFF" }}>{account.full_name}</Col>
                                <Col span={24} style={{ color: "#AAABAF" }}>{account.email}</Col>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Link to='#'>
                                <SettingOutlined style={{ color: "#DB0D4B" }} />
                            </Link>
                        </Col>
                    </Row>
                </div>

                <Menu theme="dark" mode="inline"
                    defaultOpenKeys={['sub1', 'sub2', 'sub3']}>

                    {/* Dashboard */}
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin">Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<TeamOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-dich-vu">Quản lý Dịch vụ</Link>
                    </Menu.Item>

                    {/* Quản Lý Các Lịch Khám và Lịch Điều Trị */}
                    <Menu.SubMenu key="sub1" title="Schedule Management" icon={<ProfileOutlined />}>
                        <Menu.Item key="3">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-lich-kham">Lịch khám</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-lich-dieu-tri">Lịch điều trị</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link style={{ textDecoration: 'none' }} to="/admin/tao-lich-kham">Tạo lịch khám</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link style={{ textDecoration: 'none' }} to="/admin/tao-lich-dieu-tri">Tạo lịch điều trị</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    {/* Quản Lý Tài Khoản Nha Sĩ */}
                    <Menu.SubMenu key="sub2" title="Quản lý Nha sĩ" icon={<TeamOutlined />}>
                        <Menu.Item key="7">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-nha-si">Danh sách Nha sĩ</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link style={{ textDecoration: 'none' }} to="/admin/tao-nha-si">Tạo tài khoản Nha sĩ</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    {/* Quản Lý Phòng Khám */}
                    <Menu.SubMenu key="sub3" title="Quản lý Phòng khám" icon={<TeamOutlined />}>
                        <Menu.Item key="9">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-phong-kham">Danh sách Phòng khám</Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Link style={{ textDecoration: 'none' }} to="/admin/tao-phong-kham">Tạo Phòng khám</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item> */}
                    </Breadcrumb>

                    <div
                        style={{
                            padding: 24,
                            minHeight: '100vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AdminDashboard;