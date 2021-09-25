import { Button } from "../atoms/Button";
import { Header } from "../molecules/Header";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";

const Home = () => {
    return (
        <><Header />
            <Homepage>
            </Homepage>
        </>
    )
}

export default Home;

const Homepage = styled.div`
background-color: ${Colors.gray.darkPurple};
height: 100vh;
padding: 0 2%;
`