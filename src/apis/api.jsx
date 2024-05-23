import axios from '../ultils/axios-custom';

export const GetSignUp = (email, full_name, password, phone_number) => {
    return axios.post('/api/v1/users',
        {
            email: email,
            full_name: full_name,
            password: password,
            phone_number: phone_number,
        })
}