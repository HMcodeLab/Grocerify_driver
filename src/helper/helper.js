import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:8080';

/** To get data from Token */
export async function getDataFromToken(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwtDecode(token)
    return decode;
}

/** get User details */
export async function getDeliveryboy({ email }){
    try {
        const { data } = await axios.get(`/api/deliveryboy`, {params:{
            email
        }});
        return { data };
    } catch (error) {
        return { error : "User not found!"}
    }
}

export async function deliveryboyLoginWithEmail({email, password}){
    try {
        if(email){
            const { data } = await axios.post('/api/deliveryboyLoginWithEmail', {email, password})
            return ({ data });
        }
    } catch (error) {
        return ({ error : "Password doesn't Match...!"})
    }
}

export async function authenticatedeliveryboy({ mobile }){
    console.log(mobile);
    try {
        if(mobile){
            return await axios.post('/api/authenticatedeliveryboy', { mobile })
        }
    } catch (error) {
        return ({ error : "Deliveryboy Not Found."})
    }
}

export async function sendMobileOTP({mobile}) {
    try {
        if(mobile){
            return await axios.post('/api/generateMobileOTP', { mobile })
        }
    } catch (error) {
        return ({ error : "Failed sending OTP"})
    }
}

export async function verifyDeliveryboyLoginMobileOTP({mobile, otp}) {
    try {
        if (mobile) {
            const { data } = await axios.post('/api/verifyDeliveryboyLoginMobileOTP', {mobile, otp})
            return Promise.resolve({ data })
        }
    } catch (error) {
        return Promise.reject({ error : "Wrong OTP!"})
    }
}