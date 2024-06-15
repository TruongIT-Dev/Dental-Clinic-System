import axios from '../ultils/axios-custom';


// Đăng nhập && Đăng ký
export const GetSignUp = (email, full_name, phone_number, password) => {
    return axios.post('/api/v1/users',
        {
            email: email,
            full_name: full_name,
            phone_number: phone_number,
            password: password,
        })
}
export const GetLogin = (email, password) => {
    return axios.post('/api/v1/users/login',
        {
            email: email,
            password: password,
        })
}

// View Trang Category
export const DoViewCategory = () => {
    return axios.get('/api/v1/service-categories');
}

// Liệt Kê Lịch Khám Trong Ngày
export const DoListScheduleExamination = (date, category_id) => {
    return axios.get(`/api/v1/schedules/examination?date=${date}&service_category_id=${category_id}`);

}

// Đặt Lịch Khám
export const DoAppointment = (examination_schedule_id, patient_note, payment_id) => {
    return axios.post('/api/v1/patients/appointments/examination',
        {
            examination_schedule_id: examination_schedule_id,
            patient_note: patient_note,
            payment_id: payment_id,
        }
    )
}

// Liệt kê Phương thức thanh toán
export const DoListPayment = () => {
    return axios.get('/api/v1/payment-methods');
}

// Show Thông tin của 1 Phiếu khám khám
export const DoViewExaminationAppointment = () => {
    return axios.get('/api/v1/patients/appointments/examination')
}

// Show Thông tin chi tiết của 1 Phiếu khám
export const DoViewDetailExamination = (card_id) => {
    return axios.get(`/api/v1/patients/appointments/examination/${card_id}`);
}