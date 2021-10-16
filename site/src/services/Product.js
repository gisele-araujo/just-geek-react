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

}