import axios from '../ultils/axios-custom';

// ********************************* GUEST ********************************
// Đăng ký
export const GetSignUp = (email, full_name, phone_number, password) => {
    return axios.post('/api/v1/patients',
        {
            email: email,
            full_name: full_name,
            phone_number: phone_number,
            password: password,
        })
}
// Đăng Nhập
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

// Api View trang Chi tiết Dịch vụ
export const DoViewDetailCategory = (slug) => {
    return axios.get(`/api/v1/service-categories/${slug}`);
}

// API View Table Chi tiết Dịch vụ
export const DoViewTableDetailService = (slug) => {
    return axios.get(`/api/v1/services?category=${slug}`)
}


// ********************************* PATIENT ********************************
// Liệt Kê Lịch Khám Trong Ngày
export const DoListSchedule = (date, patient_id) => {
    return axios.get(`/api/v1/schedules/examination/available?date=${date}&patient_id=${patient_id}`);

}

// Đặt Lịch Khám
export const DoAppointment = (examination_schedule_id, service_category_id) => {
    return axios.post('/api/v1/patients/appointments/examination',
        {
            examination_schedule_id: examination_schedule_id,
            service_category_id: service_category_id,
        }
    )
}

// Show Thông tin của 1 Phiếu khám khám
export const DoViewExaminationAppointment = () => {
    return axios.get('/api/v1/patients/appointments/examination')
}

// Show Thông tin chi tiết của 1 Phiếu khám
export const DoViewDetailExamination = (card_id) => {
    return axios.get(`/api/v1/patients/appointments/examination/${card_id}`);
}

//************************************************************************************** */
//************************************API ADMIN***************************************** */

// ****************************Quản Lý Loại Hình Dịch Vụ**********************************


// View - Lấy Tất Cả Thông Tin Loại Hình Dịch Vụ
export const DoViewCategoryByAdmin = () => {
    return axios.get('/api/v1/service-categories');
}

// View - Lấy Thông Tin Chi tiết Của 1 Loại Hình Dịch Vụ
export const DoViewDetailCategoryByAdmin = (slug) => {
    return axios.get(`/api/v1/service-categories/${slug}`)
}

// Update - Cập nhật thông tin của 1 Loại hình dịch vụ
export const DoUpdateCategoryByAdmin = (id, name, icon_url, banner_url, description) => {
    return axios.put(`/api/v1/service-categories/${id}`,
        {
            name: name,
            icon_url: icon_url,
            banner_url: banner_url,
            description: description,
        }
    )
}

// Delete - Xóa 1 Loại hình dịch vụ
export const DoDeleteCategoryByAdmin = (id_delete) => {
    return axios.delete(`/api/v1/service-categories/${id_delete}`)
}

// Add - Thêm mới 1 Loại hình dịch vụ
export const DoAddCategoryByAdmin = (banner_url, description, icon_url, name) => {
    return axios.post(`/api/v1/service-categories`,
        {
            banner_url: banner_url,
            description: description,
            icon_url: icon_url,
            name: name,
        }
    )
}

// Search - Tìm kiếm Loại hình dịch vụ theo Tên
export const DoSearchCategoryByAdmin = (name) => {
    return axios.get(`/api/v1/service-categories?q=${name}`)
}


// ************************Quản Lý Chi Tiết Dịch Vụ************************

// View - Liệt kê tất cả Dịch vụ của 1 Category
export const DoViewDataServiceByAdmin = (slug) => {
    return axios.get(`/api/v1/services?category=${slug}`)
}

// Search - Tìm kiếm 1 Dịch vụ
export const DoSearchServiceByAdmin = (slug, name) => {
    return axios.get(`/api/v1/services?category=${slug}&q=${name}`);
}

// View detail - Liệt kê tất cả Thông tin của 1 Dịch vụ
export const DoViewDetailServiceByAdmin = (id) => {
    return axios.get(`/api/v1/services/${id}`);
}

// Delete - Xóa 1 Dịch vụ
export const DoDeleteDataServiceByAdmin = (id) => {
    return axios.delete(`/api/v1/services/${id}`);
}

// Add - Thêm mới 1 Dịch vụ
export const DoAddNewServiceByAdmin = (category_id, cost, name, unit, warranty_duration) => {
    return axios.post(`/api/v1/services`,
        {
            category_id: category_id,
            cost: cost,
            name: name,
            unit: unit,
            warranty_duration: warranty_duration
        }
    )
}

// Update - Chỉnh sửa 1 Dịch vụ
export const DoUpdateServiceByAdmin = (id, name, cost, unit, warranty_duration) => {
    return axios.put(`/api/v1/services/${id}`, {
        name: name,
        cost: cost,
        unit: unit,
        warranty_duration: warranty_duration,
    })
}

// *******************************Quản Lý Nha Sĩ******************************

//Search và View Quản Lý Nha Sĩ
export const DoViewAllDentistByAdmin = (name) => {
    return axios.get(`/api/v1/dentists?q=${name}`);
}

// View Thông tin Info của 1 Dentist
export const DoViewInfoDentistByAdmin = (id) => {
    return axios.get(`/api/v1/dentists/${id}`);
}

// Lấy danh sách chuyên môn Nha sĩ
export const DoViewSpecialityByAdmin = () => {
    return axios.get('/api/v1/specialties')
}

// API Tạo Tài khoản Nha sĩ
export const DoAddNewDentistByAdmin = (email, full_name, phone_number, date_of_birth, gender, specialty_id, password) => {
    return axios.post(`/api/v1/dentists`, {
        email: email,
        full_name: full_name,
        phone_number: phone_number,
        date_of_birth: date_of_birth,
        gender: gender,
        specialty_id: specialty_id,
        password: password,

    })
}

// Delete 1 Nha sĩ
export const DoDeleteDentistByAdmin = (dentist_id) => {
    return axios.delete(`/api/v1/dentists/${dentist_id}`);
}


// **************************Quản Lý Lịch Khám*******************************

// API View toàn bộ Lịch Khám
export const DoViewAllExaminationByAdmin = () => {
    return axios.get('/api/v1/schedules/examination');
}

// API List Danh sách Nha sĩ
export const DoListAllDentistByAdmin = () => {
    return axios.get('/api/v1/dentists')
}

// API List Danh sách các số phòng khám
export const DoListAllRoomByAdmin = () => {
    return axios.get('/api/v1/rooms')
}

// APi Tạo Lịch khám bởi Admin
export const DoAddNewExaminationByAdmin = (dentist_id, room_id, start_time, end_time) => {
    return axios.post('/api/v1/schedules/examination', {
        dentist_id: dentist_id,
        room_id: room_id,
        start_time: start_time,
        end_time: end_time,
    })
}



// **************************Quản Lý Phòng Khám*******************************

// API View Danh sách các Phòng khám
export const DoViewAllRoomsByAdmin = () => {
    return axios.get('/api/v1/rooms')
}

// API Add thêm 1 Phòng khám mới
export const DoAddNewRoomByAdmin = (name) => {
    return axios.post('/api/v1/rooms', {
        name: name,
    })
}