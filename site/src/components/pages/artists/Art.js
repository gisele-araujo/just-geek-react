import styled from 'styled-components'
import { Header } from '../../organisms/Header'
import { Footer } from '../../molecules/Footer'
import { Colors } from '../../../shared/Colors'

const Art = () => {
    return(
        <>
        <Header />
        <ArtSection>

        </ArtSection>
        <Footer />
        </>
    )
}

export default Art;

const ArtSection = styled.section`
padding-top: 85px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
height: 100vh;
`