import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import Logo from '../../assets/logo-rosa.svg'
import GooglePlay from '../../assets/google-play.png'

export function Footer() {
    return (
        <>
            <FooterPattern>
                <FooterList>
                    <div className="list-logo">
                        <img src={Logo} />
                        <h3>JustGEEK</h3>
                    </div>
                    <div>
                        <ul>
                            <p className="list-title">Institucional</p>
                            <li>Quem somos</li>
                            <li>Políticas de privacidade</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p className="list-title">Dúvidas</p>
                            <li>FAQ - Dúvidas frequêntes</li>
                            <li>Trocas e devoluções</li>
                            <li>Como fazer um pedido customizado?</li>
                        </ul>
                    </div>
                    <div>
                        <p>Deseja receber nossa newsletter? <u>Acesse</u></p>
                        <AppBanner>
                             <p>Baixe nosso App</p>
                            <img src={GooglePlay} style={{width: '100px'}}/>
                        </AppBanner>
                    </div>
                </FooterList>

                <Autoria>&#169; 2021 - Todos os direitos reservados &#42; Desenvolvido pela JustGEEK</Autoria>
            </FooterPattern>
        </>
    )
}

const FooterPattern = styled.div`
width: 100%;
background-color: ${Colors.blue.darkPurple};
font-family: 'Exo 2', sans-serif;
`
const FooterList = styled.div `
justify-content: space-around;
padding: 30px 2%;
display: flex;
color: ${Colors.gray.white};
font-size: 14px;

ul li {
    list-style: none;
    font-weight: 300;
    padding: 5px 0;
    cursor: pointer;
}
ul li:hover {
    color: ${Colors.blue.light};
}
.list-title {
    color: ${Colors.blue.light};
    font-size: 16px;
    font-weight: 500;
}

.list-logo {
    text-align: center;

    h3 {
        color: ${Colors.gray.white};
        font-weight: 800;
        font-size: 1.2rem;
        padding: 5px 0;
    }
    img {
        width: 90px;
    }
}

`
const Autoria = styled.div`
padding: 20px;
text-align: center;
border-top: 1px solid ${Colors.pink.hot};
color: ${Colors.gray.white};
`

const AppBanner = styled.div `
margin: 20px 0;
display: flex;
align-items: center;
justify-content: center;
color: ${Colors.gray.darkPurple};
font-weight: 700;
background-color: #E9E9E9;
border-radius: 10px;
width: 250px;
height: 60px;

p {
    margin: 0;
}
`
