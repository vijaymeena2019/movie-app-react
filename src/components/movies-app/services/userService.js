import http from "../../services/httpService";
import config from '../../config/config.json';
import jwtDecode from 'jwt-decode';

const apiUser = config.apiUrl + '/users';
const apiAuth = config.apiUrl + "/auth";

// Single direction of dependences
http.setJwt(getJwt());

export async function register (registerUser) {
    const { headers } = await http.post(apiUser, registerUser);
    const jwt = headers['x-auth-token'];
    localStorage.setItem("token", jwt);
}

export function auth (userCredential) {
    return http.post(apiAuth, userCredential )
}

export function logout () {
    localStorage.removeItem("token");
}


export async function login ({email, password}) {
    const { data: jwt} = await http.post(apiAuth, { email, password})
    localStorage.setItem("token", jwt);
}

export function getJwt () {
    return localStorage.getItem('token');
}



export function getCurrentUser () {
    try {
        const jwt = localStorage.getItem("token");
        // Need to decode , - npm i jwt-decode
        return jwtDecode(jwt);
        }
        catch (ex) {
            return null;
        }
}

