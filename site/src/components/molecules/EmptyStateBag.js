import { Button } from './../atoms/Button'
import styled from "styled-components";
import Bag from '../../assets/shopping-bag.svg'
import { SecondaryTitle } from '../atoms/Titles';

export function EmptyStateBag() {
    return(
        <>
        <EmptyStateModal>
            <img src={Bag} style={{margin: '20px 0'}} />
        <SecondaryTitle text='Sua sacola está vazia!' />
        <Button contentText="Ir as compras" style={{margin: '10px 0'}} />
        </EmptyStateModal>
        
        </>
    )
}

const EmptyStateModal = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`