import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { ArtistsCard } from "../../molecules/cards/ArtistCard";
import PicExample from '../../../assets/img/anime-category.png'
import { SubTitle } from "../../atoms/Titles";

export function OthersArtists() {
    return (
        <>
            <OthersSection>
                <SubTitle text='Artistas semelhantes' />
                <OthersGrade>
                    <ArtistsCard name="Taiza Marques" image={PicExample} primary={false} />
                    <ArtistsCard name="Taiza Marques" image={PicExample} primary={false} />
                    <ArtistsCard name="Taiza Marques" image={PicExample} primary={false} />
                    <ArtistsCard name="Taiza Marques" image={PicExample} primary={false} />
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