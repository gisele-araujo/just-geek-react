import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { Footer } from "../molecules/Footer";
import { Header } from "../organisms/Header";
import BgProduto from '../../assets/img/bg-produto.png'

const Product = () => {
    return(
        <>
        <Header />
        <ProductSection>
            <img src={BgProduto} className="bannerProduct" />
        </ProductSection>
        <Footer />
        </>
    )
}

export default Product;

const ProductSection = styled.section `
background-color: ${Colors.gray.darkPurple};
height: 100vh;

.bannerProduct {
    width: 100%;
    padding-top: 85px;
}
`