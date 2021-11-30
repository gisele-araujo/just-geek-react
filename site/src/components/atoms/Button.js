import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/Colors';
import { LoadingOutlined } from '@ant-design/icons';

export function Button(props) {
    const {
        size = 'medium',
        primary = true,
        contentText = 'Botão padrão',
        enabled = true,
        onClick,
        style,
        type,
        action,
        loading = false
    } = props

    const newStyle = null;


    return (
        <>
            <BasicButton
                size={size}
                primary={primary}
                enabled={enabled}
                onClick={onClick}
                type={type}
                action={action}
                loading={loading}
                style={{ ...style, ...newStyle }}>

                {
                    loading ?
                        <>
                            <span>Carregando</span>
                            <LoadingOutlined style={{ marginLeft: 10 }} />
                        </>
                        :
                        contentText
                }
            </BasicButton>
        </>
    )

}

const BasicButton = styled.button`
outline: none;
font-size: 16px;
font-weight: 400;
text-transform: uppercase;
background-color: ${props => props.action === 'positive' ? Colors.green.light :
        props.action === 'negative' ? Colors.pink.hot :
            !props.enabled ? Colors.gray.light :
                props.primary ? Colors.blue.medium : 'transparent'};
color: ${props => props.action === 'positive' || props.action === 'negative' ? Colors.gray.white : Colors.gray.white};
border-radius: 5px;
border: ${props => !props.enabled || props.action || props.primary ? "none" : `1px solid ${Colors.gray.white}`};
padding: ${props => props.size === 'small' ? "6px 16px" : props.size === 'large' ? "18px" : "10px 40px"};
cursor: ${props => props.loading || !props.enabled ? "default" : "pointer"}; 
display: block;
opacity: ${props => props.loading || !props.enabled ? "0.6" : null};
transition: all 0.5s;

&:hover {
    background-color: ${props => props.primary && props.enabled ? '#3945a7' : props.action === 'positive' ? '#03886e' : null};
    border: '#3945a7';
}
`