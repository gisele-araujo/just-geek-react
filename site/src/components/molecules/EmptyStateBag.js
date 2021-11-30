import { Button } from './../atoms/Button'
import styled from "styled-components";
import Bag from '../../assets/img/shopping-bag.svg'
import { SecondaryTitle } from '../atoms/Titles';
import { useHistory } from 'react-router';

export function EmptyStateBag() {
    const history = useHistory()

    return(
        <>
        <EmptyStateModal>
            <img src={Bag} style={{margin: '20px 0'}} />
        <SecondaryTitle text='Sua sacola está vazia!' />
        <Button contentText="Ir as compras" style={{margin: '10px 0'}} onClick={() => history.push('/')} />
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