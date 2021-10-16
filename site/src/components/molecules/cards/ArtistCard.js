import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { NameTitle } from "../../atoms/Titles";
import { useHistory } from 'react-router-dom'

export function ArtistsCard(props) {
    const {
        image,
        name,
        primary = true,
    } = props

    const history = useHistory()

    return (
        <>
            <a href="./artista">
                <CardContainer
                    primary={primary}>
                    <CardImage>
                        <img src={image} />
                    </CardImage>
                    <CardName>
                        <NameTitle text={name} />
                    </CardName>
                </CardContainer>
            </a>
        </>
    )
}

const CardContainer = styled.div`
width: 240px;
height: 270px;
background-color: ${props => props.primary ? Colors.purple.secondDark : Colors.gray.darkPurple};
border-radius: 5px;
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
    border: 5px solid ${Colors.gray.light};
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