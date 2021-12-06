import { Button } from "../atoms/Button";
import styled from "styled-components";
import { ProductBagCard } from "../molecules/cards/ProductBagCard";
import { Input } from "antd";
import { Colors } from "../../shared/Colors";
import { useState } from "react/cjs/react.development";
import { Product } from "../../services/Product";
import { useEffect } from "react";
import { EmptyStateBag } from "../molecules/EmptyStateBag";
import { useHistory } from 'react-router';
import { Drawer } from 'antd';

export function Bag(props) {
    const {
        onCloseDrawer,
        visibleDrawer,
        addProduct

    } = props
    const idUser = sessionStorage.getItem('idUser')
    const history = useHistory()
    const [coupon, setCoupon] = useState('')
    const [infoCoupon, setInfoCoupon] = useState([])
    const [amount, setAmount] = useState(0.00)
    const [data, setData] = useState([])

    async function getProducts(id) {
        const response = await Product.getProductsBag(id)

        if (response.status) {
            setData(response.data)
        } else {
            console.log('erro ao carregar produtos na sacola')
        }
    }

    async function addCoupon(e) {
        e.preventDefault()
        const response = await Product.getCoupon(coupon)

        if (response.status) {
            setInfoCoupon(response.data)
            sessionStorage.setItem('couponValue', response.data.porcentagemDesconto)
            sessionStorage.setItem('couponName', response.data.nomeCupom)
            console.log(response.data)
        } else {
            console.log('cupom invalido')
        }
    }

    function calculatePurchaseAmount() {
        let calculate = 0.00

        for (let i = 0; i < data.length; i++) {
            calculate = calculate + (Number(data[i].preco) * Number(data[i].quantidade))
            setAmount(calculate)
        }
    }

    useEffect(() => {
        getProducts(idUser)
    }, [addProduct])

    useEffect(() => {
        calculatePurchaseAmount()
    }, [data])
    return (
        <>
            <Drawer placement="right" onClose={onCloseDrawer} visible={visibleDrawer} width={400} className="drawer-bag">
                {
                    data && idUser || addProduct ?
                        <>
                            <HeaderModal />
                            <BagModal>
                                <div className="box-products">
                                    {data ?
                                        data.map((product) => {
                                            return (
                                                <>
                                                    <ProductBagCard image={product.imagens[0]} name={product.nomeProduto} value={product.preco} size={product.tamanho} qt={product.quantidade} />
                                                </>
                                            )
                                        })
                                        :
                                        null}
                                </div>
                                <div>
                                    <form onSubmit={addCoupon} className="box-cupom">
                                        <Input placeholder="Insira o cupom"
                                            value={coupon}
                                            onChange={e => setCoupon(e.target.value)}
                                            id="coupon"
                                            name="coupon"
                                            required />
                                        <Button type='submit' size="small" primary={false} contentText="Aplicar" />
                                    </form>
                                    <div>
                                        <strong className="amount">TOTAL: R$ {amount}  </strong>
                                    </div>
                                    <Button onClick={() => data ? history.push('/compra') : null} size="large" action="positive" primary={false} contentText="Finalizar compra" style={{ width: '100%' }} />
                                </div>
                            </BagModal>
                        </>
                        :
                        <EmptyStateBag />
                }
            </Drawer>
        </>
    )
}

const HeaderModal = styled.div`
padding-top: 10%;
`

const BagModal = styled.div`
font-family: 'Exo 2', sans-serif;
width: 100%;
height: 93%;
display: flex;
flex-direction: column;
justify-content: space-between;

.box-products {
    height: 75%;
    overflow-y: scroll;
    padding-right: 10px;

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

.box-cupom {
display: flex;
padding-top: 20px;

button {
    white-space: nowrap;
    margin-left: 6px;
}
}

.amount {
    font-size: 16px;
    color: ${Colors.gray.white};
    padding: 20px 0;
    display: inline-block;
}
`