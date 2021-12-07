import styled from "styled-components"
import { Colors } from "../../shared/Colors"
import { Footer } from "../molecules/Footer"
import { NewslatterFooter } from "../molecules/NewslatterFooter"
import { Header } from "../organisms/Header"
import { Search as SearchApi } from '../../services/Search'
import { useEffect, useState } from "react"
import { CardProduto } from "../molecules/cards/ProductCard"
import { SubTitle } from "../atoms/Titles"
import { useParams } from "react-router"

const Search = () => {
    const { id } = useParams()
    const [allProducts, setAllProducts] = useState([]);
    const [getSearch, setGetSearch] = useState([])

    async function SearchProduct() {
        const response = await SearchApi.getProductsBySearch(id)

        if (response.status) {
            setGetSearch(response.data)
        } else {
            console.log('erro ao carregar produtos')
        }
    }
    async function getAllProducts() {
        const response = await SearchApi.getAllProducts()

        if (response.status) {
            setAllProducts(response.data)
        } else {
            console.log('erro ao carregar produtos')
        }
    }

    useEffect(() => getAllProducts(), [])
    useEffect(() => SearchProduct(), [id])
    return (
        <>
            <Header />
            <SearchPage>
                <ResultSection>
                    {getSearch ?
                        getSearch.map((product) => {
                            return (
                                <CardProduto id={product.idProduto} title={product.nomeProduto} preco={product.preco} img={product.imagens[0]} />
                            )
                        })
                        : null}
                </ResultSection>
                <OthersSection>
                    <SubTitle text='Veja também' />
                    <div className='others-products'>
                        {allProducts ?
                            allProducts.slice(2, 7).map((product) => {
                                return (
                                    <CardProduto id={product.idProduto} title={product.nomeProduto} preco={product.preco} img={product.imagens[0]} />
                                )
                            })
                            : null}
                    </div>
                </OthersSection>

                <NewslatterFooter />
            </SearchPage>
            <Footer />
        </>
    )
}

export default Search

const SearchPage = styled.section`
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
width: 100%;
height: 100%;
padding-top: 85px;
`

const ResultSection = styled.div `
width: 90%;
margin: 30px auto;
display: flex;
flex-wrap: wrap;
`

const OthersSection = styled.div`
background-color: ${Colors.gray.medium};
text-align: center;
padding: 30px 0;
.others-products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
}
`