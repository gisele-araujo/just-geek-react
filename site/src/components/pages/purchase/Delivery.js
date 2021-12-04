import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { AddressCard } from "../../molecules/cards/AddressCard"

export function Delivery() {
    return(
        <>
        <DeliveryCard>
            <AddressCard />
            <AddressCard />
            <Button size='small' primary={false} contentText='Adicionar outro endereço' style={{margin: '20px 0 10px'}} />

        </DeliveryCard>
        </>
    )
}

const DeliveryCard = styled.div `
width: 100%;
border-radius: 6px;
background-color: ${Colors.gray.medium};
padding: 20px 25px;

`