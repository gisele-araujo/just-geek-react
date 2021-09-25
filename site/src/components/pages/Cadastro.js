import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Header } from "../molecules/Header";

const Cadastro = () => {
    return(
        <>
        <Header />
        <ContainerCadastro>
            <Button />

        </ContainerCadastro>
        </>
    )
}

export default Cadastro;

const ContainerCadastro = styled.div `
width: 70%;
height: 400px;
background-color: aliceblue;
font-family: 'Exo 2', sans-serif;
`