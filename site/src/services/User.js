import axios from "axios";
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
    }
}