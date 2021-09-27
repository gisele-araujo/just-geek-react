import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { NameTitle } from "../../atoms/Titles";

export function ArtistsCard(props) {
    const {
        image,
        name,
    } = props

    return(
        <>
        <CardContainer>
            <CardImage>
                <img src={image} />
            </CardImage>
            <CardName>
                <NameTitle text={name} />
            </CardName>
        </CardContainer>
        </>
    )
}

const CardContainer = styled.div `
width: 240px;
height: 270px;
background-color: ${Colors.blue.dark};
border: 2px solid ${Colors.blue.dark};
margin: 20px 15px;
transition: .5s all;

&:hover {
    border: 2px solid ${Colors.gray.ultraLight};
    filter: brightness(0.8);
}
`

const CardImage = styled.div `

img {
    width: 100%;
    object-fit: cover;
    height: 210px;
}
`

const CardName = styled.div `
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`