import styled from "styled-components"
import { SubTitle } from "../../atoms/Titles"
import { AddressCard } from "../../molecules/cards/AddressCard"
import { PlusCircleOutlined } from '@ant-design/icons'
import { Colors } from "../../../shared/Colors"

const MyAddresses = () => {
    return (
        <>
            <ContainerAddAddress>
                <SubTitle text='Meus endereços' />
                <PlusCircleOutlined style={AddAddress} />
            </ContainerAddAddress>
            <AddressPage>
                <AddressCard />
                <AddressCard />
                <AddressCard />
            </AddressPage>
        </>
    )
}

export default MyAddresses

const ContainerAddAddress = styled.div `
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