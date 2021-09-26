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

const TitleText = styled.h2`
color: ${Colors.gray.white};
font-weight: 500;
font-size: 28px;
border-bottom: 2px solid ${props => props.border === 'pink' ? Colors.pink.hot : Colors.blue.light};
display: inline-block;
text-transform: uppercase;
padding: 8px 0;
`

const SubTitleText = styled.h3`
color: ${Colors.gray.white};
font-weight: 300;
font-size: 24px;
`

const NameTitleText = styled.h4 `
color: ${Colors.gray.white};
font-weight: 500;
font-size: 20px;
`