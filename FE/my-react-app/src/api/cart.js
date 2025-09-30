import axios from 'axios'
import { ADD_TO_CART, CHECKOUT_CART, GET_ALL_PRODUCTS, GET_CART, VALIDATE_VOUCHER } from '../constant/paths'

export const getAllProducts = async () => {
    const response = await axios.get(GET_ALL_PRODUCTS)
    return response.data
}

export const getCart = async () => {
    const response = await axios.get(GET_CART)
    return response.data
}

export const addToCart = async (product) => {
    const response = await axios.put(ADD_TO_CART, {
        payload: product
    })
    return response.data
}

export const checkoutCart = async () => {
    const response = await axios.post(CHECKOUT_CART)
    return response.data
}

export const validateVoucher = async (voucher) => {
    const response = await axios.post(VALIDATE_VOUCHER, {
        payload: voucher
    })
    return response.data
}