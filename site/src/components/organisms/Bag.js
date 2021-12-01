import { Button } from "../atoms/Button";
import styled from "styled-components";
import { ProductBagCard } from "../molecules/cards/ProductBagCard";
import { Input } from "antd";
import { Colors } from "../../shared/Colors";

export function Bag() {
    return (
        <>
            <BagModal>
                <div className="box-products">
                    <ProductBagCard />
                </div>
                <div>
                    <div className="box-cupom">
                        <Input placeholder="CUPOM" />
                        <Button size="small" primary={false} contentText="Aplicar cupom" />
                    </div>
                    <Button size="large" action="positive" primary={false} contentText="Finalizar compra" style={{ width: '100%' }} />
                </div>
            </BagModal>
        </>
    )
}

const BagModal = styled.div`
padding-top: 20px;
width: 100%;
height: 100%;
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
padding: 20px 0;

button {
    white-space: nowrap;
    margin-left: 6px;
}
}
`