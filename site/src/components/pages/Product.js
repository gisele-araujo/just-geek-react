import { Product as ProductApi } from "../../services/Product";
import { Breadcrumb, Image, Input, Radio } from 'antd';
import styled from "styled-components";
import '../../index.css'
import { Colors } from "../../shared/Colors";
import { Footer } from "../molecules/Footer";
import { NewslatterFooter } from "../molecules/NewslatterFooter";
import { Header } from "../organisms/Header";
import { BannerApp } from "../molecules/BannerApp";
import BgProduto from '../../assets/img/bg-produto.png'
import { NameTitle, SubTitle } from '../atoms/Titles';
import { Button } from '../atoms/Button';
import { CardProduto } from '../molecules/cards/ProductCard';
import { useParams } from 'react-router';
import { useEffect, useState } from "react";

const Product = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [addProduct, setAddProduct] = useState(false)

    async function getOtherProducts(id) {

        const response = await ProductApi.getSimilarProducts(id)

        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar produtos semelhantes')
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getOtherProducts(id)
    }, [])
    return (
        <>
            <Header addProduct={addProduct} />
            <ProductSection>
                <img src={BgProduto} className="bannerProduct" />

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
                                        src="https://cea.vtexassets.com/arquivos/ids/43441709-1600-auto?v=637607634952200000&width=1600&height=auto&aspect=true" />
                                </div>
                                <div className="grid-images-two">
                                    <Image
                                        className="image-item"
                                        src="https://cea.vtexassets.com/arquivos/ids/43441710-1600-auto?v=637607634955000000&width=1600&height=auto&aspect=true" />
                                    <Image
                                        className="image-item"
                                        src="https://cea.vtexassets.com/arquivos/ids/43441711-1600-auto?v=637607634957830000&width=1600&height=auto&aspect=true" />
                                    <Image
                                        className="image-item"
                                        src="https://cea.vtexassets.com/arquivos/ids/43441713-1600-auto?v=637607634960330000&width=1600&height=auto&aspect=true" />
                                </div>
                            </div>
                        </Image.PreviewGroup>
                        <div className="buy-painel">
                            <SubTitle text="Camiseta Naruto - Unissex" />
                            <p className="product-description">A camiseta Naruto - Unissex é um produto original,
                                licenciado pela Just Geek. Estampa inspirada no anime japonês Naruto. Na Just Geek
                                prezamos por qualidade, diversidade e conforto. A camiseta foi confeccionada em 100%
                                algodão. <a href='#description'> Leia +</a></p>
                            <strong className="price-value">R$ 70,00</strong>
                            <p className="price-value-installment">(ou até 5x de 14,00 sem juros)</p>
                            <Radio.Group defaultValue="M" buttonStyle="solid">
                                <Radio.Button value="PP">PP</Radio.Button>
                                <Radio.Button value="P">P</Radio.Button>
                                <Radio.Button value="M">M</Radio.Button>
                                <Radio.Button value="G">G</Radio.Button>
                                <Radio.Button value="GG">GG</Radio.Button>
                            </Radio.Group>
                            <Button onClick={() => setAddProduct(true)}
                                action='positive'
                                primary={false}
                                size="large"
                                contentText="Adicionar ao carrinho"
                                style={{ margin: '40px 0' }} />
                            <form className="box-frete">
                                <p className="title-frete">Consulte o frete e o prazo para sua região</p>
                                <div className="input-frete">
                                    <Input placeholder="Digite seu CEP" />
                                    <Button primary={false}
                                        size="small"
                                        contentText="Calcular" />
                                </div>
                            </form>
                        </div>
                    </ProductInfo>
                    <div id="description">
                        <NameTitle text="Descrição do Produto" />
                        <p className="product-description">A camiseta Naruto - Unissex é um produto original, licenciado 
                        pela Just Geek. Estampa inspirada no anime japonês Naruto. Na Just Geek prezamos por qualidade, 
                        diversidade e conforto. A camiseta foi confeccionada em 100% algodão.</p>
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

.bannerProduct {
    width: 100%;
    padding-top: 85px;
}
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
        object-fit: cover;
    }
    .grid-images-two .image-item {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
}

.buy-painel {

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
    .price-value-installment {
        color: ${Colors.gray.ultraLight};
        font-size: 16px;
    }

    .input-frete button {
        margin: 10px 0px !important;
        width: 100%;
    }
    .title-frete {
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
            padding: 25px 15px;
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