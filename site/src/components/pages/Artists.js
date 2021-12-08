import { Artist } from "../../services/Artist";
import styled from "styled-components";
import '../../assets/css/override.css'
import { Colors } from "../../shared/Colors";
import { Footer } from "../molecules/Footer";
import { ProfileArtist } from "../molecules/ProfileArtist";
import { Header } from "../organisms/Header";
import { Tabs } from 'antd';
import { BackTopButton } from "../atoms/BackTopButton";
import { BioArtist } from "../organisms/elements-artist/BioArtist";
import { OthersArtists } from "../organisms/elements-artist/OthersArtists";
import { NewslatterFooter } from "../molecules/NewslatterFooter";
import { BannerApp } from "../molecules/BannerApp";
import { BannerWarning } from "../atoms/BannerWarning";
import { Image } from 'antd';
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const { TabPane } = Tabs;

const Artists = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [img, setImg] = useState([])
    const [arts, setArts] = useState([])
    const [loading, setLoading] = useState(true)

    async function getArtist(id) {
        const response = await Artist.getArtist(id)

        if (response.status) {
            setUser(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar artista')
        }
    }

    async function getPhoto(id) {
        const response = await Artist.getPhotoArtist(id)

        if (response.status) {
            setImg(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar foto de artista')
        }
    }

    async function getAllArts(id) {
        const response = await Artist.getAllArtsByArtist(id)

        if (response.status) {
            setArts(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar as artes')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getArtist(id)
        getPhoto(id)
        getAllArts(id)
        console.log(user)
    }, [])

    return (
        <>
            <Header />
            <ArtistsSection>
                <BannerWarning text='ATENÇÃO! Você está visualizando uma vitrine, para realizar pedidos de camisetas com as artes de nossos artistas, baixe o aplicativo e garanta já sua peça única!' />
                <ProfileArtist loading={loading} name={user.nome} username={user.apelido} bio={user.biografia} pic={img} />
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Galeria" key="1">
                        <PageTab>
                            <Image.PreviewGroup>
                                { arts ? 
                                    arts.map((art) => {
                                        return (
                                            <Image style={ArtistArt} src={art} />
                                        )
                                    })
                                    : null
                                }
                            </Image.PreviewGroup>
                        </PageTab>
                    </TabPane>
                    <TabPane tab="Sobre" key="2">
                        <PageTab>
                            <BioArtist loading={loading} bio={user.biografia} contact={user.contato} />
                        </PageTab>
                    </TabPane>
                </Tabs>
                <OthersArtists id={id} />
                <BannerApp />
                <BackTopButton />
                <NewslatterFooter />
            </ArtistsSection>
            <Footer />
        </>
    )
}

export default Artists;

const ArtistsSection = styled.section`
padding-top: 68px;
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;

@media(min-width: 768px) {
    padding-top: 82px;
}
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


const ArtistArt = {
    cursor: 'pointer',
    padding: '16px',
    width: '270px',
    height: '270px',
    objectFit: 'cover',
    transition: '0.5s all'
}
