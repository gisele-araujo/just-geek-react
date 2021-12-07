import api from "../api/api";

export const Search = {
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
    async getProductsBySearch(search) {
        try {
            const response = await api.get(`/filter/search/?search=${search}`)
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