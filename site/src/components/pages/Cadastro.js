import React from "react";
import './style.css'
import styled from "styled-components";
import PostIt from './../../assets/conhecer-cliente.png'
import { Colors } from "../../shared/Colors";
import { Header } from "../molecules/Header";
import { Button } from '../atoms/Button';
import { Input } from "antd";
import { useHistory } from "react-router";

const Cadastro = () => {
    const history = useHistory()

    return (
        <>
            <Header />
            <CadastroPage>
                <ContainerCadastro>
                    <FormCadastro>
                        <h3>Preencha seus dados</h3>
                        <div className='double-input'>
                            <div className='input-register' style={{ marginRight: '10px' }}>
                                <label>Nome</label>
                                <Input type='text' />
                            </div>
                            <div className='input-register'>
                                <label>Sobrenome</label>
                                <Input type='text' />
                            </div>
                        </div>
                        <div className='double-input'>
                            <div className='input-register' style={{ marginRight: '10px' }}>
                                <label>CPF</label>
                                <Input type='text' />
                            </div>
                            <div className='input-register'>
                                <label>Data de nascimento</label>
                                <Input type='date' />
                            </div>
                        </div>
                        <div className='input-register'>
                            <label>Email</label>
                            <Input type='email' />
                        </div>
                        <div className='input-register'>
                            <label>Telefone</label>
                            <Input type='text' />
                        </div>
                        <div className='input-register'>
                            <label>Senha</label>
                            <Input type='password' />
                        </div>
                        <Button style={{ width: '100%', margin: '30px 0' }} contentText='CRIAR CONTA' />
                        <span className='options-register'>Já possui uma conta? <u onClick={() => history.push('/register')}>Acesse!</u></span>
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
padding-top: 85px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
width: 100%;
min-height: 100vh;
display: flex;
`
const ContainerCadastro = styled.div`
display: flex;
justify-content: center;
width: 55%;
height: 100%;
background-color: ${Colors.gray.dark};
font-family: 'Exo 2', sans-serif;
padding: 50px 0;
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
`
    

