import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8082/";
export const addUpdateCart = (body) => {
    return axios.post(API_URL + "addToCart", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data);
};
export const checkoutPayment = (body) => {
    return axios.post(API_URL + "Checkout", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data)
        .catch(err => err.response);
};
export const placeOrder = (body) => {
    return axios.post(API_URL + "order", body, {headers: authHeader()})
        .then(response => response)
        .then(response => response.data)
        .catch(err => err.response);
};
