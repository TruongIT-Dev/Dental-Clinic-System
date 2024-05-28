import axios from '../ultils/axios-custom';

export const GetSignUp = (full_name, email, password, phone_number) => {
    return axios.post('/api/v1/users',
        {
            full_name: full_name,
            email: email,
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