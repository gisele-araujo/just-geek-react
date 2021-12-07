import { useEffect, useState } from "react";
import { Artist } from "../../../services/Artist";
import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { NameTitle } from "../../atoms/Titles";
import { useHistory } from 'react-router-dom'


export function ArtistsCard(props) {
    const {
        id,
        image,
        name,
        username,
        primary = true,
    } = props

    const history = useHistory()
    const [img, setImg] = useState([])
    const [loading, setLoading] = useState(true)

    async function getPhoto() {
        const response = await Artist.getPhotoArtist(image)

        if (response.status) {
            setImg(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar foto de artista')
        }
    }

    useEffect(() => getPhoto(), [])

    return (
        <>
            <CardContainer
                onClick={() => history.push(`/artista/${id}`)}
                primary={primary}>
                <CardImage>
                    <img src={img} />
                </CardImage>
                <CardName>
                    <NameTitle text={username} />
                </CardName>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
width: 240px;
height: 270px;
background-color: ${props => props.primary ? Colors.purple.secondDark : Colors.gray.darkPurple};
border-radius: 4px;
margin: 20px 15px;
transition: .5s all;
cursor: pointer;

&:hover {
    filter: brightness(0.8);
}
`

const CardImage = styled.div`

img {
    width: 100%;
    object-fit: cover;
    height: 210px;
    border-radius: 5px 5px 0px 0px;
}
`

const CardName = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

h4 {
    font-size: 18px !important;
}
`