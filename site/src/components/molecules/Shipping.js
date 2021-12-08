import { Input } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { Product } from "../../services/Product"
import { Colors } from "../../shared/Colors"
import { Button } from "../atoms/Button"

export function Shipping(props) {
    const {
        primary = true,
    } = props

    const [cep, setCep] = useState('')
    const [shipping, setShipping] = useState([])
    const [displayShipping, setDisplayShipping] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await Product.calculateShipping(cep)

        if (response.status) {
            setShipping(response.data)
            sessionStorage.setItem('shippingValue', response.data.valorAPagar)
            setLoading(false)
            setDisplayShipping(true)

        } else {
            console.log('erro ao consultar frete')
            setLoading(false)
        }
    }

    return (
        <>
            <ContainerFrete
            primary={primary}>
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
                        loading={loading}
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
    padding: ${props => props.primary ? "20px 16px": "20px 0"};
    background-color: ${props => props.primary ? Colors.gray.dark : "transparent"};
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