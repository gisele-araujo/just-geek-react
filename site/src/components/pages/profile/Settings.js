import styled from "styled-components"
import { Colors } from "../../../shared/Colors"
import { Button } from "../../atoms/Button"
import { SubTitle } from "../../atoms/Titles"

const Settings = () => {
    return (
        <>
            <SubTitle text='Olá, Gisele' />
            <SettingsPage>
                <SettingsTable>
                    <tr>
                        <th>Nome</th>
                        <td>Gisele</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>exemplo@gmail.com</td>
                    </tr>
                    <tr>
                        <th>Telefone</th>
                        <td>(11) 956376393</td>
                    </tr>
                    <tr>
                        <th>Data de nascimento</th>
                        <td>11/12/1997</td>
                    </tr>
                    <tr>
                        <th>CPF</th>
                        <td>49073676860</td>
                    </tr>
                </SettingsTable>
                <Button contentText='Alterar dados cadastrais' style={{width: '100%'}} />
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