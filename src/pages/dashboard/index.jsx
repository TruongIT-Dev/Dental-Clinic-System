import { useState } from 'react';
import {
    PieChartOutlined,
    TeamOutlined,
    ProfileOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;


const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout hasSider
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider width={270} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
                <div className="demo-logo-vertical" style={{ height: 40, }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub2', 'sub1', 'sub3']}>

                    {/* Dashboard */}
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin">Dashboard</Link>
                    </Menu.Item>

                    {/* Quản Lý Loại Hình Dịch Vụ */}
                    {/* <Menu.SubMenu key="sub1" title="Quản lý Dịch vụ" icon={<TeamOutlined />}>
                        <Menu.Item key="2">
                            <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-dich-vu">Loại hình Dịch vụ</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link style={{ textDecoration: 'none' }} to="/admin/tao-dich-vu">Tạo Dịch vụ</Link>
                        </Menu.Item>
                    </Menu.SubMenu> */}

                    <Menu.Item key="2" icon={<TeamOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="/admin/quan-ly-dich-vu">Loại hình Dịch vụ</Link>
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
                    <Menu.SubMenu key="sub3" title="Quản lý Nha sĩ" icon={<TeamOutlined />}>
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