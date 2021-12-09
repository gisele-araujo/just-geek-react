import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
import { Empty } from 'antd'
import { SubTitle } from '../../atoms/Titles'

export function MyOrders() {
    return(
        <>
        <OrderPage>
            <SubTitle text='Meus pedidos' />
            <Empty style={{ margin: "50px", color: '#fff' }} description="Você ainda não realizou pedidos" />
        </OrderPage>
        </>
    )
}

const OrderPage = styled.div ` 
color: ${Colors.gray.white};

`