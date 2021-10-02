import styled from "styled-components";
import { NameTitle, SecondaryTitle } from "../../atoms/Titles";

export function BioArtist() {
    return (
        <>
            <ArtistBio>
                <TopicBio>
                    <NameTitle text='Resumo' />
                    <SecondaryTitle text='Artista freelancer, tatuadora, apaixonada em arte digital.' />
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Contato' />
                    <SecondaryTitle text='carolina.franco@gmail.com' />
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Skills' />
                    <SecondaryTitle text='Arte digital, Ilustração' />
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Software' />
                </TopicBio>
            </ArtistBio>
        </>
    )
}

const ArtistBio = styled.div`
text-align: center;
`

const TopicBio = styled.div `
padding: 10px 0;
`