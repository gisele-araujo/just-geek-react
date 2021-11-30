import api from "../api/api";

export const Artist = {

    async getAllArtists() {
        try {
            const response = await api.get(`/artists`)
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

    async getSimilarArtists(id) {
        try {
            const response = await api.get(`/artists/similar/${id}`)
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

    async getArtist(id) {
        try {
            const response = await api.get(`/artists/${id}`)
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

    async getAllArtsByArtist(id) {
        try {
            const response = await api.get(`/artist-image/images/${id}`)
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

    async getPhotoArtist(endpoint) {
        try {
            const response = await api.get(`${endpoint}`)
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