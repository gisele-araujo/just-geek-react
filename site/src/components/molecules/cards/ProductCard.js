import React from "react";
import styled from "styled-components";
import { Colors } from '../../../shared/Colors'
import { Button } from '../../atoms/Button'
import { Card } from 'antd';
import { useHistory } from "react-router";
import ShirtLoading from '../../../assets/img/shirt-loading.png'
import { Skeleton } from 'antd'

export function CardProduto(props) {
    const history = useHistory();

    const {
        id,
        title,
        preco,
        specification,
        description,
        img,
        loading = false
    } = props

    return (
        <>
            <Card
                onClick={() => history.push(`/produto/${id}`)}
                hoverable
                style={CardStyle}
                cover={<img style={{ backgroundColor: Colors.gray.light, padding: '15px' }} alt="example" src={loading ? ShirtLoading : img} />}
            >
                <CardDesc>
                    {
                        loading ?
                        <Skeleton active />
                        :
                            <>
                                <h3>{title}</h3>
                                <span><s>R${preco}</s> <strong>R${(preco - (preco * 0.15)).toFixed(2)} </strong></span>
                                <p>ou até 5x de R$ {(preco / 5).toFixed(2)} sem juros</p>
                            </>
                    }

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

h3 {
    max-height: 50px;
    min-height: 50px;
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



