import styled from "styled-components";
import { ArtistsCard } from "../../molecules/cards/ArtistCard";
import Artist from '../../../assets/img/anime-category.png'
import Grazi from '../../../assets/img//artist-grazi.png'
import Tai from '../../../assets/img//artist-tai.png'
import Biel from '../../../assets/img/arts/zed-negativo.jpg'
import Gi from '../../../assets/img/arts/gisele.jpg'
import { SubTitle } from "../../atoms/Titles";
import { Colors } from "../../../shared/Colors";

export function ArtistsHome() {
    return (
        <>
            <ArtistsSection>
                <SubTitle text='Conheça os nossos produtos customizados desenhados pela nossa equipe' />
                <ArtistsGrade>
                    <ArtistsCard image={Tai} name='Taiza Marques' />
                    <ArtistsCard image={Biel} name='Gabriel Santos' />
                    <ArtistsCard image={Grazi} name='Graziela Lucena' />
                    <ArtistsCard image={Gi} name='Gisele Flor' />
                </ArtistsGrade>
            </ArtistsSection>
        </>
    )
}

const ArtistsSection = styled.section`
padding: 40px 0 10px;
text-align: center;
background-color: ${Colors.gray.dark};
`

const ArtistsGrade = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
`