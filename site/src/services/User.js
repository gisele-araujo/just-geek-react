import api from "../api/api";

export const User = {

    async signUpUser(data) {

        if(
            !data ||
            !data.nome ||
            !data.sobrenome ||
            !data.dataNascimento ||
            !data.cpf ||
            !data.celular ||
            !data.email ||
            !data.senha 
        ) {
            throw Error('Dados insuficientes para cadastrar usuário')
        }

        try {
            const response = await api.post(`/account/register`, data)
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

    async signInUser(data) {

        if(
            !data ||
            !data.email ||
            !data.senha 
        ) {
            throw Error('Dados insuficientes para logar usuário')
        }

        try {
            const response = await api.post(`/account/login`, data)
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

    async logoutUser(id) {

        if(
            !id
        ) {
            throw Error('É necessário o id do usuário para fazer logout')
        }

        try {
            const response = await api.post(`/account/logout/${id}`)
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


    async getInfoUser(id) {
        try {
            const response = await api.get(`/account/${id}`)
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

    async getAddressesByUser(id) {
        try {
            const response = await api.get(`/addresses/address/${id}`)
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

    async putPasswordByUser(id, password) {
        try {
            const response = await api.patch(`/account/${id}?password=${password}`)
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

    async addAddressByUser(id, data) {

        try {
            const response = await api.post(`/addresses/register-address/${id}`, data)
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
}