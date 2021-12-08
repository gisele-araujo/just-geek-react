import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { NameTitle } from "../../atoms/Titles";

export function CategoryCard(props) {
    const {
        image,
        text
    } = props
    return (
        <>
        <CardContainer>
            <CardImage
                image={image}>
                    <CardText>
                        <NameTitle text={text} />  
                    </CardText>
            </CardImage>
        </CardContainer>
            
        </>
    )
}
const CardContainer = styled.div `
width: 100%;
height: 115px;
margin: 8px 30px;
object-fit: cover;
overflow: hidden;
cursor: pointer;

@media(min-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 15px;
}
`
const CardImage = styled.div`
background-image: url(${props => props.image});
background-position: start;
background-size: cover;
width: 100%;
height: 115px;
transition: 0.5s all;
filter: grayscale(1);
border-radius: 4px;

@media(min-width: 768px) {
    width: 250px;
    height: 250px;
    background-position: center;
}
`

const CardText = styled.div `
width: 100%;
height: 115px;
padding: 12px;
display: flex;
align-items: flex-end;

@media(min-width: 768px) {
    width: 250px;
    height: 250px;
    padding: 20px;
    background-position: center;
}

`