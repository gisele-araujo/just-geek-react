import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { ProductBagCard } from "./ProductBagCard"

export function PurchaseCard() {
    return (
        <>
            <ContainerPurchaseCard>
                <div className="products-purchase">
                    <div className="container-products-purchase">
                        <ProductBagCard primary={false} deleteProduct={false} image='https://cea.vtexassets.com/arquivos/ids/43441710/Camiseta-Naruto-Plus-Size-Manga-Curta-Gola-Careca-Preta-9998737-Preto_2.jpg?v=637607634955000000' name='camiseta qualquer de um anime de eboy' value={50.00} />
                        <ProductBagCard primary={false} deleteProduct={false} image='https://cea.vtexassets.com/arquivos/ids/43441710/Camiseta-Naruto-Plus-Size-Manga-Curta-Gola-Careca-Preta-9998737-Preto_2.jpg?v=637607634955000000' name='camiseta qualquer de um anime de eboy' value={50.00} />
                        <ProductBagCard primary={false} deleteProduct={false} image='https://cea.vtexassets.com/arquivos/ids/43441710/Camiseta-Naruto-Plus-Size-Manga-Curta-Gola-Careca-Preta-9998737-Preto_2.jpg?v=637607634955000000' name='camiseta qualquer de um anime de eboy' value={50.00} />
                    </div>
                </div>
                <div className="products-info">
                    <p>
                        <strong>Frete</strong>
                        <spam>0,00</spam>
                    </p>
                    <p>
                        <strong>Cupom</strong>
                        <spam>- 0,00</spam>
                    </p>
                    <p>
                        <strong>Subtotal</strong>
                        <spam>0,00</spam>
                    </p>
                    <spam className="divisor"></spam>
                    <p>
                        <strong>Total</strong>
                        <spam>0,00</spam>
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