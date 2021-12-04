import { Input } from "antd"
import styled from "styled-components"
import { Colors } from "../../shared/Colors"
import { Button } from "../atoms/Button"

export function Frete() {
    return (
        <>
            <ContainerFrete>
                <strong className="title-important">Receba em casa!</strong>
                <p className="product-description">Consulte o frete e o prazo para sua região</p>
                <div className="input-frete">
                    <Input placeholder="Digite seu CEP" />
                    <Button primary={false}
                        size="small"
                        contentText="Calcular" />
                </div>
                <table className="table-frete">
                    <tr>
                        <th>Valor do frete</th>
                        <th>Disponibilidade</th>
                    </tr>
                    <tr>
                        <td>R$ 9,46</td>
                        <td>CORREIOS - entrega em 4 dias úteis</td>
                    </tr>
                </table>
            </ContainerFrete>
        </>
    )
}

const ContainerFrete = styled.div`

.input-frete button {
    margin: 10px 0px !important;
    width: 100%;
}
.table-frete {
    margin: 10px 0;
    width: 100%;
}
.table-frete th {
    background-color: ${Colors.pink.hot};
    border: 3px solid ${Colors.gray.dark};
    font-weight: 400;
    text-transform: uppercase;
}
.table-frete, .table-frete td, .table-frete th{
    color: ${Colors.gray.white};
    padding: 6px;
    text-align: start;
}

@media(min-width: 768px) {
    max-width: 450px;
    padding: 20px 16px;
    background-color: ${Colors.gray.dark};
    border-radius: 4px;
    .input-frete {
        display: flex;
    }
    .input-frete button {
        margin-left: 6px !important;
        margin-top: 0 !important;
        width: auto !important;
    }
}

`