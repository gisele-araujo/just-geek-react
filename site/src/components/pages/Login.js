import React, { useEffect, useState } from "react";
import './../../assets/css/override.css'
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { Header } from "../organisms/Header";
import { Button } from '../atoms/Button';
import { Input, Modal } from "antd";
import { useHistory } from "react-router";
import { User } from "../../services/User";

const Login = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [textModal, setTextModal] = useState('')

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        let data = {
            email: email,
            senha: senha
        }

        const response = await User.signInUser(data)

        if (response.status) {
            setLoading(false)
            sessionStorage.setItem('idUser', response.data.idUsuario)
            sessionStorage.setItem('username', response.data.nome)
            history.push('/perfil')
        } else {
            setTextModal('Email ou senha incorretos. Tente novamente')
            showModal()
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <CadastroPage>
                <ContainerLogin>
                    <FormLogin onSubmit={handleSubmit}>
                        <h3>Bem vindo de volta :)</h3>
                        <div className='input-login'>
                            <label>Email</label>
                            <Input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                required
                                type='email' />
                        </div>
                        <div className='input-login'>
                            <label>Senha</label>
                            <Input
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                id="senha"
                                name="senha"
                                required
                                type='password' />
                        </div>
                        <span className='options-login'>Esqueci minha senha</span>
                        <Button style={{ width: '100%', margin: '30px 0' }} contentText='ENTRAR' loading={loading} />
                        <span className='options-login'>Não possui uma conta? <u onClick={() => history.push('/cadastro')}>Cadastre-se!</u></span>
                    </FormLogin>
                </ContainerLogin>
                <Modal width={400} centered={true} bodyStyle={bodyModal} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>{textModal}</p>
                    <Button primary={false} contentText='Tentar novamente' size="small" style={{ width: '100%' }} onClick={handleCancel} />
                </Modal>
            </CadastroPage>
        </>
    )
}

export default Login;

const CadastroPage = styled.div`
padding-top: 68px;
background-color: ${Colors.gray.darkPurple};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Exo 2', sans-serif;

@media(min-width: 768px) {
    padding-top: 82px;
}
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
        bottom: 0px;
        opacity: 1;
    }
}


@media(max-width: 768px) {
padding: 40px 20px;
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

const bodyModal = {
    backgroundColor: Colors.gray.light,
    color: Colors.gray.white,
    fontSize: '18px',
    padding: '50px',
    textAlign: 'center',
}