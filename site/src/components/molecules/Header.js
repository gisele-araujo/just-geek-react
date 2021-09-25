import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/Colors';
import { Input } from 'antd';
import { UserOutlined, HeartOutlined, ShoppingOutlined, MenuOutlined } from "@ant-design/icons";
import LogoRosa from '../../assets/logo-rosa.svg'

const { Search } = Input;

export function Header() {

    const onSearch = value => console.log(value);

    return (
        <>
            <HeaderBox>
                <Logo>
                    <MenuOutlined style={IconsHeader} />
                    <img src={LogoRosa} alt="Logotipo Just Geek" />
                    <h2>JustGEEK</h2>
                </Logo>
                <SearchSpace>
                    <Search placeholder="O que você procura?" onSearch={onSearch} style={{ width: '100%' }} />
                </SearchSpace>
                <ProfileHeader className="profile">
                    <UserOutlined style={IconsHeader} />
                    <div>
                        <p>Olá, visitante!</p>
                        <p>Faça login ou cadastre-se</p>
                    </div>
                </ProfileHeader>
                <Icons>
                    <HeartOutlined style={IconsHeader} />
                    <ShoppingOutlined style={IconsHeader} />
                </Icons>
            </HeaderBox>
        </>
    )
}

const HeaderBox = styled.div`
width: 100%;
height: 80px;
background-color: ${Colors.blue.darkPurple};
border-bottom: 2px dashed ${Colors.gray.light};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2%;
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
`

const ProfileHeader = styled.div` 
display: flex;
color: ${Colors.gray.white};
align-items: center;

p {
    margin: 0;
}
`
const Icons = styled.div`
display: flex;
`

const IconsHeader = {
    color: Colors.gray.white,
    fontSize: '25px',
    padding: '20px'
}
