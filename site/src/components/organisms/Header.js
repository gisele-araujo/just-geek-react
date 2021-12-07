import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../assets/css/override.css'
import { Colors } from '../../shared/Colors';
import { Input } from 'antd';
import { UserOutlined, HeartOutlined, ShoppingOutlined, MenuOutlined } from "@ant-design/icons";
import LogoRosa from '../../assets/img/logo-rosa.svg'
import { useHistory } from 'react-router';
import { Bag } from './Bag';

const { Search } = Input;

export function Header(props) {
    const {
        addProduct = false
    } = props

    const username = sessionStorage.getItem('username')
    const history = useHistory()
    const [visible, setVisible] = useState(false);
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);
    const onSearch = value => {
        history.push(`/pesquisa/${value}`)
    }

    useEffect(() => {
        if(addProduct === true) setVisible(true)
    }, [addProduct])

    return (
        <>
            <HeaderBox>
                <ContainerHeader>
                    <Logo onClick={() => history.push('/')}>
                        {/* <MenuOutlined style={IconsHeader} /> */}
                        <img src={LogoRosa} alt="Logotipo Just Geek" />
                        <h2>JustGEEK</h2>
                    </Logo>
                    <SearchSpace>
                        <Search placeholder="O que você procura?" onSearch={onSearch} style={{ width: '100%' }} />
                    </SearchSpace>
                    <ProfileHeader className="profile">
                        <UserOutlined onClick={() => username ? history.push('/perfil') : history.push('/login')} />
                        <div>
                            <p>Olá, {username ? username : "visitante"}!</p>
                            {username ? 
                            <p><u onClick={() => history.push('/perfil')}>Ver minha conta</u></p>
                            :
                            <p><u onClick={() => history.push('/login')}>Faça login</u> ou <u onClick={() => history.push('/cadastro')}>cadastre-se</u></p>
                            }
                            
                        </div>
                    </ProfileHeader>
                    <Icons>
                        <HeartOutlined onClick={() => username ? history.push('/perfil/favoritos') : history.push('/login')} />
                        <ShoppingOutlined onClick={showDrawer} />
                    </Icons>
                </ContainerHeader>
            </HeaderBox>
            <Bag onCloseDrawer={onClose} visibleDrawer={visible} addProduct={addProduct} />
        </>
    )
}

const HeaderBox = styled.div`
position: fixed;
z-index: 1000;
width: 100%;
height: 68px;
background-color: ${Colors.blue.darkPurple};
padding: 0 2%;
font-family: 'Exo 2', sans-serif;

@media(min-width: 768px) {
    height: 82px;
}
`

const ContainerHeader = styled.div `
max-width: 1600px;
height: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.div`
cursor: pointer;
display: flex;
align-items: center;

h2 {
    display: none;
}

h2:hover {
    color: ${Colors.pink.hot};
}
img {
    height: 40px;
    padding: 0 12px 0 8px;
}

@media(min-width: 991px) {
    h2 {
        display: block;
        color: ${Colors.gray.white};
        font-weight: 800;
        font-size: 1.6rem;
        margin: 0;
        transition: 0.5s all;
    }
    img {
        padding: 0 15px;
    }
}
`

const SearchSpace = styled.div`
width: 68%;

.ant-input {
    height: 37px;
    background-color: #E9E9E9;
}

.ant-btn {
    border: none;
    background-color: #E9E9E9;
}
.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    background: #E9E9E9;
}

.anticon svg {
    color: ${Colors.gray.darkPurple};
    font-size: 18px;
}

@media(min-width: 768px) {
width: 33%;
}
`

const ProfileHeader = styled.div` 
display: flex;
color: ${Colors.gray.white};
align-items: center;

p {
    margin: 0;
}
u {
    cursor: pointer;
    transition: 0.5s all;
}

u:hover {
    color: ${Colors.blue.light};
}
.anticon svg {
    color: ${Colors.gray.white};
    font-size: 44px;
    padding: 5px 10px;
} 

@media(max-width: 769px) {
    p, u {
        display: none;
    } 
}
@media(min-width: 768px) {
    .anticon svg {
        font-size: 58px;
        padding: 5px 15px;
    }  
}
`

const Icons = styled.div`
display: flex;

.anticon svg {
    color: ${Colors.gray.white};
    font-size: 44px;
    padding: 5px 10px;
} 

@media(min-width: 768px) {
    .anticon svg {
        font-size: 58px;
        padding: 5px 15px;
    }  
}
`
