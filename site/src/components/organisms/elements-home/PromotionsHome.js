import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { SubTitle, TitlePattern } from "../../atoms/Titles";
import { CardProduto } from "../../molecules/cards/ProductCard";

export function PromotionsHome() {
    return (
        <>
            <PromotionsSection>
                <TitlePattern border='pink' text="Promoções da semana" />
                <SubTitle text="Aproveite as promo!" />
                <div className="vitrine-products">
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
            </PromotionsSection>
        </>
    )
}

const PromotionsSection = styled.div`
width: 100%;
padding: 35px 0 ;
text-align: center;
background-color: ${Colors.gray.medium};

.vitrine-products {
    display: flex;
    justify-content: center; 
}
`