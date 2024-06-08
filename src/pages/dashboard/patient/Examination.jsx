import { Card, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { DoViewExaminationAppointment } from '../../../apis/api';

const Examination = () => {
    const [open, setOpen] = useState(false);

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
            console.log('API Examination: ', ApiExamination);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchExaminationAppointment();
    },[])

    return (
        <>
            <div>
                <Row>
                    <Col style={{ width: '50%' }}>
                        <Card
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
                            <h5>Ngày 18-05-06</h5>
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
                        </Card>
                    </Col>
                </Row>

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
            </div>
        </>
    )
}
export default Examination