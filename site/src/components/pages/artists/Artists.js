import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { Footer } from "../../molecules/Footer";
import { Header } from "../../organisms/Header";

const Artists = () => {
    return (
        <>
        <Header />
        <ArtistsSection>
            <Walpapper>

            </Walpapper>
        </ArtistsSection>
        <Footer />
        </>
    )
}

export default Artists;

const ArtistsSection = styled.section `
background-color: ${Colors.gray.darkPurple};


`

const Walpapper = styled.div `

`