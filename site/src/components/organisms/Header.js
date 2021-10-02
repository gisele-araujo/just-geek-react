import React, { useState } from 'react';
import styled from 'styled-components';
import '../../assets/css/override.css'
import { Colors } from '../../shared/Colors';
import { Input } from 'antd';
import { UserOutlined, HeartOutlined, ShoppingOutlined, MenuOutlined } from "@ant-design/icons";
import LogoRosa from '../../assets/img/logo-rosa.svg'
import { useHistory } from 'react-router';
import { Drawer } from 'antd';
import { EmptyStateBag } from '../molecules/EmptyStateBag';

const { Search } = Input;

export function Header() {
    const history = useHistory()
    const onSearch = value => console.log(value)
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    }

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
                        <UserOutlined style={IconsHeader} onClick={() => history.push('/login')} />
                        <div>
                            <p>Olá, visitante!</p>
                            <p><u onClick={() => history.push('/login')}>Faça login</u> ou <u onClick={() => history.push('/cadastro')}>cadastre-se</u></p>
                        </div>
                    </ProfileHeader>
                    <Icons>
                        <HeartOutlined style={IconsHeader} onClick={() => history.push('/login')} style={IconsHeader} />
                        <ShoppingOutlined onClick={showDrawer} style={IconsHeader} />
                    </Icons>
                </ContainerHeader>
            </HeaderBox>
            <Drawer placement="right" onClose={onClose} visible={visible} width={400} className="drawer-bag">
                <EmptyStateBag />
            </Drawer>
        </>
    )
}

const HeaderBox = styled.div`
position: fixed;
z-index: 1000;
width: 100%;
height: 85px;
background-color: ${Colors.blue.darkPurple};
/* border-bottom: 2px dashed ${Colors.gray.light}; */
padding: 0 2%;
font-family: 'Exo 2', sans-serif;
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
    color: ${Colors.gray.white};
    font-weight: 800;
    font-size: 1.6rem;
    margin: 0;
    transition: 0.5s all;
}

h2:hover {
    color: ${Colors.pink.hot};
}

img {
    height: 40px;
    padding: 0 15px;
}

@media(max-width: 768px) {
    h2 {
        display: none;
    }
}
`

const SearchSpace = styled.div`
width: 33%;

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

@media(max-width: 768px) {
display: none;
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


@media(max-width: 768px) {
    p, u {
        display: none;
    }
}
`

const Icons = styled.div`
display: flex;
`

const IconsHeader = {
    cursor: 'pointer',
    color: Colors.gray.white,
    fontSize: '28px',
    padding: '20px'
}
