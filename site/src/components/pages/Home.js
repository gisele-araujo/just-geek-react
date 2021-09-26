import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { BackTopButton } from "../atoms/BackTopButton";
import { SubTitle, TitlePattern } from "../atoms/Titles";
import { CardProduto } from "../molecules/CardProduto";
import { CarouselPattern } from "../molecules/CarouselPattern";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Homepage>
                <CarouselPattern />
                <PromotionsSection>
                    <TitlePattern border='pink' text="Promoções da semana" />
                    <SubTitle text="Aproveite as promo!" />
                    <div className="vitrine-products">
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                </PromotionsSection>
                <PopularSection>
                    <TitlePattern border='pink' text="Populares" />
                    <SubTitle text="Os produtos mais vendidos" />
                    <div className="vitrine-products">
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                </PopularSection>
                <BackTopButton />
            </Homepage>
            <Footer />
        </>
    )
}

export default Home;

const Homepage = styled.div`
padding-top: 140px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
`

const PromotionsSection = styled.div`
width: 100%;
padding: 30px 0 ;
text-align: center;
background-color: ${Colors.gray.medium};

.vitrine-products {
   display: flex;
   justify-content: center; 
}

`

const PopularSection = styled.div `
width: 100%;
padding: 30px 0 ;
text-align: center;

.vitrine-products {
   display: flex;
   justify-content: center; 
}
`