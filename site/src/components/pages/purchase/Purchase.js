import { Header } from "../../organisms/Header"
import { useHistory } from "react-router"
import { Steps } from 'antd';
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { Button } from "../../atoms/Button";
import { Footer } from "../../molecules/Footer";
import { Delivery } from "./Delivery";
import { PurchaseCard } from "../../molecules/cards/PurchaseCard";
import { Payment } from "./Payment";
import { Success } from "./Success";
import { Payment as PaymentAPI } from "../../../services/Payment"

const { Step } = Steps;

const Purchase = () => {
    const history = useHistory()
    const [current, setCurrent] = useState(0)
    const [loading, setLoading] = useState(false)
    const idUser = sessionStorage.getItem('idUser')
    const shippingValue = sessionStorage.getItem('shippingValue')
    const steps = [
        {
            title: 'Entrega',
            content: <Delivery />,
        },
        {
            title: 'Pagamento',
            content: <Payment />,
        },
        {
            title: 'Sucesso',
            content: <Success />,
        },
    ];

    const next = () => {
        setCurrent(current + 1);

        if(current === 1) {
            console.log(current)
            payPurchase()
            
          }
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const payPurchase = async () => {
        setLoading(true)

        const response = await PaymentAPI.payPurchase(idUser, shippingValue)

        if (response.status) {
            console.log(response.data)
            window.open(response.data.url, "_blank")
        } else {
            console.log('erro ao realizar pagamento')
        }
        setLoading(false)
    }
    return (
        <>
            <Header />
            <PurchasePage>
                <PurchaseHeader>
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </PurchaseHeader>
                <PurchaseBody>
                    <div className="step-purchase">
                        <div className="steps-content">{steps[current].content}</div>
                        {current < steps.length - 1 && (
                            <PurchaseCard />
                        )}
                    </div>
                    <div className="steps-action">
                        {current > 0 || current < steps.length - 1 && (
                            <Button primary={false} style={{ margin: '0 8px' }} onClick={() => prev()} contentText='Voltar' />
                        )}
                        {current < steps.length - 1 && (
                            <Button primary={false} action='positive' loading={loading} onClick={() => loading ? setTimeout(next(), 500) : next()} contentText='Próximo' />
                        )}
                        {current === steps.length - 1 && (
                            <Button onClick={() => history.push('/perfil')} contentText='Concluído' />
                        )}
                    </div>
                </PurchaseBody>
            </PurchasePage>
            <Footer />
        </>
    )
}

export default Purchase

const PurchasePage = styled.section`
background-color: ${Colors.gray.darkPurple};
color: ${Colors.gray.white};
font-family: 'Exo 2', sans-serif;
padding-top: 85px;
width: 100%;
min-height: 60vh;
margin: 0 auto;
`

const PurchaseHeader = styled.div` 
width: 90%;
margin: 40px auto;

.ant-steps-item-icon {
    border: none;
    width: 36px;
    height: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title,
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: rgb(255 255 255 / 85%);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: rgb(255 255 255 / 45%);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon,
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
    background: ${Colors.pink.hot};
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: ${Colors.pink.hot};
}
.ant-steps-item-wait .ant-steps-item-icon, .ant-steps-item-finish .ant-steps-item-icon {
    background-color: ${Colors.gray.ultraLight};
}
`

const PurchaseBody = styled.div`
width: 90%;
margin: 0 auto;

.step-purchase {
    display: flex;
    justify-content: space-between;
}

.steps-content {
    width: 100%;
}

.steps-action {
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: flex-end;
}

.steps-action button {
    width: 100%;
}

@media(min-width: 768px) {
    .steps-content {
        width: 60%;
    }
    .steps-action button {
        width: auto;
    }
}
`