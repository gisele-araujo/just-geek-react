import styled from "styled-components"
import { SubTitle } from "../../atoms/Titles"
import { AddressCard } from "../../molecules/cards/AddressCard"
import { PlusCircleOutlined } from '@ant-design/icons'
import { Colors } from "../../../shared/Colors"
import { useEffect, useState } from "react"
import { User } from "../../../services/User"
import { Empty } from "antd"
import { useHistory } from "react-router"

const MyAddresses = () => {
    const idUser = sessionStorage.getItem('idUser')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    async function getAllAddresses() {
        const response = await User.getAddressesByUser(idUser)
        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao exibir endereços')
        }
    }

    useEffect(() => getAllAddresses(), [])
    return (
        <>
            <ContainerAddAddress>
                <SubTitle text='Meus endereços' />
                <PlusCircleOutlined style={AddAddress} onClick={() => history.push('/perfil/adicionar-endereco')} />
            </ContainerAddAddress>
            <AddressPage>
                {
                    loading ?
                        <>
                            <AddressCard loading />
                        </>

                        :
                        data ?
                            data.map((address) => {
                                return (
                                    <AddressCard name={address.nomeDestinatario} address={address.endereco} city={address.bairroCidade} cep={address.cep} />
                                )
                            })
                            : 
                            <Empty style={{ margin: "50px", color: '#fff' }} description="Você não possui endereços cadastrados, adicione um novo para comprar " />
                }
            </AddressPage>
        </>
    )
}

export default MyAddresses

const ContainerAddAddress = styled.div`
display: flex;
align-items: center;

h3 {
    margin-bottom: 0;
}
`

const AddressPage = styled.div`
margin: 20px 0;
`

const AddAddress = {
    fontSize: '24px',
    color: Colors.gray.ultraLight,
    paddingLeft: '15px',
    cursor: 'pointer'
}