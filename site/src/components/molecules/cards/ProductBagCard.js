import styled from "styled-components";
import { Colors } from '../../../shared/Colors'
import { Button } from '../../atoms/Button'
import Shirt from '../../../assets/img/shirt.png'
import { DeleteFilled } from '@ant-design/icons'

export function ProductBagCard(props) {
    const {
        image,
        name,
        value,
    } = props
    return(
        <>
        <CardContainer>
            <img src={image} />
            <div className="info-product">
                <p>{name}</p>
                <strong>R$ {value}</strong>
                <spam className="delete-product"><DeleteFilled /></spam>
            </div>
        </CardContainer>
        </>
    )
}

const CardContainer = styled.div `
margin-bottom: 20px;
width: 100%;
padding: 20px;
border-radius: 5px;
background-color: ${Colors.gray.medium};
display: flex;

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.info-product {
    padding-left: 15px;
    color: ${Colors.gray.white};

    .delete-product {
        width: 100%;
        text-align: end;
        display: inline-block;
    }

    svg {
        cursor: pointer;
        fill: ${Colors.pink.hot} !important;
        border: none !important;
        padding: 0;
        font-size: 18px;
    }
}
`