import styled from "styled-components";
import { NameTitle, SecondaryTitle } from "../../atoms/Titles";
import { Skeleton } from "antd";

export function BioArtist(props) {
    const {
        bio,
        contact,
        skills,
        loading,
        software
    } = props
    return (
        <>
            <ArtistBio>
                <TopicBio>
                    <NameTitle text='Resumo' />
                    {loading ? <Skeleton active={true} style={{width: 200}} /> : <SecondaryTitle text={bio} />}
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Contato' />
                    {loading ?<Skeleton.Input style={{ width: 150 }} active={true} size="small" /> : <SecondaryTitle text={contact} />}
                </TopicBio>
                <TopicBio>
                    <NameTitle text='Skills' />
                    {loading ? <Skeleton.Input style={{ width: 150 }} active={true} size="small" />: <SecondaryTitle text={skills} />}
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