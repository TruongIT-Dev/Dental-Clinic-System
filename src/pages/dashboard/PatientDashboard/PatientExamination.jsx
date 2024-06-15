import { Card, Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import { Modal, Pagination } from 'antd';
import { DoViewDetailExamination, DoViewExaminationAppointment } from '../../../apis/api';



// CSS
const ExaminationText = {
    color: '#999999	',
}

const ExaminationID = {
    color: '#FF6A6A',
}

const ExaminationValues = {
    color: '#0033FF',
}

const PatientExamination = () => {
    // Modal - Detail Patient Info
    const [open, setOpen] = useState(false);

    // API Examination Appointment
    const [dataExamination, setDataExamination] = useState([]);
    const [dataDetailExamination, setDataDetailExamination] = useState([]);
    // console.log('dataDetailExamination', dataDetailExamination)

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3; // Number of items per page

    // Handle page change
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the data to be displayed on the current page
    const currentData = dataExamination.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const toVietnamTime = (timeString) => {
        const date = new Date(timeString);
        const options = {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        return date.toLocaleString('en-US', options);
    };

    // Assuming toVietnamTime function exists and formats the datetime string
    const extractTime = (datetime) => {
        // Extract the time from the datetime string
        return datetime.split(', ')[1];
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed
        const year = date.getFullYear();

        // Ensure leading zeros if day or month is single digit
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}-${formattedMonth}-${year}`;
    };

    // Hiện Modal Chi tiết Lịch Khám
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    // ***********************************************
    // Giao Tiếp API - Show Thông tin của 1 Phiếu Khám
    const fetchExaminationAppointment = async () => {
        try {
            const ApiExamination = await DoViewExaminationAppointment();
            const dataAPIAppointment = ApiExamination?.data || [];
            setDataExamination(dataAPIAppointment);
            // console.log('API Examination: ', dataAPIAppointment);
        } catch (error) {
            console.log("Lỗi Examination", error)
        }
    }
    useEffect(() => {
        fetchExaminationAppointment();
    }, [])


    // Giao tiếp API - Show Thông tin chi tiết của 1 Phiếu Khám
    const fetchDetailExamination = async (card_id) => {
        try {
            const ApiDetailExamination = await DoViewDetailExamination(card_id);
            const GetDataDetailExamination = ApiDetailExamination?.data || {};
            console.log('Data Detail Examination: ', GetDataDetailExamination);
            setDataDetailExamination(GetDataDetailExamination);
        } catch (error) {
            console.log("Lỗi Detail Examination: ", error);
        }
    }
    // ***********************************************

    const handleClickCard = (card_id) => {
        fetchDetailExamination(card_id);
        console.log('dataDetailExamination', dataDetailExamination)
    }

    return (
        <>
            {/* {dataExamination?.data && dataExamination.length > 0 ? ( */}
            <>
                <div className='card-examination' style={{ display: 'flex', width: '100%' }}>
                    {currentData.map((data) => (
                        <div key={data.id}>
                            <div style={{ margin: '0 12px 32px 0' }}>
                                <Card
                                    extra={
                                        <Button onClick={() => {
                                            setOpen(true);
                                            handleClickCard(data.id);
                                        }}>
                                            Chi tiết
                                        </Button>
                                    }
                                    
                                    title="Phiếu Khám"
                                    style={{ textAlign: 'start', cursor: 'pointer', padding: '1rem' }}
                                >
                                    <div>
                                        <h6>Ngày {formatDate(data.appointment_date)}</h6>
                                        <div>
                                            <Row>
                                                <Col span={12}>
                                                    <div style={{ textAlign: 'start' }}>
                                                        <p style={ExaminationText}>Mã phiếu</p>
                                                        <p style={ExaminationText}>Tổng cộng</p>
                                                        <p style={ExaminationText}>Trạng thái</p>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
                                                    <div style={{ textAlign: 'end' }}>
                                                        <p style={ExaminationID}>{data.id}</p>
                                                        <p style={ExaminationValues}>{data.total_cost}</p>
                                                        <p style={ExaminationValues}>{data.status}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                <Pagination
                    defaultCurrent={1}
                    total={dataExamination.length}
                    pageSize={pageSize}
                    onChange={onPageChange}
                />
            </>

            {/* Chi Tiết Thông tin Lịch Khám */}
            <Modal
                title="THÔNG TIN CHI TIẾT PHIẾU KHÁM"
                centered
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
                width={500}
            >

                <>
                    <Card>
                        <div>
                            <Row>
                                <Col span={12}>
                                    <div>
                                        <p style={ExaminationValues}>Trạng thái</p>
                                        <p style={ExaminationValues}>Trạng thái thanh toán</p>
                                        <p style={ExaminationValues}>Lý do</p>
                                    </div>
                                </Col>


                                <Col span={12}>
                                    <div>
                                        <p>{dataDetailExamination.booking_status}</p>
                                        <p>{dataDetailExamination.payment_status}</p>
                                        <p>{dataDetailExamination.patient_note}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br />
                    <Card>
                        <div>
                            <Row>
                                <Col span={12}>
                                    <div>
                                        <p style={ExaminationValues}>Ngày khám</p>
                                        <p style={ExaminationValues}>Số thứ tự</p>
                                        <p style={ExaminationValues}>Giờ khám</p>
                                        <p style={ExaminationValues}>BS CK1</p>
                                        <p style={ExaminationValues}>Chuyên khoa</p>
                                        <p style={ExaminationValues}>Tên phòng</p>
                                        <p style={ExaminationValues}>Phí khám bệnh</p>
                                    </div>
                                </Col>


                                <Col span={12}>
                                    <div>
                                        <p>{dataDetailExamination.start_time}</p>
                                        <p>{dataDetailExamination.room_name}</p>
                                        <p>
                                            {/* Display start and end times in Vietnam local time */}
                                            {extractTime(toVietnamTime(dataDetailExamination.start_time))}-{extractTime(toVietnamTime(dataDetailExamination.end_time))}
                                        </p>
                                        <p>{dataDetailExamination.dentist_name}</p>
                                        <p>{dataDetailExamination.dentist_specialty}</p>
                                        <p>Không có</p>
                                        <p>{dataDetailExamination.total_cost}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </>

            </Modal>
        </>
    )
}
export default PatientExamination