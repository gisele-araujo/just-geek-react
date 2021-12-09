import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"
import { User } from "../../../services/User"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { SubTitle } from "../../atoms/Titles"
import { Skeleton } from "antd"

const Settings = () => {
    const idUser = sessionStorage.getItem('idUser')
    const username = sessionStorage.getItem('username')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    async function getUser(id) {
        const response = await User.getInfoUser(id)
        if (response.status) {
            setData(response.data)
            setLoading(false)
        } else {
            console.log('erro ao carregar informações do usuário')
        }
    }

    useEffect(() => getUser(idUser) ,[])

    return (
        <>
            <SubTitle text={`Olá, ${username}`} />
            <SettingsPage>
                <SettingsTable>
                    <tr>
                        <th>Nome</th>
                        <td>{loading ? <Skeleton.Input style={{ width: 200 }} active={true} size="small" /> : data.nomeCompleto}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{loading ? <Skeleton.Input style={{ width: 200 }} active={true} size="small" /> : data.email}</td>
                    </tr>
                    <tr>
                        <th>Telefone</th>
                        <td>{loading ? <Skeleton.Input style={{ width: 200 }} active={true} size="small" /> : data.celular}</td>
                    </tr>
                    <tr>
                        <th>Data de nascimento</th>
                        <td>{loading ? <Skeleton.Input style={{ width: 200 }} active={true} size="small" /> : data.dataNascimento}</td>
                    </tr>
                    <tr>
                        <th>CPF</th>
                        <td>{loading ? <Skeleton.Input style={{ width: 200 }} active={true} size="small" /> : data.cpf}</td>
                    </tr>
                </SettingsTable>
                {/* <Button contentText='Alterar dados cadastrais' style={{width: '100%'}} /> */}
            </SettingsPage>
        </>
    )
}

export default Settings

const SettingsPage = styled.div`
max-width: max-content;
`

const SettingsTable = styled.table`
border: 1px solid ${Colors.gray.white};
color: ${Colors.gray.white};
margin: 20px 0;
font-size: 14px;
text-align: justify;

tr {
    border: 1px solid ${Colors.gray.light}; 
}

th, td {
    padding: 15px 10px;
    padding-right: 40px;
}

th {
    color: #90869f;
}
`