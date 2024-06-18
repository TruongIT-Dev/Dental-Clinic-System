import { useState } from 'react';
import {
    PieChartOutlined,
    TeamOutlined,
    ProfileOutlined,
    FileProtectOutlined,
    EnvironmentOutlined,
    NodeIndexOutlined,
    WechatOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


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
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} breakpoint="xxl">
                <div className="demo-logo-vertical" style={{ height: 40, }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub2', 'sub1', 'sub3']}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="#">Dashboard</Link>
                    </Menu.Item>

                    <Menu.SubMenu key="sub1" title="Quản lý Dịch vụ" icon={<TeamOutlined />}>
                        <Menu.Item key="2">
                            <Link style={{ textDecoration: 'none' }} to="/quan-ly-dich-vu">Loại hình Dịch vụ</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link style={{ textDecoration: 'none' }} to="/tao-dich-vu">Tạo Dịch vụ</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="sub2" title="Schedule Management" icon={<ProfileOutlined />}>
                        <Menu.Item key="4">
                            <Link style={{ textDecoration: 'none' }} to="/quan-ly-lich-kham">Lịch khám</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link style={{ textDecoration: 'none' }} to="/quan-ly-lich-dieu-tri">Lịch điều trị</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link style={{ textDecoration: 'none' }} to="/tao-lich-kham">Tạo lịch khám</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link style={{ textDecoration: 'none' }} to="/tao-lich-dieu-tri">Tạo lịch điều trị</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                   
                    <Menu.SubMenu key="sub3" title="Quản lý Nha sĩ" icon={<TeamOutlined />}>
                        <Menu.Item key="8">
                            <Link style={{ textDecoration: 'none' }} to="/quan-ly-nha-si">Danh sách Nha sĩ</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link style={{ textDecoration: 'none' }} to="/tao-nha-si">Tạo tài khoản Nha sĩ</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="sub4" title="Quản lý Phòng khám" icon={<TeamOutlined />}>
                        <Menu.Item key="10">
                            <Link style={{ textDecoration: 'none' }} to="/quan-ly-phong-kham">Danh sách Phòng khám</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link style={{ textDecoration: 'none' }} to="/tao-phong-kham">Tạo Phòng khám</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="12" icon={<SettingOutlined />}>
                        <Link style={{ textDecoration: 'none' }} to="#">Settings</Link>
                    </Menu.Item>
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