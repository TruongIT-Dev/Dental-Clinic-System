import { Card, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Modal, Pagination } from 'antd';
import { DoViewExaminationAppointment } from '../../../apis/api';

const Examination = () => {
    // Modal - Detail Patient Info
    const [open, setOpen] = useState(false);

    // API Examination Appointment
    const [dataExamination, setDataExamination] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 1; // Number of items per page

    // Handle page change
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the data to be displayed on the current page
    const currentData = dataExamination.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Hiện Modal Chi tiết Lịch Khám
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    // Giao Tiếp API - Show Thông tin chi tiết Lịch Khám
    const fetchExaminationAppointment = async () => {
        try {
            const ApiExamination = await DoViewExaminationAppointment();
            const dataAPIAppointment = ApiExamination?.data || {};
            setDataExamination(dataAPIAppointment);
            console.log('API Examination: ', dataAPIAppointment);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchExaminationAppointment();
    }, [])

    return (
        <>
            {currentData.map((data, index) => (
                <>
                    <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 auto 1rem' }}>
                        <div style={{ width: '50%' }}>
                            <Card
                                pageSize
                                extra={<Button onClick=
                                    {() => {
                                        setOpen(true)
                                        console.log('Ấn link: ', open)
                                    }}>
                                    Chi tiết
                                </Button>}
                                title="Hồ sơ lịch khám"
                                style={{
                                    width: '100%',
                                    textAlign: 'start',
                                }}
                            >
                                <div>
                                    <h5>Ngày {data.appointment_date}</h5>
                                    <div>
                                        <Row>
                                            <Col span={12}>
                                                <div style={{ textAlign: 'start' }}>
                                                    <p>Mã phiếu</p>
                                                    <p>Loại dịch vụ</p>
                                                    <p>Tổng cộng</p>
                                                    <p>Trạng thái</p>
                                                </div>
                                            </Col>

                                            <Col span={12}>
                                                <div style={{ textAlign: 'end' }}>
                                                    <p>{data.id}</p>
                                                    <p>{data.type}</p>
                                                    <p>{data.total_cost}</p>
                                                    <p>{data.status}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </>
            ))}
            {dataExamination.length >= 3 && (
                <Pagination
                    total={dataExamination.length}
                    pageSize={pageSize}
                    onChange={onPageChange}
                />
            )}


            {/* Chi Tiết Thông tin Lịch Khám */}
            <Modal
                title="Thông tin chi tiết Lịch Khám"
                centered
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
                width={500}
            >
                <div>
                    <Row>
                        <Col span={12}>
                            <div style={{ textAlign: 'start' }}>
                                <p>Mã phiếu</p>
                                <p>Phiếu khám bệnh</p>
                                <p>Phí tiện ích</p>
                                <p>Tổng cộng</p>
                                <p>Trạng thái</p>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div style={{ textAlign: 'end' }}>
                                <p>02305606515646468466</p>
                                <p>340.000 VNĐ</p>
                                <p>30.000 VNĐ</p>
                                <p>404.000 VNĐ</p>
                                <p>Hủy</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    )
}
export default Examination