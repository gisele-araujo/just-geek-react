import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { Header } from "../../organisms/Header"
import { Button } from '../../atoms/Button';
import { Menu } from 'antd';
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
import setPassword from "./SetPassword";

const { SubMenu } = Menu;

const Profile = () => {
    const history = useHistory()
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    return (
        <>
            <Header />
            <UserProfile>
                <SidebarProfile>
                    {/* <button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </button> */}
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1', 'sub2']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Minha Conta">
                            <Menu.Item key="1" onClick={() => history.push('/perfil')}>Dados pessoais</Menu.Item>
                            <Menu.Item key="2" onClick={() => history.push('/perfil/meus-enderecos')}>Endereços</Menu.Item>
                            <Menu.Item key="3" onClick={() => history.push('/perfil/alterar-senha')}>Alterar senha</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<SkinOutlined />} title="Minhas Compras">
                            <Menu.Item key="5">Acompanhar pedidos</Menu.Item>
                            <Menu.Item key="6">Meus favoritos</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="box-button-exit">
                        <Button primary={false} size="small" contentText="Sair" style={{width: '100%'}} />
                    </div>
                </SidebarProfile>
                <PageProfile>
                    <Route exact path='/perfil' component={Settings} />
                    <Route exact path='/perfil/meus-enderecos' component={MyAddresses} />
                    <Route exact path='/perfil/alterar-senha' component={setPassword} />
                </PageProfile>
            </UserProfile>
        </>
    )
}

export default Profile

const UserProfile = styled.section`
font-family: 'Exo 2', sans-serif;
padding-top: 85px;
background-color: ${Colors.gray.dark};
width: 100%;
height: 100vh;
display: flex;
`

const SidebarProfile = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 25%;
height: 100%;
background-color: ${Colors.gray.darkPurple};

.ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    color: rgba(255, 255, 255, 0.65);
    background: ${Colors.gray.darkPurple};
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${Colors.purple.dark};
}

.box-button-exit {
    padding: 20px;
}
`

const PageProfile = styled.section `
width: 75%;
height: 100%;
padding: 40px;
`