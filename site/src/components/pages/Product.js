import { Product as ProductApi } from "../../services/Product";
import { Breadcrumb, Image, Input, Radio, Modal } from 'antd';
import styled from "styled-components";
import '../../index.css'
import { Colors } from "../../shared/Colors";
import { Footer } from "../molecules/Footer";
import { NewslatterFooter } from "../molecules/NewslatterFooter";
import { Header } from "../organisms/Header";
import { NameTitle, SubTitle } from '../atoms/Titles';
import { Button } from '../atoms/Button';
import { CardProduto } from '../molecules/cards/ProductCard';
import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from "react";
import { Shipping } from "../molecules/Shipping";

const Product = () => {
    const idUser = sessionStorage.getItem('idUser')
    const { id } = useParams()
    const history = useHistory()
    const [size, setSize] = useState('')
    const [product, setProduct] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [addProduct, setAddProduct] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
        console.log('modal')
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangeSize = (e) => {
        setSize(e.target.value)
    }

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

    async function addProductBag(idUser, idProduct, size) {
        setLoading(true)
        const response = await ProductApi.addProductBag(idUser, idProduct, 1, size)

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

                                <p className="product-info-generic"><spam>de </spam><s>R${(Number(product.preco) + (Number(product.preco) * 0.10)).toFixed(2)}</s></p>
                                <spam className="product-info-generic">por </spam><strong className="price-value">R${product.preco} </strong> <spam className="product-info-generic">à vista</spam>
                                <p className="product-info-generic">(ou até 5x de {(product.preco / 5).toFixed(2)} sem juros)</p>
                            </div>
                            <p className="title-important">Tamanho:</p>
                            <Radio.Group onChange={onChangeSize} buttonStyle="solid" value={size}>
                                <Radio.Button value="PP">PP</Radio.Button>
                                <Radio.Button value="P">P</Radio.Button>
                                <Radio.Button value="M">M</Radio.Button>
                                <Radio.Button value="G">G</Radio.Button>
                                <Radio.Button value="GG">GG</Radio.Button>
                            </Radio.Group>
                            <Button onClick={() => idUser ? addProductBag(idUser, id, size) : showModal()}
                                action='positive'
                                primary={false}
                                size="large"
                                loading={loading}
                                contentText="Adicionar ao carrinho"
                                style={{ margin: '40px 0' }} />
                            <Shipping />
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
            <ModalContainer>
                <Modal width={400} centered={true} bodyStyle={bodyModal} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Faça login para adicionar produto ao carrinho!</p>
                    <Button contentText='Fazer login' style={{width: '100%'}} onClick={() => history.push('/login')} />
                </Modal>
            </ModalContainer>
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

const ModalContainer = styled.div `
font-family: 'Exo 2', sans-serif;
`

const bodyModal = {
    backgroundColor: Colors.gray.light,
    color: Colors.gray.white,
    fontSize: '18px',
    padding: '50px',
    textAlign: 'center',
}