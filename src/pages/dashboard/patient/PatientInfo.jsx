import { Card, Col, Descriptions, Row, Typography } from 'antd';

import { useSelector } from 'react-redux';


const PatientInfo = () => {

    // ***********************************************************************
    //                                Variables
    const { Title } = Typography;
    // set biến 'userSelector' chứa thông tin đã đăng nhập
    const user_info = useSelector(state => state?.account?.user?.user?.user_info);
    console.log(user_info)
    //************************************************************************


    // ***********************************************************************
    //                                useState

    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    //************************************************************************


    // ***********************************************************************
    //                                API Function

    //************************************************************************


    // ***********************************************************************
    //                                other Function
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };
    //************************************************************************
    return (


        <>
            <div className="container mx-auto px-4 mt-4">
                <Title level={3}
                    style={{ marginBottom: '2rem' }}> Thông tin tài khoản </Title>
                <Row style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
                    <Col span={22}>
                        <Card>
                            <Descriptions layout='vertical' style={{ display: 'grid', placeContent: 'center' }}>
                                <Descriptions.Item label="Họ và tên">{user_info.full_name}</Descriptions.Item>
                                <Descriptions.Item label="Email"> {user_info.email}</Descriptions.Item>
                                <Descriptions.Item label="Số điện thoại">{user_info.phone_number}</Descriptions.Item>
                                <Descriptions.Item label="Giới tính">{user_info.gender}</Descriptions.Item>
                                <Descriptions.Item label="Ngày sinh">{formatDate(user_info.date_of_birth)}</Descriptions.Item>
                                {/* <Descriptions.Item label="Mật khẩu">
                                    **************
                                </Descriptions.Item> */}
                            </Descriptions>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    )
}
export default PatientInfo;