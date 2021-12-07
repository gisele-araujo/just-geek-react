import styled from "styled-components";
import { Artist } from "../../../services/Artist";
import { ArtistsCard } from "../../molecules/cards/ArtistCard";
import { SubTitle } from "../../atoms/Titles";
import { Colors } from "../../../shared/Colors";
import { useEffect, useState } from "react";

export function ArtistsHome() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function getArtists() {
        const response = await Artist.getAllArtists()

        if(response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar artistas')
        }
    }

    useEffect(() => {
        getArtists()
    }, [])
    return (
        <>
            <ArtistsSection>
                <SubTitle text='Conheça os nossos produtos customizados desenhados pela nossa equipe' />
                <ArtistsGrade>
                    {
                        loading ?
                        null
                        :
                        data.map((artist) => {
                            return (
                                <ArtistsCard primary={false} id={artist.idArtista} image={artist.imagemPerfil} name={artist.nome} username={artist.apelido} />
                            )
                        })
                    }
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