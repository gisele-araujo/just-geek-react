import styled from "styled-components";
import '../../pages/style.css'
import { Colors } from "../../../shared/Colors";
import { NameTitle } from "../../atoms/Titles";
import { Rate } from 'antd';

export function RateCard(props) {
    const {
        name,
        comment,
        rate
    } = props
    return(
        <>
        <RateCardContainer>
            <NameTitle text={name} />
            <Rate disabled defaultValue={rate} className='rate-icon' />
            <p>{comment}</p>

        </RateCardContainer>
        </>
    )
}

const RateCardContainer = styled.div ` 
width: 300px;
height: 180px;
background-color: ${Colors.gray.light};
border-radius: 3px;
padding: 20px;
margin: 20px 10px;
text-align: start;

p {
    padding-top: 10px;
    color: ${Colors.gray.white};
    font-size: 16px;
    font-weight: 300;
}
`