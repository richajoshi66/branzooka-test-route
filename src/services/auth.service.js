import axios from "axios";

const API_URL = "http://localhost:8082/user/";
const register = (first_name, last_name, email, password) => {
    return axios.post(API_URL + "register", {
        first_name,
        last_name,
        email,
        phone_number: '',
        password,
    });
};
const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
const forgotPassword = (email) => {
    return axios
        .post(API_URL + "forgot-password", {
            email
        })
        .then((response) => {
            return response.data;
        }).catch(err => err);
};
const resetPassword = (email, password) => {
    return axios
        .post(API_URL + "reset-password", {
            email, password
        })
        .then((response) => {
            return response.data;
        }).catch(err => err);
};
const logout = () => {
    localStorage.removeItem("user");
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    forgotPassword,
    resetPassword,
    logout,
    getCurrentUser,
};
