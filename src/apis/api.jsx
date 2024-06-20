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

// Api chuyển tới trang Chi tiết Dịch vụ
export const DoViewDetailCategory = (slug) => {
    return axios.get(`/api/v1/service-categories/${slug}`);
}

export const DoViewTableDetailService = (slug) => {
    return axios.get(`/api/v1/service-categories/${slug}/services`)
}

// Liệt Kê Lịch Khám Trong Ngày
export const DoListSchedule = (date) => {
    return axios.get(`/api/v1/schedules/examination?date=${date}`);

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

//************************************************************************************** */
//************************************API ADMIN***************************************** */

// Quản Lý Dịch vụ

// Loại hình dịch vụ API

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
    return axios.patch(`/api/v1/service-categories/${id}`,
        {
            id: id,
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

// ************************************************************************************

// Chi tiết Dịch vụ API

// View - Lấy Thông tin của 1 Dịch vụ 
export const DoViewDataServiceByAdmin = (slug) => {
    return axios.get(`/api/v1/service-categories/${slug}/services`)
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

// Quản Lý Nha Sĩ
export const DoViewAllDentistByAdmin = () => {
    return axios.get('/api/v1/dentists');
}
