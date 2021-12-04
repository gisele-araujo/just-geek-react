import styled from "styled-components";
import { SubTitle } from "../../atoms/Titles";

export function Success() {
    return (
        <>
            <SuccessPurchase>
                <SubTitle text='Obrigada por comprar com a gente! :)' />
                <p>Oba! camisetas novinhas no seu guarda roupa a caminho... visualize o status do seu pedido pelo painel</p>
            </SuccessPurchase>

        </>
    )
}

const SuccessPurchase = styled.div `
margin: 30px 0;
p {
    font-size: 16px;
    font-weight: 300;
}

@media(min-width: 768px) {
    p {
    font-size: 18px;
}
}
`