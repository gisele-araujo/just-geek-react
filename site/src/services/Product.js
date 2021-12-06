import api from "../api/api";

export const Product = {

    async getAllProducts() {
        try {
            const response = await api.get(`/filter/all-the-products`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async getMostPopularProducts() {
        try {
            const response = await api.get(`/filter/most-popular`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async getPromotionProducts() {
        try {
            const response = await api.get(`/filter/promotion`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async getProduct(id) {
        try {
            const response = await api.get(`/filter/product/${id}`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async getSimilarProducts(id) {
        try {
            const response = await api.get(`/filter/similar/${id}`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async calculateShipping(cep) {

        try {
            const response = await api.post(`/products/frete/${cep}`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async addProductBag(user, product, quantity, size) {

        try {
            const response = await api.post(`/products/add-product/${user}/${product}/${quantity}/${size}`)
            return {
                status: response.status
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async getProductsBag(idUser) {
        try {
            const response = await api.get(`/purchases/${idUser}`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },

    async getCoupon(coupon) {
        try {
            const response = await api.get(`/coupons/${coupon}`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },
}