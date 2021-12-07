import { Input } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { User } from "../../../services/User"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { SubTitle } from "../../atoms/Titles"

const SetPassword = () => {
    const idUser = sessionStorage.getItem('idUser')
    const [loading, setLoading] = useState(false)
    const [newPassword, setNewPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        const response = await User.putPasswordByUser(idUser, newPassword)

        if (response.status) {
            console.log('senha alterada com sucesso!')
        } else {
            console.log('erro ao alterar senha')
        }
        setLoading(false)
    }
    return (
        <>
            <SubTitle text='Alterar senha' />
            <FormPassword onSubmit={handleSubmit}>
                <label>Senha</label>
                <Input placeholder='Digite sua senha atual' type='password' />
                <label>Nova senha</label>
                <Input placeholder='Digite a nova senha'
                    type='password'
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    id="newPassword"
                    name="newPassword"
                    required />
                <Button type='submit' contentText='Alterar' style={{ width: '100%', marginTop: '20px' }} loading={loading} />

            </FormPassword>
        </>
    )
}

export default SetPassword

const FormPassword = styled.form`
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