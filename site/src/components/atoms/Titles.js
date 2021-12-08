import styled from "styled-components"
import { Colors } from "../../shared/Colors"

export function TitlePattern(props) {
    return (
        <>
            <TitleText
                border={props.border}>
                {props.text}
            </TitleText>
            <div></div>
        </>
    )
}
export function SubTitle(props) {
    return (
        <>
            <SubTitleText>{props.text}</SubTitleText>
        </>
    )
}
export function NameTitle(props) {
    return (
        <>
            <NameTitleText>{props.text}</NameTitleText>
        </>
    )
}

export function SecondaryTitle(props) {
    return (
        <>
            <SecondaryTitleText>{props.text}</SecondaryTitleText>
        </>
    )
}

const TitleText = styled.h2`
color: ${Colors.gray.white};
font-weight: 500;
font-size: 22px;
border-bottom: 2px solid ${props => props.border === 'pink' ? Colors.pink.hot : Colors.blue.light};
display: inline-block;
text-transform: uppercase;
padding: 8px 0;

@media(min-width: 768px) {
  font-size: 28px;  
}
`

const SubTitleText = styled.h3`
color: ${Colors.gray.white};
font-weight: 300;
font-size: 20px;

@media(min-width: 768px) {
  font-size: 24px;  
}
`

const NameTitleText = styled.h4 `
color: ${Colors.gray.white};
font-weight: 500;
font-size: 16px;

@media(min-width: 768px) {
  font-size: 20px;  
}
`

const SecondaryTitleText = styled.h4 `
color: ${Colors.gray.white};
font-weight: 300;
font-size: 14px;

@media(min-width: 768px) {
  font-size: 16px;  
}
`