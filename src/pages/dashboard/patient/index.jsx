import { Col, Row } from 'antd';
import { ScheduleOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const PatientDashboard = () => {
    return (
        <>
            <div style={{ margin: '3rem 5rem' }}>
                <Row>
                    <Col span={8}>
                        <div style={{ width: '70%' }}>
                            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub2']}>

                                <Menu.Item key="1" icon={<UserOutlined />}>
                                    <Link className='text-decoration-none' to="/patient/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                </Menu.Item>

                                <Menu.SubMenu key="sub2" title="Thông tin lịch khám" icon={<ScheduleOutlined />}>
                                    <Menu.Item key="2">
                                        <Link className='text-decoration-none' to="/patient/lich-kham">Lịch khám</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link className='text-decoration-none' to="/patient/lich-dieu-tri">Lịch điều trị</Link>
                                    </Menu.Item>
                                </Menu.SubMenu>

                                <Menu.Item key="10" icon={<SettingOutlined />}>
                                    <Link className='text-decoration-none' to="/patient/doi-mat-khau">Đổi mật khẩu</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default PatientDashboard