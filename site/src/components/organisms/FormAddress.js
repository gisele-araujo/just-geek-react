import { Input, Modal } from "antd"
import { useState } from "react"
import { useHistory } from "react-router"
import styled from "styled-components"
import { User } from "../../services/User"
import { Colors } from "../../shared/Colors"
import { Button } from "../atoms/Button"
import { SubTitle } from "../atoms/Titles"

export function FormAddress(props) {
    const {
        addAddress = true
    } = props

    const idUser = sessionStorage.getItem('idUser')
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [complement, setComplement] = useState('')
    const [reference, setReference] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const history = useHistory()
    const [loading, setLoading] = useState(false)
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

    const addAddressByUser = async (e) => {
        e.preventDefault()

        setLoading(true)

        let data = {
            cep: cep,
            logradouro: address,
            numero: number,
            complemento: complement,
            referencia: reference,
            bairro: neighborhood,
            cidade: city,
            uf: uf,
        }

        const response = await User.addAddressByUser(idUser, data)

        if (response.status) {
            setTextModal('Endereço adicionado com sucesso!')
            setLoading(false)
            showModal()
        } else {
            setTextModal('Erro ao cadastrar endereço, tente novamente')
            setLoading(false)
            showModal()
        }
    }
    return (
        <>
            <ContainerForm onSubmit={addAddressByUser}>
                {addAddress ?
                    <SubTitle text="Adicionar endereço" />
                    : null
                }
                <label>CEP</label>
                <Input placeholder='00000-000'
                    type='cep'
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    id="cep"
                    name="cep"
                    required />
                <div className="container-address-form">
                    <div className="large-input">
                        <label>Endereço</label>
                        <Input
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            id="address"
                            name="address"
                            required />
                    </div>
                    <div className="small-input">
                        <label>Number</label>
                        <Input
                            type='number'
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            id="number"
                            name="number"
                            required />
                    </div>
                </div>
                <div className="container-address-form">
                    <div>
                        <label>Complemento</label>
                        <Input
                            value={complement}
                            onChange={e => setComplement(e.target.value)}
                            id="complement"
                            name="complement" />
                    </div>
                    <div className="reference-input">
                        <label>Referencia</label>
                        <Input
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                            id="reference"
                            name="reference" />
                    </div>
                </div>
                <label>Bairro</label>
                <Input
                    value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}
                    id="neighborhood"
                    name="neighborhood"
                    required />

                <div className="container-address-form">
                    <div className="large-input">
                        <label>Cidade</label>
                        <Input
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            id="city"
                            name="city"
                            required />
                    </div>
                    <div className="small-input">
                        <label>UF</label>
                        <Input
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            id="uf"
                            name="uf"
                            required />
                    </div>
                </div>

                <Button type='submit' action="positive" primary={false} type='submit' contentText='Salvar' style={{ width: '100%', margin: '20px 0' }} loading={loading} />
                <Button type='button' primary={false} onClick={() => history.push('/perfil/meus-enderecos')} contentText='Voltar' style={{ width: '100%' }} />
            </ContainerForm>
            <ModalContainer>
                <Modal width={400} centered={true} bodyStyle={bodyModal} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>{textModal}</p>
                    <Button primary={false} contentText='Concluído' size="small" style={{ width: '100%' }} onClick={() => history.push('/perfil/meus-enderecos')} />
                </Modal>
            </ModalContainer>
        </>
    )
}

const ContainerForm = styled.form`
max-width: 400px;
height: max-content;

.container-address-form {
    width: 100%;
    display: flex;
}

.large-input {
    flex-grow: 1;
}

.small-input {
    margin-left: 10px;
    width: 100px;
}

.reference-input {
    margin-left: 10px;
}


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