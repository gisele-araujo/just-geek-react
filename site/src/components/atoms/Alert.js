import styled from "styled-components"
import { Colors } from "../../shared/Colors"
import {ExclamationCircleOutlined } from '@ant-design/icons'

export function Alert(props) {
    const {
        text,
        primary
    } = props
    return (
        <>
            <AlertCard
            primary={primary}>
            <ExclamationCircleOutlined /><p>{text}</p>
            </AlertCard>
        </>
    )
}

const AlertCard = styled.div `
font-family: 'Exo 2', sans-serif;
background-color: ${props => props.primary ? Colors.pink.hot : Colors.gray.darkPurple};
border-radius: 2px;
display: flex;
align-items: center;
color: ${Colors.gray.white};
padding: 10px;
margin: 10px 0;
font-size: 14px;

p {
    margin-bottom: 0;
    padding-left: 6px;
}
`