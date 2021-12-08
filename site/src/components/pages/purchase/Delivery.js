import { Empty } from "antd"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { User } from "../../../services/User"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { AddressCard } from "../../molecules/cards/AddressCard"
import { Shipping } from '../../molecules/Shipping'
import { Alert } from '../../atoms/Alert'

export function Delivery() {
    const idUser = sessionStorage.getItem('idUser')
    const shippingValue = sessionStorage.getItem('shippingValue')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function getAllAddresses() {
        const response = await User.getAddressesByUser(idUser)
        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao exibir endereços')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getAllAddresses()
    }, [])
    return (
        <>
            <DeliveryCard>
            { !shippingValue ? <Alert primary text="Calcule o frete para continuar" /> : null}
                <Shipping primary={false} />
                {loading ?
                    <AddressCard loading />
                    :
                    data ?
                        data.map((address) => {
                            return (
                                <AddressCard name={address.nomeDestinatario} address={address.endereco} city={address.bairroCidade} cep={address.cep} />
                            )
                        })
                        :
                        <Empty style={{ margin: "50px" }} description="Você não possui endereços cadastrados, adicione para continuar " />
                }
                <Button size='small' primary={false} contentText={data ? 'Adicionar outro endereço' : 'Adicionar novo endereço'} style={{ margin: '20px 0 10px' }} />

            </DeliveryCard>
        </>
    )
}

const DeliveryCard = styled.div`
width: 100%;
border-radius: 6px;
background-color: ${Colors.gray.medium};
padding: 20px 25px;

`