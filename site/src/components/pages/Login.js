import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { Header } from "../molecules/Header";
import { Button } from '../atoms/Button';
import { Input } from "antd";
import { useHistory } from "react-router";

const Login = () => {

    const history = useHistory()
    return (
        <>
            <Header />
            <CadastroPage>
                <ContainerLogin>
                    <FormLogin>
                        <h3>Bem vindo de volta :)</h3>
                        <div className='input-login'>
                            <label>Email</label>
                            <Input type='email' />
                        </div>
                        <div className='input-login'>
                            <label>Senha</label>
                            <Input type='password' />
                        </div>
                        <span className='options-login'>Esqueci minha senha</span>
                        <Button style={{ width: '100%', margin: '30px 0' }} contentText='ENTRAR' />
                        <span className='options-login'>Não possui uma conta? <u onClick={() => history.push('/cadastro')}>Cadastre-se!</u></span>
                    </FormLogin>
                </ContainerLogin>
            </CadastroPage>
        </>
    )
}

export default Login;

const CadastroPage = styled.div`
padding-top: 85px;
background-color: ${Colors.gray.darkPurple};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Exo 2', sans-serif;

`

const ContainerLogin = styled.div`
width: 550px;
height: 500px;
background-color: ${Colors.gray.medium};
border-radius: 5px;
border-bottom: 4px solid ${Colors.pink.hot};
border-right: 4px solid ${Colors.pink.hot};
padding: 40px 80px;
transition: 0.5s all;
animation: animate-box 1s ;

@keyframes animate-box {
    from {
        position: absolute;
        bottom: 100px;
        opacity: 0;
    }

    to {
        bottom: 0;
        opacity: 1;
    }
}
`

const FormLogin = styled.form`
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

.input-login {
    padding: 10px 0;

    .ant-input {
        font-size: 16px;
        height: 37px;
        background-color: #E9E9E9;
    }
}

.options-login {
    color: ${Colors.blue.light};
    font-size: 16px;
    font-weight: 400;

    u {
        color: #E9E9E9;
        cursor: pointer;
    }
}
`