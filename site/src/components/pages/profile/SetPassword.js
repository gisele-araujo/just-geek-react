import { Input } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { User } from "../../../services/User"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { SubTitle } from "../../atoms/Titles"
import { Modal } from "antd"

const SetPassword = () => {
    const idUser = sessionStorage.getItem('idUser')
    const [loading, setLoading] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [textModal, setTextModal] = useState('')

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (newPassword === confirmPassword) {
            const response = await User.putPasswordByUser(idUser, newPassword)
            if (response.status) {
                console.log('senha alterada com sucesso!')
            } else {
                console.log('erro ao alterar senha')
            }
            setLoading(false)
            setTextModal('Senha alterada com sucesso!')
            showModal()
        }
        else {
            console.log('senhas não conferem')
            setLoading(false)
            setTextModal('Senhas não conferem! Tente novamente.')
            showModal()
        }
    }

    return (
        <>
            <SubTitle text='Alterar senha' />
            <FormPassword onSubmit={handleSubmit}>
                <label>Nova senha</label>
                <Input placeholder='Digite a nova senha'
                    type='password'
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    id="newPassword"
                    name="newPassword"
                    required />
                <label>Confirme nova senha</label>
                <Input placeholder='Digite novamente a nova senha'
                    type='password'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    name="confirmPassword"
                    required />
                <Button type='submit' contentText='Alterar' style={{ width: '100%', marginTop: '20px' }} loading={loading} />

            </FormPassword>
            <ModalContainer>
                <Modal width={400} centered={true} bodyStyle={bodyModal} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>{textModal}</p>
                    <Button primary={false} contentText='Concluído' size="small" style={{ width: '100%' }} onClick={handleCancel} />
                </Modal>
            </ModalContainer>
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
    font-size: 14px;
    display: inline-block;
    padding-bottom: 5px;
}
`

const ModalContainer = styled.div`
font-family: 'Exo 2', sans-serif;
`

const bodyModal = {
    backgroundColor: Colors.gray.light,
    color: Colors.gray.white,
    fontSize: '18px',
    padding: '50px',
    textAlign: 'center',
}