import { Card, Row, Col, Button, notification } from 'antd';
import { useEffect, useState } from 'react';
import { Modal, Pagination, Empty } from 'antd';
import { DoViewDetailTreatmentByPatient, DoViewTreatmentByPatient } from '../../../apis/api';
import dayjs from 'dayjs';


// CSS
const ExaminationText = {
    color: '#999999	',
    marginBottom: '8px',
}

const ExaminationDetailText = {
    color: '#0033FF',
    marginBottom: '8px',
}

const ExaminationID = {
    color: '#FF6A6A',
    marginBottom: '8px',
}

const ExaminationValues = {
    marginBottom: '8px',
    color: '#000',
}


const PatientTreatment = () => {
    // Modal - Detail Patient Info
    const [open, setOpen] = useState(false);

    // API Examination Appointment
    const [dataTreatment, setDataTreatment] = useState([]);
    const [dataDetailTreatment, setDataDetailTreatment] = useState([]);
    // console.log("dataDetailTreatment", dataDetailTreatment)
    const [cancelSchedule, setCancelSchedule] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3; // Number of items per page

    // Handle page change
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the data to be displayed on the current page
    const currentData = dataTreatment.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log("currentData", currentData)

    const formatCurrency = (amount) => {
        // Check if amount is a number
        if (isNaN(amount)) {
            return "Invalid amount";
        }
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
    }

    const extractTime = (utcTime) => {
        const vietnamTime = dayjs(utcTime).tz('Asia/Ho_Chi_Minh');
        return vietnamTime.local().format('HH:mm');
    };

    // Hàm Date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Ensure leading zeros if day or month is single digit
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
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
    const fetchTreatmentByPatient = async () => {
        try {
            const ApiTreatment = await DoViewTreatmentByPatient();
            const dataAPITreatment = ApiTreatment?.data || [];
            setDataTreatment(dataAPITreatment);
        } catch (error) {
            console.log("Lỗi View Danh sách Treatment", error)
        }
    }
    useEffect(() => {
        fetchTreatmentByPatient();
    }, [])


    // Giao tiếp API - Show Thông tin chi tiết của 1 Phiếu Khám
    const fetchDetailTreatment = async (id) => {
        try {
            const ApiDetailTreatment = await DoViewDetailTreatmentByPatient(id);
            // console.log("ApiDetailTreatment", ApiDetailTreatment)
            const GetDataDetailTreatment = ApiDetailTreatment?.data || {};
            setDataDetailTreatment(GetDataDetailTreatment);
        } catch (error) {
            console.log("Lỗi Detail Treatment: ", error);
        }
    }

    // Nút Xem Chi tiết Phiếu khám
    const handleClickCard = (id) => {
        fetchDetailTreatment(id);
    }
    return (
        <>
            {dataTreatment.length > 0 ? (
                <>
                    <div className='content'>
                        <div className='card-treatment' style={{ display: 'flex', width: '100%', marginBottom: '2rem' }}>
                            {currentData.map((data) => (
                                <div key={data.id}>
                                    <div style={{ marginRight: '12px', minWidth: '250px' }}>
                                        <Card
                                            extra={
                                                <Button
                                                    type='primary'
                                                    ghost
                                                    onClick={() => {
                                                        setOpen(true);
                                                        handleClickCard(data.id);
                                                    }}
                                                    style={{ marginLeft: '1rem' }}
                                                >
                                                    Chi tiết
                                                </Button>
                                            }

                                            title="Phiếu điều trị"
                                            style={{ width: 300, textAlign: 'start', padding: '1rem' }}
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
                                                                <p style={ExaminationValues}>{formatCurrency(data.total_cost)}</p>
                                                                <p style={{ ...ExaminationValues, color: data.status === "Đã hủy" ? "red" : "green" }}>
                                                                    {data.status}
                                                                </p>
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
                        {dataTreatment.length >= 3 && (
                            <Pagination
                                defaultPageSize={1}
                                total={dataTreatment.length}
                                pageSize={pageSize}
                                onChange={onPageChange}
                            />
                        )}
                    </div>
                </>
            ) : (
                <div>
                    <Empty description="Không có lịch để hiển thị" />
                </div>
            )

            }

            {/* Chi Tiết Thông tin Lịch Khám */}
            <Modal
                title="THÔNG TIN CHI TIẾT PHIẾU ĐIỀU TRỊ"
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
                                        <p style={ExaminationDetailText}>Trạng thái</p>
                                        <p style={ExaminationDetailText}>Trạng thái thanh toán</p>
                                    </div>
                                </Col>


                                <Col span={12}>
                                    <div>
                                        <p style={ExaminationValues}>{dataDetailTreatment.booking_status}</p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.payment_status}</p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.patient_note}</p>
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
                                        <p style={ExaminationDetailText}>Ngày</p>
                                        <p style={ExaminationDetailText}>Phòng</p>
                                        <p style={ExaminationDetailText}>Thời gian</p>
                                        <p style={ExaminationDetailText}>Nha sĩ</p>
                                        <p style={ExaminationDetailText}>Dịch vụ điều trị</p>
                                        <p style={ExaminationDetailText}>Phí điều trị</p>
                                        <p style={ExaminationDetailText}>Số lượng</p>
                                        <p style={ExaminationDetailText}>Tổng cộng</p>
                                    </div>
                                </Col>


                                <Col span={12}>
                                    <div>
                                        <p style={ExaminationValues}>{formatDate(dataDetailTreatment.start_time)}</p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.room_name}</p>
                                        <p style={ExaminationValues}>
                                            {/* Display start and end times in Vietnam local time */}
                                            {extractTime(dataDetailTreatment.start_time)}-{extractTime(dataDetailTreatment.end_time)}
                                        </p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.dentist_name}</p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.service}</p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.dentist_specialty}</p>
                                        <p style={ExaminationValues}>{formatCurrency(dataDetailTreatment.service_cost)}</p>
                                        <p style={ExaminationValues}>{dataDetailTreatment.service_quantity}</p>
                                        <p style={ExaminationValues}>{formatCurrency(dataDetailTreatment.total_cost)}</p>
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
export default PatientTreatment