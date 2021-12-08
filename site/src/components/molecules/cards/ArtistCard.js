import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { NameTitle } from "../../atoms/Titles";
import { useHistory } from 'react-router-dom'
import { Skeleton } from 'antd'

export function ArtistsCard(props) {
    const {
        id,
        image,
        username,
        loadingInfo,
        primary,
    } = props

    const history = useHistory()

    return (
        <>
            <CardContainer
                onClick={() => history.push(`/artista/${id}`)}
                primary={primary}>
                <CardImage>
                    {loadingInfo ? <Skeleton.Image /> : <img src={image} />}
                </CardImage>
                <CardName>
                    {loadingInfo ? <Skeleton.Input style={{ width: 150 }} active size="small" /> : <NameTitle text={username} />}
                </CardName>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
width: 140px;
height: 236px;
background-color: ${props => props.primary ? Colors.purple.secondDark : Colors.gray.darkPurple};
border-radius: 4px;
margin: 15px 10px;
transition: .5s all;
cursor: pointer;

&:hover {
    filter: brightness(0.8);
}

@media(min-width: 768px) {
    margin: 20px 15px;
    width: 240px;
    height: 270px;
}
`

const CardImage = styled.div`

img {
    width: 100%;
    object-fit: cover;
    height: 180px;
    border-radius: 5px 5px 0px 0px;
}

.ant-skeleton-element .ant-skeleton-image {
    width: 240px;
    height: 210px;
}

@media(min-width: 768px) {
    img {
        height: 210px;
    }
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