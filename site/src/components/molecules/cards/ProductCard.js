import React from "react";
import styled from "styled-components";
import { Colors } from '../../../shared/Colors'
import { Button } from '../../atoms/Button'
import { Card } from 'antd';
import ShirtExemple from '../../../assets/img/shirt.png'
import { useHistory } from "react-router";

export function CardProduto() {
    const history = useHistory();
    return (
        <>
            <Card
                onClick={() => history.push('/produto')}
                hoverable
                style={CardStyle}
                cover={<img style={{ backgroundColor: Colors.gray.light, padding: '15px' }} alt="example" src={ShirtExemple} />}
            >
                <CardDesc>
                    <h3>Camiseta - Naruto</h3>
                    <span><s>R$ 99,00</s> <strong>R$ 70,00</strong></span>
                    <p>ou até 5x de R$ 14,00</p>
                </CardDesc>
                <Button action='positive' primary={false} style={{ width: '100%', marginTop: '25px' }} contentText='COMPRAR' />
            </Card>
        </>
    )
}

const CardStyle = {
    width: 240,
    backgroundColor: Colors.gray.dark,
    border: 'none',
    margin: '20px'
}

const CardDesc = styled.div`
h3, p, span {
   color: ${Colors.gray.white}; 
}

s {
    color: ${Colors.gray.ultraLight};

}
strong {
    color: ${Colors.blue.light};
    font-weight: 700;
    font-size: 22px;
    padding-left: 8px;
}
p {
    font-size: 12px;
}
`



