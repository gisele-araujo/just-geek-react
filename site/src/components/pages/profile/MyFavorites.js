import { useEffect, useState } from "react"
import styled from "styled-components"
import { Product } from "../../../services/Product"
import { Colors } from "../../../shared/Colors"
import { SubTitle } from "../../atoms/Titles"
import { ArtistsCard } from '../../molecules/cards/ArtistCard'
import { CardProduto } from '../../molecules/cards/ProductCard'

const MyFavorites = () => {
    const [loading, setLoading] = useState(true)
    const idUser = sessionStorage.getItem('idUser')
    const [products, setProducts] = useState([])

    async function getProduct() {

        const response = await Product.getFavorites(idUser)

        if (response.status) {
            setProducts(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar os favoritos')
        }
    }

    useEffect(() => getProduct(), [])
    return (
        <>
            <FavoritePage>
                <SubTitle text='Meus produtos favoritos' />
                <FavoriteProducts className='section-scroll'>
                    {
                        loading ?
                            <>
                                <CardProduto loading />
                                <CardProduto loading />
                                <CardProduto loading />
                            </>
                            :
                            products ?
                                products.map((favorite) => {
                                    return (
                                        <CardProduto primary={false} hasButton={false} id={favorite.idProduto} title={favorite.nomeProduto} preco={favorite.preco} img={favorite.imagens[0]} />
                                    )
                                })
                                :
                                null
                    }

                </FavoriteProducts>
            </FavoritePage>
        </>
    )
}

export default MyFavorites

const FavoritePage = styled.div`
.section-scroll::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #6c6674;
}
.section-scroll::-webkit-scrollbar {
    border-radius: 10px;
    height: 10px;
    background: #4c4852;
    
}
.section-scroll::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #4c4852;
}

`

const FavoriteProducts = styled.div`
padding: 20px 0;
display: flex;
overflow-x: scroll;
`