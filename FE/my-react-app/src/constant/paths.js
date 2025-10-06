const BASE_URL = import.meta.env.VITE_BASE_URL

export const GET_ALL_PRODUCTS = `${BASE_URL}/api/products`
export const GET_CART = `${BASE_URL}/getCart`
export const ADD_TO_CART = `${BASE_URL}/addToCart`
export const CHECKOUT_CART = `${BASE_URL}/checkoutCart`
export const VALIDATE_VOUCHER = `${BASE_URL}/validateVoucher`