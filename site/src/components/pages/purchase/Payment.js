import { useHistory } from "react-router"
import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { NameTitle } from "../../atoms/Titles"
import { CheckCircleOutlined } from '@ant-design/icons'
import { useEffect } from "react"

export function Payment(props) {
    const history = useHistory()
    useEffect(() => window.scrollTo(0, 0) ,[])

    return(
        <>
        <PaymentContainer>
            <NameTitle text='Pagamento seguro com Mercado Pago' />
            <p>Pague sua compra pelo Boleto, cartão de débito, ou em até 12 vezes sem júros no cartão de crédito.</p>
            <div className='img-payment'>
               <img src='https://cdn.awsli.com.br/909/909709/arquivos/mercadopago-logo.png' />
            </div>
            <p><CheckCircleOutlined style={CheckIcon} />Ao confirmar, você será redirecionado ao painel de pagamento do Mercado Pago. </p>
            <p><CheckCircleOutlined style={CheckIcon} />Após efetuar o pagamento, seu pedido estará disponível em <spam onClick={() => history.push('/perfil')}>"Meus pedidos"</spam> no painel do cliente.</p>

        </PaymentContainer>
        </>
    )
}

const PaymentContainer = styled.div `
width: 100%;
border-radius: 6px;
background-color: ${Colors.gray.medium};
padding: 20px 25px;

h4 {
    margin-bottom: 12px;
}

.img-payment {
    width: 100%;
    display: flex;
    align-items: center;

    img {
        background-color: ${Colors.gray.light};
        border-radius: 4px;
        margin: 10px 0 30px;
        padding: 20px;
        width: 100%;
    }
    p{
        font-size: 16px;
    }

    @media (min-width: 768px) {
        img {
            width: 80%;
        }
    }
}
`

const CheckIcon = {
    fontSize: '18px',
    paddingRight: '8px'
}