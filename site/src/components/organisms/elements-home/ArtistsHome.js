import styled from "styled-components";
import { ArtistsCard } from "../../molecules/cards/ArtistCard";
import Artist from '../../../assets/img/anime-category.png'
import { SubTitle } from "../../atoms/Titles";

export function ArtistsHome() {
    return (
        <>
            <ArtistsSection>
                <SubTitle text='Conheça os nossos produtos customizados desenhados pela nossa equipe' />
                <ArtistsGrade>
                    <ArtistsCard image={Artist} name='Gabriel Santos' />
                    <ArtistsCard image={Artist} name='Gabriel Santos' />
                    <ArtistsCard image={Artist} name='Gabriel Santos' />
                    <ArtistsCard image={Artist} name='Gabriel Santos' />
                </ArtistsGrade>
            </ArtistsSection>
        </>
    )
}

const ArtistsSection = styled.section`
padding: 40px 0;
text-align: center;
`

const ArtistsGrade = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
`