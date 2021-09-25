import { Button } from "../atoms/Button";
import { Header } from "../molecules/Header";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { BackTopButton } from "../atoms/BackTopButton";
import { CarouselPattern } from "../molecules/CarouselPattern";

const Home = () => {
    return (
        <><Header />
            <Homepage>
                <CarouselPattern />
                <BackTopButton />
            </Homepage>
        </>
    )
}

export default Home;

const Homepage = styled.div`
padding-top: 140px;
background-color: ${Colors.gray.darkPurple};
height: 300vh;
`