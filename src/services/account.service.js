import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8082/";
export const GetUserDetails = () => {
    return axios.get(API_URL + "GetUserDetails", {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const UpdateUserDetails = (body) => {
    return axios.post(API_URL + "UpdateUserDetails", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const UpdateUserRating = (body) => {
    return axios.post(API_URL + "SaveProductRating", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const ValidateZipCode = (body) => {
    return axios.post(API_URL + "CheckPinCodeValid", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const ChangeUserPassword = (body) => {
    return axios.post(API_URL + "ChangePassword", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const GetUserAddress = () => {
    return axios.get(API_URL + "GetUserAddress", {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const GetUserOrders = () => {
    return axios.get(API_URL + "order", {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const SaveUserAddress = (body) => {
    return axios.post(API_URL + "SaveUserAddress", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
