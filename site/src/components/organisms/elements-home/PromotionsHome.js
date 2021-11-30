import { useState, useEffect } from 'react'
import styled from "styled-components"
import { Product } from "../../../services/Product"
import { Colors } from "../../../shared/Colors"
import { SubTitle, TitlePattern } from "../../atoms/Titles"
import { CardProduto } from "../../molecules/cards/ProductCard"

export function PromotionsHome() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function getProductInfo() {
        const response = await Product.getAllProducts()

        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao cadastrar')
        }
    }
    useEffect(() => {
        getProductInfo()
    }, [])

    return (
        <>
            <PromotionsSection>
                <TitlePattern border='pink' text="Promoções da semana" />
                <SubTitle text="Aproveite as promo!" />
                <div className="vitrine-products">
                    {
                        loading ?
                            <>
                                <CardProduto loading={loading} />
                                <CardProduto loading={loading} />
                                <CardProduto loading={loading} />
                                <CardProduto loading={loading} />
                            </>
                            :
                            data.slice(0, 4).map((product) => {
                                return (
                                    <CardProduto id={product.idProduto} title={product.nomeProduto} preco={product.preco} img={product.imagens[0]} />
                                )
                            })

                    }
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
    flex-wrap: wrap;
}
`