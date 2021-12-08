import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { Header } from "../../organisms/Header"
import { Button } from '../../atoms/Button';
import { Menu, Modal } from 'antd';
import {
    SkinOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { createElement, useState } from "react";
import { Route, useHistory } from "react-router";
import Settings from "./Settings";
import MyAddresses from "./MyAddresses";
import SetPassword from "./SetPassword";
import MyFavorites from "./MyFavorites";
import { User } from "../../../services/User";
import { FormAddress } from "../../organisms/FormAddress";

const { SubMenu } = Menu;

const Profile = () => {
    const history = useHistory()
    const idUser = sessionStorage.getItem('idUser')
    const [collapsed, setCollapsed] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    const logout = async (e) => {
        e.preventDefault()

        setLoading(true)

        const response = await User.logoutUser(idUser)

        if (response.status) {
            console.log('logout realizado com sucesso!')
            setLoading(false)
            sessionStorage.clear()
            history.push('/')
        } else {
            console.log('erro ao logout')
        }
    }

    return (
        <>
            <Header />
            <UserProfile>
                <SidebarProfile
                    collapsed={collapsed}>
                    <div>
                        <button className="toggle-mobile" type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </button>
                        <Menu
                            defaultOpenKeys={['sub1', 'sub2']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Minha Conta">
                                <Menu.Item key="1" onClick={() => {
                                    if (window.screen.width <= 768) setCollapsed(true)
                                    history.push('/perfil')
                                }}>Dados pessoais</Menu.Item>
                                <Menu.Item key="2" onClick={() => {
                                    if (window.screen.width <= 768) setCollapsed(true)
                                    history.push('/perfil/meus-enderecos')
                                }}>Endereços</Menu.Item>
                                <Menu.Item key="3" onClick={() => {
                                    if (window.screen.width <= 768) setCollapsed(true)
                                    history.push('/perfil/alterar-senha')
                                }}>Alterar senha</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<SkinOutlined />} title="Minhas Compras">
                                <Menu.Item key="5">Acompanhar pedidos</Menu.Item>
                                <Menu.Item key="6" onClick={() => {
                                    if (window.screen.width <= 768) setCollapsed(true)
                                    history.push('/perfil/favoritos')
                                }}>Meus favoritos</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>

                    <div className="box-button-exit">
                        <Button onClick={showModal} primary={false} size="small" contentText="Sair" style={{ width: '100%' }} />
                    </div>
                </SidebarProfile>
                <PageProfile
                    collapsed={collapsed}>
                    <Route exact path='/perfil' component={Settings} />
                    <Route path='/perfil/meus-enderecos' component={MyAddresses} />
                    <Route path='/perfil/adicionar-endereco' component={FormAddress} />
                    <Route path='/perfil/alterar-senha' component={SetPassword} />
                    <Route path='/perfil/favoritos' component={MyFavorites} />
                </PageProfile>
            </UserProfile>
            <ModalContainer>
                <Modal width={400} centered={true} bodyStyle={bodyModal} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Tem certeza que deseja sair?</p>
                    <Button loading={loading} onClick={logout} action='negative' primary={false} contentText='Sim, fazer logout' style={{width: "100%"}} size="small" />
                    <Button primary={false} contentText='Não' style={{width: "100%", marginTop: "16px"}} size="small" onClick={handleCancel} />
                </Modal>
            </ModalContainer>
        </>
    )
}

export default Profile

const UserProfile = styled.section`
font-family: 'Exo 2', sans-serif;
padding-top: 68px;
background-color: ${Colors.gray.dark};
width: 100%;
height: 100vh;
overflow-y: hidden;
display: flex;

@media(min-width: 768px) {
    padding-top: 83px;
}
`

const SidebarProfile = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: ${props => props.collapsed ? '50px' : '100%'};
height: 100%;
background-color: ${Colors.gray.darkPurple};
transition: all 0.5s;

.ant-menu.ant-menu-inline-collapsed {
    width: 100%;
}

.ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    color: rgba(255, 255, 255, 0.65);
    background: ${Colors.gray.darkPurple};
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${Colors.purple.dark};
}

.box-button-exit {
    padding: 20px;
    display: ${props => props.collapsed ? 'none' : 'block'};
}
.toggle-mobile {
    background-color: ${Colors.gray.ultraLight};
    border: none;
    padding: 6px 0;
    width: 100%;
}

@media(min-width: 768px) {
width: 25%;
.toggle-mobile {
display: none;
}
}
`

const PageProfile = styled.section`
display: ${props => props.collapsed ? 'block' : 'none'};
width: 100%;
overflow-y: scroll;
padding: 20px;

&::-webkit-scrollbar-track {
    background-color: #6c6674;
}
&::-webkit-scrollbar {
    width: 6px;
    background: #4c4852;
}
&::-webkit-scrollbar-thumb {
    background: #4c4852;
}

@media(min-width: 768px) {
    display: block;
    width: 75%;
    padding: 40px;
}
`

const ModalContainer = styled.div`
font-family: 'Exo 2', sans-serif;
`

const bodyModal = {
    backgroundColor: Colors.gray.light,
    color: Colors.gray.white,
    fontSize: '18px',
    padding: '50px',
    textAlign: 'center',
}