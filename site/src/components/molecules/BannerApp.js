import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import App from '../../assets/img/bg-artist-phone.png'
import BgApp from '../../assets/img/bg-app-gray.png'

export function BannerApp() {
    return (
        <>
        <Background>
            <Banner>
                <BannerText>
                    <h3 className='banner-title'>Quer ter acesso a produtos exclusivos e realizar <br /> <strong className='banner-strong'>pedidos costumizados</strong> pelos nossos artistas?</h3>
                    <h2 className='banner-title-app'>Baixe o <strong>APP JustGEEK</strong> e aproveite!</h2>
                </BannerText>
                <img src={App} className='banner-img' />
            </Banner>
        </Background>
            
        </>
    )
}

const Background = styled.section `
background-color: ${Colors.gray.dark};
background-repeat: no-repeat;
background-position-x: 140%;
background-image: url(${BgApp});
`
const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 80px 2% 40px;
max-width: 1600px;
margin: 0 auto;
width: 100%;

.banner-img {
    width: 45%;
}

@media(max-width: 768px) {
    padding: 30px 5% 40px;
    .banner-img {
        display: none;
    }
}
`

const BannerText = styled.div `
width: 50%;

.banner-title {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${Colors.gray.white};
}

.banner-title-app {
    font-size: 28px;
    font-weight: 300;
    color: ${Colors.gray.white};
}

.banner-title-app strong {
    font-weight: 600;
}

.banner-strong {
    font-weight: 800;
    color: ${Colors.pink.dark};
}

@media(max-width: 768px) {
    width: 100%;
    text-align: center;

    .banner-title {
        font-size: 24px;
    }

    .banner-title-app {
        font-size: 18px;
    }
}
`