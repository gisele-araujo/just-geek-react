import React from "react";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { SubTitle } from "../atoms/Titles";

export function BannerPromo() {
    return (
        <>
            <Banner>
                <h3 className="promotion-text">CUPOM <strong>GEEK15</strong></h3>
                <SubTitle text='Tenha 15% OFF na sua compra' />
            </Banner>
        </>
    )
}

const Banner = styled.div`
width: 60%;
background-color: ${Colors.gray.dark};
padding: 15px 0;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
border: 2px dashed ${Colors.gray.ultraLight};

.promotion-text {
    font-size: 42px;
    font-weight: 800;
    color: ${Colors.pink.hot};
}

h3 {
    margin: 0;
}

@media(max-width: 768px) {
    padding: 15px;
    width: 100%;
    text-align: center;

    .promotion-text {
        font-size: 24px;
        font-weight: 600;
    }
}
`