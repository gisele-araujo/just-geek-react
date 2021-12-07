import styled from "styled-components";
import { Colors } from '../../../shared/Colors'
import { DeleteFilled } from '@ant-design/icons'

export function ProductBagCard(props) {
    const {
        id,
        image,
        name,
        value,
        size,
        qt,
        deleteProduct = true,
        deleteProductFunction,
        primary = true
    } = props

    return (
        <>
            <CardContainer
                primary={primary}>
                <img src={image} />
                <div className="info-product">
                    <p>{name}<strong className="size">(Tam. <strong className="size--value">{size})</strong></strong></p>
                    <p className="qt">Qt. {qt}</p>
                    <div className="container-info">
                        <strong>R$ {value}</strong>
                        {deleteProduct ?
                            <spam className="delete-product"><DeleteFilled onClick={() => deleteProductFunction(id, size)} /></spam>
                            : null}
                    </div>
                </div>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
margin-bottom: 20px;
width: 100%;
padding: 16px;
border-radius: 5px;
background-color: ${props => props.primary ? Colors.gray.medium : Colors.gray.darkPurple};
display: flex;

img {
    width: 80px;
    height: 100px;
    border-radius: 2px;
    object-fit: cover;
}

.info-product {
    padding-left: 18px;
    color: ${Colors.gray.white};

    .container-info {
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
    }

    .size {
        padding-left: 8px;
        .size--value {
            text-transform: uppercase;
        }
    }

    .qt {
        font-size: 12px;
    }

    .delete-product {
        width: 100%;
        text-align: end;
        display: inline-block;
    }
    p {
        margin-bottom: 8px;
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