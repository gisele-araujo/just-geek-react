import styled from "styled-components";
import '../../../assets/css/override.css'
import { Colors } from "../../../shared/Colors";
import { Footer } from "../../molecules/Footer";
import { ProfileArtist } from "../../molecules/ProfileArtist";
import { Header } from "../../organisms/Header";
import Artist from '../../../assets/img/anime-category.png';
import { Tabs } from 'antd';
import { BackTopButton } from "../../atoms/BackTopButton";
import { BioArtist } from "../../organisms/elements-artist/BioArtist";
import { GalleryArtist } from "../../organisms/elements-artist/GalleryArtist";
import { OthersArtists } from "../../organisms/elements-artist/OthersArtists";
import { NewslatterFooter } from "../../molecules/NewslatterFooter";

const { TabPane } = Tabs;

const Artists = () => {
    return (
        <>
            <Header />
            <ArtistsSection>
                <ProfileArtist name='Carolina Franco' bio='Artista freelancer, tatuadora, apaixonada em arte digital.' pic={Artist} />
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Galeria" key="1">
                        <PageTab>
                            <GalleryArtist />
                        </PageTab>
                    </TabPane>
                    <TabPane tab="Sobre" key="2">
                        <PageTab>
                            <BioArtist />
                        </PageTab>
                    </TabPane>
                </Tabs>
                <OthersArtists />
                <BackTopButton />
                <NewslatterFooter />
            </ArtistsSection>
            <Footer />
        </>
    )
}

export default Artists;

const ArtistsSection = styled.section`
padding-top: 85px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
`

const PageTab = styled.section`
padding: 20px 2%;
display: flex;
flex-wrap: wrap;
justify-content: center;

img:hover {
    filter: brightness(0.8);
}
`
