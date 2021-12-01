import { Button } from "../atoms/Button";
import styled from "styled-components";
import { ProductBagCard } from "../molecules/cards/ProductBagCard";
import { Input } from "antd";
import { Colors } from "../../shared/Colors";
import { useState } from "react/cjs/react.development";

export function Bag() {
    const [amount, setAmount] = useState(0.00)
    return (
        <>
            <HeaderModal />
            <BagModal>
                <div className="box-products">
                    <ProductBagCard />
                </div>
                <div>
                    <div className="box-cupom">
                        <Input placeholder="Insira o cupom" />
                        <Button size="small" primary={false} contentText="Aplicar" />
                    </div>
                    <div>
                        <strong className="amount">TOTAL: R$ {amount} </strong>
                    </div>
                    <Button size="large" action="positive" primary={false} contentText="Finalizar compra" style={{ width: '100%' }} />
                </div>
            </BagModal>
        </>
    )
}

const HeaderModal = styled.div`
padding-top: 10%;
`

const BagModal = styled.div`
font-family: 'Exo 2', sans-serif;
width: 100%;
height: 93%;
display: flex;
flex-direction: column;
justify-content: space-between;

.box-products {
    height: 75%;
    overflow-y: scroll;
    padding-right: 10px;

&::-webkit-scrollbar-track {
    background-color: #6c6674;
}
&::-webkit-scrollbar {
    width: 6px;
    background: #4c4852;
}
&::-webkit-scrollbar-thumb {
    background: #4c4852;
}
}

.box-cupom {
display: flex;
padding-top: 20px;

button {
    white-space: nowrap;
    margin-left: 6px;
}
}

.amount {
    font-size: 16px;
    color: ${Colors.gray.white};
    padding: 20px 0;
    display: inline-block;
}
`