import { Col, Row, Image, Card } from 'antd';

// Import Image Banner
import bocRangSuBanner from '../../assets/img/services/Banner-boc-rang-su.jpg';
import ServiceDetailTable from '../../components/services/ServiceDetailTable';
import ServiceDetailSlider from '../../components/services/ServiceDetailSlider';


// Style CSS
const ServiceHeaderStyle = {
    color: '#f6921e',
    fontWeight: '400',
    fontSize: '2.2rem',
    lineHeight: '1.5',
    marginBottom: '.5rem',
    textAlign: 'left',
}

const ServiceSubHeaderStyle = {
    color: '#ff9900',
    fontSize: '24px',
    lineHeight: '1.5',
    marginBottom: '1rem',
    textAlign: 'left',
}

const ServiceScriptStyle = {
    textAlign: 'justify',
    fontSize: '17.6px',
    wordWrap: 'break-word',
    color: '404a64',
}

const OpenServiceScriptStyle = {
    color: '#0155b1',
    fontWeight: '600',
    paddingRight: '3px',
}


const ServiceDetail = () => {


    return (
        <>
            <div className='banner'>
                <Image
                    src={bocRangSuBanner}
                />
            </div>
            <div className='content' style={{ margin: '2rem 5rem' }}>
                <div className='mt-4'>
                    <Row>
                        <Col span={16}>
                            {/* Tên dịch vụ */}
                            <div className='header text-align-left'>
                                <h1 style={ServiceHeaderStyle}>Bọc răng sứ thẩm mỹ đẹp, an toàn</h1>
                            </div>

                            {/* Mô tả dịch vụ */}
                            <div>
                                {/* Nội dung mô tả chi tiết dịch vụ */}
                                <div>
                                    <p style={ServiceScriptStyle}>
                                        <b style={OpenServiceScriptStyle}>Dịch vụ bọc răng sứ</b>
                                        của nha khoa là một phương pháp điều trị thẩm mỹ và phục hình răng hiệu quả.
                                        Trong quá trình này, các lá răng sứ được tạo ra từ vật liệu sứ cao cấp để bọc lên phần bề
                                        mặt của răng tự nhiên. Quá trình này không chỉ cải thiện về mặt thẩm mỹ bằng cách cải
                                        thiện hình dáng, màu sắc và vẻ bề ngoại của răng mà còn giúp bảo vệ răng tự nhiên khỏi
                                        các vấn đề như gãy, nứt hoặc bị ăn mòn. Bọc răng sứ cũng có thể được sử dụng để điều chỉnh
                                        về mặt chức năng, cải thiện cắn khớp và giảm căng thẳng trên răng và cơ hàm mặt.
                                        Điều này giúp mang lại nụ cười hoàn hảo và tự tin cho bệnh nhân.
                                    </p>
                                </div>
                            </div>

                            <div className='sub-header text-start mb-3'>
                                <b style={ServiceSubHeaderStyle}>
                                    Giá bọc răng sứ thẩm mỹ tại Nha Khoa Kim
                                </b>
                            </div>

                            {/* Bảng giá chi tiết dịch vụ */}
                            <div>
                                <ServiceDetailTable />
                            </div>
                        </Col>

                        {/* Slider - Aside */}
                        <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
                            <Card
                                title="ĐẶT DỊCH VỤ"
                                style={{
                                    width: 300,
                                    height: 'max-content',
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    position: 'sticky',
                                    top: '5rem',
                                }}
                            >
                                <ServiceDetailSlider />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail