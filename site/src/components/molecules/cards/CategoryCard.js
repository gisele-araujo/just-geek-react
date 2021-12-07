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
width: 250px;
height: 250px;
object-fit: cover;
overflow: hidden;
margin: 10px;
cursor: pointer;
`
const CardImage = styled.div`
background-image: url(${props => props.image});
background-position: center;
background-size: cover;
width: 250px;
height: 250px;
transition: 0.5s all;
filter: grayscale(1);
border: 3px solid ${Colors.gray.darkPurple};
border-radius: 4px;
`

const CardText = styled.div `
width: 250px;
height: 250px;
padding: 20px;
display: flex;
align-items: flex-end;

`