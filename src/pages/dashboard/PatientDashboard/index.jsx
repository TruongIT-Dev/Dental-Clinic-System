import { Card, Col, Row } from 'antd';
import { ScheduleOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const PatientDashboard = () => {
    return (
        <>
            <div style={{ minHeight: '50vh', margin: '5rem 12rem' }}>
                <div className='m-auto'>
                    <Card>
                        <Row>
                            <Col span={8}>
                                <div style={{ width: '80%' }}>
                                    <Menu mode="inline" defaultOpenKeys={['sub1', 'sub2']}>

                                        <Menu.SubMenu key="sub1" title="Tài khoản" icon={<UserOutlined />}>
                                            <Menu.Item key="1">
                                                <Link className='text-decoration-none' to="/patient/thong-tin-ca-nhan">Thông tin cá nhân</Link>
                                            </Menu.Item>
                                            <Menu.Item key="2">
                                                <Link className='text-decoration-none' to="/patient/doi-mat-khau">Đổi mật khẩu</Link>
                                            </Menu.Item>
                                        </Menu.SubMenu>

                                        <Menu.SubMenu key="sub2" title="Thông tin lịch khám" icon={<ScheduleOutlined />}>
                                            <Menu.Item key="3">
                                                <Link className='text-decoration-none' to="/patient/lich-kham">Lịch khám</Link>
                                            </Menu.Item>
                                            <Menu.Item key="4">
                                                <Link className='text-decoration-none' to="/patient/lich-dieu-tri">Lịch điều trị</Link>
                                            </Menu.Item>
                                        </Menu.SubMenu>

                                        <Menu.Item key="5" icon={<SettingOutlined />}>
                                            <Link className='text-decoration-none' to="#">Cài đặt</Link>
                                        </Menu.Item>
                                    </Menu>
                                </div>
                            </Col>
                            <Col span={16}>
                                <Outlet></Outlet>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default PatientDashboard