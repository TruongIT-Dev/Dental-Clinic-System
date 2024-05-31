import axios from '../ultils/axios-custom';

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
    return axios.post('/api/v1/users/login', {
        email: email,
        password: password,
    })
}