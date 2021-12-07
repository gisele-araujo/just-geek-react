import React, { useState } from "react";
import './../../assets/css/override.css'
import styled from "styled-components";
import PostIt from './../../assets/img/conhecer-cliente.png'
import { Colors } from "../../shared/Colors";
import { Header } from "../organisms/Header";
import { Button } from '../atoms/Button';
import { Input } from "antd";
import { useHistory } from "react-router";
import { User } from "../../services/User";

const Cadastro = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [cpf, setCpf] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        const dataFormatada = new Date(dataNascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' }).replace(/\//g, '-');

        let data = {
            nome: nome,
            sobrenome: sobrenome,
            dataNascimento: dataFormatada,
            cpf: cpf,
            celular: celular,
            email: email,
            senha: senha
        }

        const response = await User.signUpUser(data)

        if (response.status) {
            console.log('cadastro realizado com sucesso!')
            alert('Cadastro realizado com sucesso! Faça login para continuar')
            setLoading(false)
            history.push('/login')
        } else {
            setLoading(false)
            alert('Erro ao cadastrar, tente novamente')
            console.log('erro ao cadastrar')
        }
    }

    return (
        <>
            <Header />
            <CadastroPage>
                <ContainerCadastro>
                    <FormCadastro onSubmit={handleSubmit}>
                        <h3>Preencha seus dados</h3>
                        <div className='double-input'>
                            <div className='input-register' style={{ marginRight: '10px' }}>
                                <label>Nome</label>
                                <Input
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    id="name"
                                    name="name"
                                    required
                                    type='text' />
                            </div>
                            <div className='input-register'>
                                <label>Sobrenome</label>
                                <Input
                                    value={sobrenome}
                                    onChange={e => setSobrenome(e.target.value)}
                                    id="sobrenome"
                                    name="sobrenome"
                                    required
                                    type='text' />
                            </div>
                        </div>
                        <div className='double-input'>
                            <div className='input-register' style={{ marginRight: '10px' }}>
                                <label>CPF</label>
                                <Input
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                    id="cpf"
                                    name="cpf"
                                    required
                                    type='text' />
                            </div>
                            <div className='input-register'>
                                <label>Data de nascimento</label>
                                <Input
                                    value={dataNascimento}
                                    onChange={e => setDataNascimento(e.target.value)}
                                    id="dataNascimento"
                                    name="dataNascimento"
                                    required
                                    type='date' />
                            </div>
                        </div>
                        <div className='input-register'>
                            <label>Email</label>
                            <Input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                required
                                type='email' />
                        </div>
                        <div className='input-register'>
                            <label>Telefone</label>
                            <Input
                                value={celular}
                                onChange={e => setCelular(e.target.value)}
                                id="celular"
                                name="celular"
                                required
                                type='text' />
                        </div>
                        <div className='input-register'>
                            <label>Senha</label>
                            <Input
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                id="senha"
                                name="senha"
                                required
                                type='password' />
                        </div>
                        <Button style={{ width: '100%', margin: '30px 0' }} contentText='CRIAR CONTA' type="submit" loading={loading} />
                        <span className='options-register'>Já possui uma conta? <u onClick={() => history.push('/login')}>Acesse!</u></span>
                    </FormCadastro>
                </ContainerCadastro>
                <ImgPostIt>
                    <img src={PostIt} />
                </ImgPostIt>
            </CadastroPage>
        </>
    )
}

export default Cadastro;

const CadastroPage = styled.div`
padding-top: 68px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
width: 100%;
min-height: 100vh;
display: flex;

@media(min-width: 768px) {
    padding-top: 82px;
}
`
const ContainerCadastro = styled.div`
display: flex;
justify-content: center;
width: 55%;
height: 100%;
background-color: ${Colors.gray.dark};
font-family: 'Exo 2', sans-serif;
padding: 50px 0;


@media(max-width: 768px) {
width: 100%;
padding: 50px 20px;
}
`

const FormCadastro = styled.form`
max-width: 491px;

label {
    color: ${Colors.gray.white};
    font-size: 16px;
    display: inline-block;
    padding-bottom: 5px;
}

h3 {
    color: ${Colors.gray.white};
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 25px;
}

.input-register {
    padding: 10px 0;
    flex-grow: 1;
}

.options-register {
    color: ${Colors.blue.light};
    font-size: 16px;
    font-weight: 400;

    u {
        color: #E9E9E9;
        cursor: pointer;
    }
}

.double-input {
    display: flex;
    flex-direction: row;

    .input-register {
        width: 50%;
    }
}


@media(max-width: 768px) {
    max-width: 100%;
}
`

const ImgPostIt = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;

img {
        width: 450px;
        animation: animate-img-register 0.5s ease-in-out;
    }

@keyframes animate-img-register {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media(max-width: 768px) {
    width: 0;
    img {
        display: none;
    }
}
`


