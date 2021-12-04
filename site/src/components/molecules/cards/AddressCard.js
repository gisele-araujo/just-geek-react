import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { FormOutlined} from '@ant-design/icons'

export function AddressCard(props) {
    const {

    } = props
    return (
        <>
            <ContainerAddressCard>
                <strong>Denise Sousa Martinez</strong>
                <div className='container-address'>
                   <div className='address-data'>
                    <p>Rua Basílio da Gama, 149 B</p>
                    <p>Jardim das Flores, Osasco</p>
                    <p>CEP 09678-456</p>
                </div>
                <FormOutlined style={setAddress} /> 
                </div>
            </ContainerAddressCard>
        </>
    )
}

const ContainerAddressCard = styled.div`
border: 1px solid ${Colors.gray.light};
border-radius: 4px;
color: ${Colors.gray.white};
padding: 15px;
width: 100%;
max-width: 500px;
margin: 10px 0;

.container-address {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.address-data {
    padding-top: 10px;
    p {
        margin-bottom: 2px;
    }
}
`

const setAddress = {
    fontSize: '24px',
    color: Colors.blue.light,
    cursor: 'pointer'
}