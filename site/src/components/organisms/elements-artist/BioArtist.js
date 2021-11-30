import styled from "styled-components";
import { NameTitle, SecondaryTitle } from "../../atoms/Titles";

export function BioArtist(props) {
    const {
        bio,
        contact,
        skills,
        software
    } = props
    return (
        <>
            <ArtistBio>
                <TopicBio>
                    <NameTitle text='Resumo' />
                    <SecondaryTitle text={bio} />
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Contato' />
                    <SecondaryTitle text={contact} />
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Skills' />
                    <SecondaryTitle text={skills} />
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