import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { BackTopButton } from "../atoms/BackTopButton";
import { CarouselPattern } from "../molecules/CarouselPattern";
import { Footer } from "../molecules/Footer";
import { Header } from "../organisms/Header";
import { CategoryHome } from "../organisms/elements-home/CategoryHome";
import { PromotionsHome } from "../organisms/elements-home/PromotionsHome";
import { PopularHome } from "../organisms/elements-home/PopularHome";
import { BannerHome } from "../organisms/elements-home/BannerHome";
import { ArtistsHome } from "../organisms/elements-home/ArtistsHome";
import { NewslatterFooter } from "../molecules/NewslatterFooter";
import { RateHome } from "../organisms/elements-home/RateHome";
import { CarouselBrands } from "../molecules/CarouselBrands";
import { BannerApp } from "../molecules/BannerApp";

const Home = () => {
    return (
        <>
            <Header />
            <Homepage>
                <CarouselBrands />
                <CarouselPattern />
                <BannerHome />
                <PromotionsHome />
                <PopularHome />
                <CategoryHome />
                <ArtistsHome />
                <BannerApp />
                <RateHome />
                <NewslatterFooter />
                <BackTopButton />
            </Homepage>
            <Footer />
        </>
    )
}

export default Home;

const Homepage = styled.div`
padding-top: 85px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
`