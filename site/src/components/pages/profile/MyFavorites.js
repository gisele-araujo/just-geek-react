import { useState } from "react"
import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { SubTitle } from "../../atoms/Titles"
import { ArtistsCard } from '../../molecules/cards/ArtistCard'
import { CardProduto } from '../../molecules/cards/ProductCard'

const MyFavorites = () => {
    const [loading, setLoading] = useState(true)
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
                            null
                    }

                </FavoriteProducts>
                <spam className='border'></spam>
                <SubTitle text='Meus artistas favoritos' />
                <FavoriteArtists>
                    {
                        loading ?
                            <>
                                <ArtistsCard primary={false} loading />
                                <ArtistsCard primary={false} loading />
                                <ArtistsCard primary={false} loading />
                            </>
                            :
                            null
                    }
                </FavoriteArtists>
            </FavoritePage>
        </>
    )
}

export default MyFavorites

const FavoritePage = styled.div`

.border {
    border: 1px solid ${Colors.gray.light};
    display: block;
    margin: 20px 0;
    width: 100%;
}
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

const FavoriteArtists = styled.div`
padding: 20px 0;
display: flex;
flex-wrap: wrap;
`