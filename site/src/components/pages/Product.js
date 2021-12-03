import { Product as ProductApi } from "../../services/Product";
import { Breadcrumb, Image, Input, Radio } from 'antd';
import styled from "styled-components";
import '../../index.css'
import { Colors } from "../../shared/Colors";
import { Footer } from "../molecules/Footer";
import { NewslatterFooter } from "../molecules/NewslatterFooter";
import { Header } from "../organisms/Header";
import { NameTitle, SubTitle } from '../atoms/Titles';
import { Button } from '../atoms/Button';
import { CardProduto } from '../molecules/cards/ProductCard';
import { useParams } from 'react-router';
import { useEffect, useState } from "react";

const Product = () => {
    const { id } = useParams()
    const idUser = sessionStorage.getItem('idUser')
    const [product, setProduct] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [addProduct, setAddProduct] = useState(false)

    async function getOtherProducts(id) {

        const response = await ProductApi.getSimilarProducts(id)

        if (response.status) {
            setData(response.data)
        } else {
            console.log('erro ao carregar produtos semelhantes')
        }
    }
    async function getProduct(id) {

        const response = await ProductApi.getProduct(id)

        if (response.status) {
            setProduct(response.data)
        } else {
            console.log('erro ao carregar produto específico')
        }
    }

    async function addProductBag(idUser, idProduct) {
        setLoading(true)
        const response = await ProductApi.addProductBag(idUser, idProduct)

        if(response.status) {
            setAddProduct(true)
        } else {
            console.log('não foi possível adicionar o produto ao carrinho')
        }
        setLoading(false)

    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getProduct(id)
        getOtherProducts(id)
    }, [])
    return (
        <>
            <Header addProduct={addProduct} />
            <ProductSection>
                <ProductContainer>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Camisetas</Breadcrumb.Item>
                        <Breadcrumb.Item>Anime</Breadcrumb.Item>
                        <Breadcrumb.Item>Naruto</Breadcrumb.Item>
                    </Breadcrumb>
                    <ProductInfo>
                        <Image.PreviewGroup>
                            <div className="vitrine">
                                <div className="grid-images-one">
                                    <Image
                                        className="image-pattern"
                                        src={product.imagens ? product.imagens[0] : null} />
                                </div>
                                <div className="grid-images-two">
                                    { product.imagens ?
                                        product.imagens.slice(1, 4).map((img) => {
                                            return (
                                                <Image
                                                    className="image-item"
                                                    src={img} />
                                            )
                                        })
                                        : null
                                    }
                                </div>
                            </div>
                        </Image.PreviewGroup>
                        <div className="buy-painel">
                            <SubTitle text={product.nomeProduto} />
                            <spam className="product-description"><spam>{product.descricao}</spam><a href='#description'> Leia +</a></spam>
                            <div className="box-values">

                                <p className="product-info-generic"><spam>de </spam><s>R${product.preco}</s></p>
                                <spam className="product-info-generic">por </spam><strong className="price-value">R$ {(product.preco - (product.preco * 0.15)).toFixed(2)}</strong> <spam className="product-info-generic">à vista</spam>
                                <p className="product-info-generic">(ou até 5x de {(product.preco / 5).toFixed(2)} sem juros)</p>
                            </div>
                            <p className="title-important">Tamanho:</p>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="PP">PP</Radio.Button>
                                <Radio.Button value="P">P</Radio.Button>
                                <Radio.Button value="M">M</Radio.Button>
                                <Radio.Button value="G">G</Radio.Button>
                                <Radio.Button value="GG">GG</Radio.Button>
                            </Radio.Group>
                            <Button onClick={() => addProductBag(idUser, id)}
                                action='positive'
                                primary={false}
                                size="large"
                                loading={loading}
                                contentText="Adicionar ao carrinho"
                                style={{ margin: '40px 0' }} />
                            <form className="box-frete">
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
                            </form>
                        </div>
                    </ProductInfo>
                    <div id="description">
                        <NameTitle text="Descrição do Produto" />
                        <p className="product-description">{product.descricao}</p>
                        <p className="product-description">{product.especificacoes}</p>
                    </div>
                </ProductContainer>
                <SimilarProducts>
                    <SubTitle text='Produtos semelhantes' />
                    <div className="container-similar-products">
                        {data ?
                            data.map((product) => {
                                return (
                                    <CardProduto id={product.idProduto} title={product.nomeProduto} preco={product.preco} img={product.imagens[0]} />
                                )
                            })
                            : null
                        }
                    </div>
                </SimilarProducts>
                <NewslatterFooter />
                <Footer />
            </ProductSection>
        </>
    )
}

export default Product;

const ProductSection = styled.section`
background-color: ${Colors.gray.darkPurple};
font-family: 'Exo 2', sans-serif;
width: 100%;
height: 100%;
padding-top: 85px;
`

const ProductContainer = styled.div`
width: 90%;
padding: 20px;
border-radius: 6px;
margin: 40px auto;
background-color: ${Colors.gray.medium};

.ant-breadcrumb {
    color: rgb(255 255 255 / 45%) !important;
}
.ant-breadcrumb > span:last-child {
    color: rgb(255 255 255 / 85%) !important;
}
.ant-breadcrumb-separator {
    color: rgb(255 255 255 / 45%) !important;
}

.product-description {
    color: ${Colors.gray.white};
    font-size: 14px;
}

.product-description spam {
    display: inline-flex;
    max-height: 42px;
    overflow: hidden;
}

@media(min-width: 798px) {
    padding: 40px;
}
`

const ProductInfo = styled.div`
padding: 40px 0;

.vitrine {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    .grid-images-one .image-pattern {
        width: 100%;
        height: 400px;
        border: 1px solid ${Colors.blue.light};
        border-radius: 2px;
        object-fit: cover;
    }
    .grid-images-two .image-item {
        width: 80px;
        height: 80px;
        border: 1px solid ${Colors.blue.light};
        border-radius: 2px;
        object-fit: cover;
    }
}

.buy-painel {

    .box-values {
        padding: 20px 0;
    }

    .ant-radio-button-wrapper {
        color: ${Colors.gray.white};
        background-color: ${Colors.gray.medium};
    }
    .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        background-color: ${Colors.pink.hot};
        border: 1px solid ${Colors.pink.hot};
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
        background-color: ${Colors.pink.hot};
    }

    .price-value {
        color: ${Colors.blue.light};
        font-weight: 700;
        font-size: 28px;
    }
    .product-info-generic {
        color: ${Colors.gray.ultraLight};
        font-size: 16px;
        margin-bottom: 0;
    }

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
        /* border: 1px solid ${Colors.gray.white}; */
        color: ${Colors.gray.white};
        padding: 6px;
        text-align: start;
    }
    .title-important {
        color: ${Colors.gray.ultraLight};
        font-size: 16px;
        text-transform: uppercase;
    }
    
    
}

@media(min-width: 798px) {

    .vitrine {
        flex-direction: row-reverse;
        align-items: start;
        margin-bottom: 0px;

    .grid-images-one {
        margin: 0 10px;
        .image-pattern {
            width: 400px;
            height: 612px;
            object-fit: cover;
        }
    }

    .grid-images-two {
        width: 200px;
        max-height: 600px;
            .image-item {
                width: 200px;
                height: 200px;
                object-fit: cover;
            }
        }
    }

    .buy-painel {
        padding: 0 20px;

        .box-frete {
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
    }
}

@media(min-width: 1140px) {
    display: flex;
}

`

const SimilarProducts = styled.div`
background-color: ${Colors.gray.medium};
padding: 20px 2%;
text-align: center;

.container-similar-products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
`