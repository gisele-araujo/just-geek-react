import { useEffect, useState } from "react"
import styled from "styled-components"
import { Product } from "../../../services/Product"
import { Colors } from "../../../shared/Colors"
import { ProductBagCard } from "./ProductBagCard"

export function PurchaseCard() {
    const idUser = sessionStorage.getItem('idUser')
    const shippingValue = sessionStorage.getItem('shippingValue')
    const couponValue = sessionStorage.getItem('couponValue')
    const couponName = sessionStorage.getItem('couponName')
    const [data, setData] = useState([])
    const [amount, setAmount] = useState(0.00)

    async function getProducts(id) {
        const response = await Product.getProductsBag(id)

        if (response.status) {
            setData(response.data)
        } else {
            console.log('erro ao carregar produtos na sacola')
        }
    }
    function calculatePurchaseAmount() {
        let calculate = 0.00

        for (let i = 0; i < data.length; i++) {
            calculate = calculate + (Number(data[i].preco) * Number(data[i].quantidade))
            setAmount(calculate)
        }
    }

    useEffect(() => getProducts(idUser), [])
    useEffect(() => calculatePurchaseAmount(), [data])
    return (
        <>
            <ContainerPurchaseCard>
                <div className="products-purchase">
                    <div className="container-products-purchase">

                        {data ?
                            data.map((product, index) => {
                                return (
                                    <>
                                        <ProductBagCard key={index} primary={false} deleteProduct={false} image={product.imagens[0]} name={product.nomeProduto} value={product.preco} size={product.tamanho} qt={product.quantidade} />
                                    </>
                                )
                            })
                            :
                            null}
                    </div>
                </div>
                <div className="products-info">
                    <p>
                        <strong>Subtotal</strong>
                        <spam>R$ {amount}</spam>
                    </p>
                    <p>
                        <strong>Frete</strong>
                        <spam>R$ {shippingValue ? Number(shippingValue).toFixed(2) : "0.00"}</spam>
                    </p>
                    <p>
                        <strong>Cupom {couponName ? `(${couponName})` : null}</strong>
                        <spam>- R$ {couponValue ?
                            (Number(couponValue) / 100 * (Number(amount) + Number(shippingValue))).toFixed(2)
                            : "0.00"}</spam>
                    </p>
                    <spam className="divisor"></spam>
                    <p>
                        <strong>Total</strong>
                        <spam>R$ {((Number(amount) + Number(shippingValue)) - (Number(couponValue) / 100 * (Number(amount) + Number(shippingValue)))).toFixed(2)}</spam>
                    </p>
                </div>

            </ContainerPurchaseCard>
        </>
    )
}

const ContainerPurchaseCard = styled.div`
display: none;
@media(min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    background-color: ${Colors.gray.medium};
    padding: 20px 25px;
    width: 38%;

    .products-purchase {
        max-height: 230px;
        overflow-y: scroll;

        &::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: #6c6674;
        }
        &::-webkit-scrollbar {
            border-radius: 4px;
            width: 6px;
            background: #4c4852;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background: #4c4852;
    }
    }

    .container-products-purchase {
        padding: 10px 10px 0 0;
    }

    .products-info {
        padding-top: 20px;

        .divisor {
            display: block;
            width: 100%;
            border: 1px solid ${Colors.pink.hot};
            margin-bottom: 8px;
        }

        p {
            display: flex;
            justify-content: space-between;
        }

        p strong{
            text-transform: uppercase;
            font-weight: 400;
        }
    }
}

`