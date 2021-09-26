import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { BackTopButton } from "../atoms/BackTopButton";
import { CarouselPattern } from "../molecules/CarouselPattern";
import { Footer } from "../molecules/Footer";
import { Header } from "../organisms/Header";
import { CategoryHome } from "../organisms/CategoryHome";
import { PromotionsHome } from "../organisms/PromotionsHome";
import { PopularHome } from "../organisms/PopularHome";

const Home = () => {
    return (
        <>
            <Header />
            <Homepage>
                <CarouselPattern />
                <PromotionsHome />
                <PopularHome />
                <CategoryHome />
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