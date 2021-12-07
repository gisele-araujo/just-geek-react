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
import { Drawer, Skeleton } from 'antd';

export function Bag(props) {
    const {
        onCloseDrawer,
        visibleDrawer,
        addProduct

    } = props
    const idUser = sessionStorage.getItem('idUser')
    const shippingValue = sessionStorage.getItem('shippingValue')
    const couponValue = sessionStorage.getItem('couponValue')
    const couponName = sessionStorage.getItem('couponName')
    const history = useHistory()
    const [data, setData] = useState([])
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [coupon, setCoupon] = useState('')
    const [amount, setAmount] = useState(0.00)
    const [loading, setLoading] = useState(true)

    async function getProducts(id) {
        const response = await Product.getProductsBag(id)

        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar produtos na sacola')
        }
    }

    async function deleteProductBag(idProduct, size) {
        await Product.deleteProductBag(idUser, idProduct, 1, size)
        setDeleteProduct(true)
    }

    async function addCoupon(e) {
        e.preventDefault()
        const response = await Product.getCoupon(coupon)

        if (response.status) {
            sessionStorage.setItem('couponValue', response.data.porcentagemDesconto)
            sessionStorage.setItem('couponName', response.data.nomeCupom)
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

    function calculateDiscount() {
        let calculate = 0.00

        if (couponValue) {
            calculate = (Number(couponValue) / 100 * (Number(amount) + Number(shippingValue))).toFixed(2)
        }
        return calculate
    }

    useEffect(() => {
        getProducts(idUser)
    }, [addProduct, deleteProduct])
    useEffect(() => {
        calculatePurchaseAmount()
    }, [data])
    return (
        <>
            <Drawer placement="right" onClose={onCloseDrawer} visible={visibleDrawer} width={window.screen.width <= 768 ? 375 : 420} className="drawer-bag">
                {
                    data && idUser || addProduct ?
                        <>
                            <HeaderModal />
                            <BagModal>
                                <div className="box-products">
                                    {loading ?
                                        <ProductBagCard loading />
                                        :

                                        data ?
                                            data.map((product, index) => {
                                                return (
                                                    <>
                                                        <ProductBagCard key={index} loading={loading} id={product.idProduto} qt={product.quantidade} image={product.imagens[0]} name={product.nomeProduto} value={product.preco} size={product.tamanho} deleteProductFunction={deleteProductBag} />
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
                                    <div className="amount">
                                        {couponValue ?
                                            <p>CUPOM ({couponName}): <spam>- R$ {calculateDiscount()}</spam></p>
                                            :
                                            null
                                        }
                                        <p>FRETE: <spam>R$ {
                                            loading ?
                                                <Skeleton.Input style={{ width: 50 }} size="small" active />
                                                : shippingValue ?
                                                    shippingValue : "00.00"}</spam></p>
                                        <strong>TOTAL: <spam>R$ {
                                            loading ?
                                                <Skeleton.Input style={{ width: 50 }} active />
                                                : ((Number(amount) + Number(shippingValue)) - calculateDiscount()).toFixed(2)}</spam> </strong>
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
    padding: 20px 0;
}
.amount p, .amount strong {
    display: flex;
    justify-content: space-between;
}
.amount p{
    color: ${Colors.gray.white};
    font-size: 14px;
    margin-bottom: 4px;
}
.amount strong{
    color: ${Colors.gray.white};
    font-size: 16px;
    margin-top: 12px;
}
`