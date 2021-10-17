import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { ArtistsCard } from "../../molecules/cards/ArtistCard";
import { SubTitle } from "../../atoms/Titles";
import Grazi from '../../../assets/img/artist-grazi.png'
import Tai from '../../../assets/img/artist-tai.png'

export function OthersArtists() {
    return (
        <>
            <OthersSection>
                <SubTitle text='Artistas semelhantes' />
                <OthersGrade>
                    <ArtistsCard name="Taiza Marques" image={Tai} primary={false} />
                    <ArtistsCard name="Graziela Lucena" image={Grazi} primary={false} />
                </OthersGrade>
            </OthersSection>
        </>
    )
}

const OthersSection = styled.section`
background-color: ${Colors.gray.medium};
width: 100%;
padding: 35px;
text-align: center;
`

const OthersGrade = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
`