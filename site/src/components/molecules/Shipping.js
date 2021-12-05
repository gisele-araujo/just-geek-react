import { Input } from "antd"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Product } from "../../services/Product"
import { Colors } from "../../shared/Colors"
import { Button } from "../atoms/Button"

export function Shipping() {
    const [cep, setCep] = useState('')
    const [shipping, setShipping] = useState([])
    const [displayShipping, setDisplayShipping] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await Product.calculateShipping(cep)

        if (response.status) {
            setShipping(response.data)
            setLoading(false)
            setDisplayShipping(true)

        } else {
            console.log('erro ao consultar frete')
            setLoading(false)
        }
    }

    return (
        <>
            <ContainerFrete>
                <strong className="title-important">Receba em casa!</strong>
                <p className="product-description">Consulte o frete e o prazo para sua região</p>
                <form className="input-frete" onSubmit={handleSubmit}>
                    <Input placeholder="Digite seu CEP"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        id="cep"
                        name="cep"
                        required />
                    <Button primary={false}
                        size="small"
                        contentText="Calcular"
                        type='submit' />
                </form>
                {
                    displayShipping ?
                        <table className="table-frete">
                            <tr>
                                <th>Valor do frete</th>
                                <th>Disponibilidade</th>
                            </tr>
                            <tr>

                                <td>{shipping.valorAPagar}</td>
                                <td>{shipping.servico} - entrega em {shipping.prazoParaEntrega} dias úteis</td>

                            </tr>
                        </table>
                        :
                        null
                }
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