import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../../../services/Product";
import { SubTitle, TitlePattern } from "../../atoms/Titles";
import { CardProduto } from "../../molecules/cards/ProductCard";

export function PopularHome() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function getProductInfo() {

        const response = await Product.getMostPopularProducts()

        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar produtos populares')
        }
    }
    useEffect(() => {
        getProductInfo()
    }, [])


    return (
        <>
            <PopularSection>
                <TitlePattern border='pink' text="Populares" />
                <SubTitle text="Os produtos mais vendidos da JustGEEK" />
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
                            data.map((product) => {
                                return (
                                    <CardProduto title={product.nomeProduto} preco={product.preco} img={product.imagens[0]} />
                                )
                            })
                    }
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
    flex-wrap: wrap;
}
`