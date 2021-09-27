import styled from "styled-components";
import { SubTitle, TitlePattern } from "../../atoms/Titles";
import { CardProduto } from "../../molecules/cards/ProductCard";

export function PopularHome() {
    return (
        <>
            <PopularSection>
                <TitlePattern border='pink' text="Populares" />
                <SubTitle text="Os produtos mais vendidos" />
                <div className="vitrine-products">
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
            </PopularSection>
        </>
    )
}

const PopularSection = styled.div`
width: 100%;
padding: 35px 0 ;
text-align: center;

.vitrine-products {
    display: flex;
    justify-content: center; 
}
`