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
        img,
        hasButton = true,
        primary = true,
        loading = false
    } = props

    const CardStyle = {
        width: 240,
        backgroundColor: primary ? Colors.gray.dark : Colors.gray.darkPurple,
        border: 'none',
        margin: '20px'
    }

    return (
        <>
            <CardContainer>
                <Card
                    onClick={() => history.push(`/produto/${id}`)}
                    hoverable
                    style={CardStyle}
                    cover={loading? <Skeleton.Image /> : <img style={{ backgroundColor: Colors.gray.light }} alt="example" src={img} />}
                >
                    <CardDesc>
                        {
                            loading ?
                                <Skeleton active />
                                :
                                <>
                                    <h3>{title}</h3>
                                    <span><s>R${(Number(preco) + (Number(preco) * 0.10)).toFixed(2)}</s> <strong>R${preco} </strong></span>
                                    <p>ou até 5x de R$ {(preco / 5).toFixed(2)} sem juros</p>
                                </>
                        }

                    </CardDesc>
                    {hasButton ? <Button action='positive' primary={false} style={{ width: '100%', marginTop: '25px' }} contentText='Ver detalhes' />: null}
                </Card>
            </CardContainer>

        </>
    )
}

const CardContainer = styled.div `
.ant-card-cover > * {
    height: 280px;
    object-fit: cover;
}
.ant-skeleton-element .ant-skeleton-image {
    width: 240px;
    height: 100%;
}
`

const CardDesc = styled.div`
h3, p, span {
   color: ${Colors.gray.white}; 
}

h3 {
    max-height: 50px;
    min-height: 50px;
    overflow: hidden;
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



