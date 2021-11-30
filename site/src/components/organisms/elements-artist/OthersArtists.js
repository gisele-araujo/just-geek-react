import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { ArtistsCard } from "../../molecules/cards/ArtistCard";
import { SubTitle } from "../../atoms/Titles";
import { Artist } from '../../../services/Artist'
import Grazi from '../../../assets/img/artist-grazi.png'
import Tai from '../../../assets/img/artist-tai.png'
import { useEffect, useState } from "react";

export function OthersArtists({ id }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function getArtists(id) {
        const response = await Artist.getSimilarArtists(id)

        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar artistas')
        }
    }

    useEffect(() => {
        getArtists(id)
    }, [])
    return (
        <>
            <OthersSection>
                <SubTitle text='Artistas semelhantes' />
                <OthersGrade>
                    {
                        loading ?
                            null
                            :
                            data.map((artist) => {
                                return (
                                    <ArtistsCard primary={false} id={artist.idArtista} image={artist.imagemPerfil} name={artist.nome} />
                                )
                            })
                    }
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

const OthersGrade = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`