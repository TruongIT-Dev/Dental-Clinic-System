import { Col, Row, Image, Card } from 'antd';

// Import Image Banner
import bocRangSuBanner from '../../assets/img/services/Banner-boc-rang-su.jpg';
import ServiceDetailTable from '../../components/services/ServiceDetailTable';
import ServiceDetailSlider from '../../components/services/ServiceDetailSlider';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { DoViewDetailCategory, DoViewTableDetailService } from '../../apis/api';

// Style CSS
const ServiceHeaderStyle = {
    // color: '#f6921e',
    // fontWeight: '400',
    // fontSize: '2.2rem',
    // lineHeight: '1.5',
    // marginBottom: '.5rem',
    // textAlign: 'left',
    // textTransform: 'capitalize',
    color: '#ff9900',
    fontSize: '24px',
    lineHeight: '1.5',
    marginBottom: '1rem',
    textAlign: 'left',
    textTransform: 'capitalize',
}

const ServiceSubHeaderStyle = {
    color: '#ff9900',
    fontSize: '24px',
    lineHeight: '1.5',
    marginBottom: '1rem',
    textAlign: 'left',
    textTransform: 'capitalize',
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
    const { slug } = useParams();
    const [dataDetailService, setDataDetailService] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    // Lấy Mô tả và Ảnh banner cho từng dịch vụ
    const fetchDetailIdService = async (slug) => {
        try {
            const IdService = await DoViewDetailCategory(slug);
            const APIDetailService = IdService?.data || {};
            setDataDetailService(APIDetailService);
        } catch (error) {
            console.log("Lỗi lấy Chi tiết Serivce:", error);
        }
    }
    useEffect(() => {
        fetchDetailIdService(slug);
    }, [slug])

    const fetchTableDetailService = async (slug) => {
        try {
            const table = await DoViewTableDetailService(slug);
            const APITable = table?.data || {};
            setDataTable(APITable);
        } catch (error) {
            console.log("Lỗi table: ", error);
        }
    }
    useEffect(() => {
        fetchTableDetailService(slug);
    }, [slug])

    console.log("dataTable", dataTable)
    // console.log('dataDetailService', dataDetailService)
    return (
        <>
            {dataDetailService ? (
                <>
                    <div className='banner'>
                        <Image
                            width={1500}
                            src={dataDetailService.banner_url}
                        />
                    </div>
                    <div className='content' style={{ margin: '2rem 5rem' }}>
                        <div className='mt-4'>
                            <Row>
                                <Col span={16}>
                                    {/* Tên dịch vụ */}
                                    <div className='header text-align-left'>
                                        <h1 style={ServiceHeaderStyle}>mô tả dịch vụ</h1>
                                    </div>

                                    {/* Mô tả dịch vụ */}
                                    <div>
                                        {/* Nội dung mô tả chi tiết dịch vụ */}
                                        <div>
                                            <p style={ServiceScriptStyle}>
                                                <b style={OpenServiceScriptStyle}>Dịch vụ {dataDetailService.name}</b>
                                                {dataDetailService.description}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida tincidunt scelerisque. Ut ultrices nulla metus, sed ultricies quam suscipit et. Phasellus accumsan ac est ac porta. Donec quis ligula ac orci pellentesque vehicula ac id est. Curabitur fermentum nibh sed odio tempus ultricies. Pellentesque at urna ac risus dapibus luctus. Vivamus vitae orci dolor. Nam et ultricies mi. Donec eget tempor quam.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='sub-header text-start mb-3'>
                                        <h1 style={ServiceSubHeaderStyle}>
                                            bảng giá {dataDetailService.name}
                                        </h1>
                                    </div>

                                    {/* Bảng giá chi tiết dịch vụ */}
                                    <div>
                                        <ServiceDetailTable data={dataTable} />
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
            ) : (
                <p>Page ko có data</p>
            )}
        </>
    )
}

export default ServiceDetail