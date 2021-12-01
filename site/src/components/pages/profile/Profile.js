import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { Header } from "../../organisms/Header"
import { Button } from '../../atoms/Button';
import { Menu } from 'antd';
import {
    SkinOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { createElement, useState } from "react";

const { SubMenu } = Menu;

const Profile = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    return (
        <>
            <Header />
            <UserProfile>
                <SidebarProfile>
                    {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button> */}
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1', 'sub2']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Minha Conta">
                            <Menu.Item key="1">Dados pessoais</Menu.Item>
                            <Menu.Item key="2">Endereços</Menu.Item>
                            <Menu.Item key="3">Alterar senha</Menu.Item>
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

            </UserProfile>
        </>
    )
}

export default Profile

const UserProfile = styled.section`
padding-top: 85px;
background-color: ${Colors.gray.dark};
width: 100%;
height: 100vh;
`

const SidebarProfile = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 30%;
height: 100%;
background-color: ${Colors.gray.darkPurple};

.ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    color: rgba(255, 255, 255, 0.65);
    background: ${Colors.gray.darkPurple};
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${Colors.pink.dark};
}

.box-button-exit {
    padding: 20px;
}
`