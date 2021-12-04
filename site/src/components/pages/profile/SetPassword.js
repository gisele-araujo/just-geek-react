import { Input } from "antd"
import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { SubTitle } from "../../atoms/Titles"

const setPassword = () => {
    return(
        <>
        <SubTitle text='Alterar senha' />
        <FormPassword>
            <label>Senha</label>
            <Input placeholder='Digite sua senha atual' type='password' />
            <label>Nova senha</label>
            <Input placeholder='Digite a nova senha' type='password' />
            <Button contentText='Alterar' style={{width: '100%', marginTop: '20px'}} />

        </FormPassword>
        </>
    )
}

export default setPassword

const FormPassword = styled.form `
width: 100%;
max-width: 360px;

label {
    color: ${Colors.gray.white};
    padding: 20px 0;
    font-size: 16px;
    display: inline-block;
    padding-bottom: 5px;
}
`