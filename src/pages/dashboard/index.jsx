import {
    PieChartOutlined,
    TeamOutlined,
    ProfileOutlined,
    ScheduleOutlined,
    UserOutlined,
    SettingOutlined,
    CalendarOutlined,
    ContainerOutlined
} from '@ant-design/icons';
import { Avatar, Layout, Menu, theme, Breadcrumb, Button, Popconfirm } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice'


const { Content, Footer, Sider } = Layout;

const AdminDashboard = () => {

    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const account = useSelector(state => state?.account?.user?.user?.user_info);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log("account", account)

    // Function xử lý thoát đăng nhập
    const handleLogOut = () => {
        console.log('Button Logout clicked')
        localStorage.removeItem('access_token');
        dispatch(doLogoutAction());
        navigate('/');
    }

    // const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const confirm = (e) => {
        console.log(e);
        handleLogOut();
    };
    const cancel = (e) => {
        console.log(e);
    };
    return (
        <Layout hasSider
            style={{
                // minHeight: '100vh',
            }}
        >

            <Sider width={270} >
                <div className="demo-logo-vertical" style={{ height: 40, }} />

                <div style={{ textAlign: 'center', color: "#fff", marginBottom: "2rem" }}>

                    <div>
                        <Avatar
                            icon={<UserOutlined />}
                            size={50}
                        />
                    </div>

                    <div>
                        <p>{account.email}</p>
                    </div>

                    <Popconfirm
                        description="Bạn muốn đăng xuất? Xác nhận có!"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button danger ghost>Đăng xuất</Button>
                    </Popconfirm>
                </div>

                {/* Tài khoản Admin */}
                {account.role === "Admin" ? (<Menu theme="dark" mode="inline"
                    defaultOpenKeys={['sub1']}>

                    {/* Dashboard */}
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin">Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<ProfileOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-dich-vu">Quản lý Dịch vụ</Link>
                    </Menu.Item>

                    {/* Quản Lý Các Lịch Khám và Lịch Điều Trị */}
                    <Menu.SubMenu key="sub1" title="Quản lý lịch khám" icon={<ScheduleOutlined />}>
                        <Menu.Item key="3">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-lich-kham">Lịch khám tổng quát</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-lich-dieu-tri">Lịch điều trị</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    {/* Quản Lý Tài Khoản Nha Sĩ */}
                    <Menu.Item key="5" icon={<TeamOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-nha-si">Quản lý Nha sĩ</Link>
                    </Menu.Item>


                    {/* Quản Lý Phòng Khám */}
                    <Menu.Item key="6" icon={<ContainerOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-phong-kham">Quản lý phòng khám</Link>
                    </Menu.Item>
                </Menu>
                )

                    :

                    (
                        // Tài khoản Dentist
                        <Menu theme="dark" mode="inline"
                        // defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                        >

                            {/* Dashboard */}
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link style={{ textDecoration: 'none' }} to="/dentist">Dashboard</Link>
                            </Menu.Item>

                            <Menu.Item key="2" icon={<ScheduleOutlined />}>
                                <Link style={{ textDecoration: 'none' }} to="/dentist/quan-ly-lich-kham">Quản lý lịch khám</Link>
                            </Menu.Item>

                            <Menu.Item key="3" icon={<CalendarOutlined />}>
                                <Link style={{ textDecoration: 'none' }} to="/dentist/quan-ly-lich-dieu-tri">Quản lý lịch điều trị</Link>
                            </Menu.Item>

                            <Menu.Item key="4" icon={<TeamOutlined />}>
                                <Link style={{ textDecoration: 'none' }} to="/dentist/quan-ly-benh-nhan">Quản lý bệnh nhân</Link>
                            </Menu.Item>

                            <Menu.Item key="5" icon={<SettingOutlined />}>
                                <Link style={{ textDecoration: 'none' }} to="#">Cài đặt</Link>
                            </Menu.Item>
                        </Menu>
                    )}


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