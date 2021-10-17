import styled from 'styled-components'
import { SecondaryTitle } from '../atoms/Titles'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Colors } from '../../shared/Colors'

export function BannerWarning(props) {
    const {
        text
    } = props

    return (
        <>
            <ContainerBanner>
                <ContainerText>
                    <ExclamationCircleOutlined className='icon-warning' />
                <SecondaryTitle text={text} />
                </ContainerText>
            
            </ContainerBanner>
        </>
    )
}

const ContainerBanner = styled.div` 
width: 100%;
background-color: ${Colors.pink.dark};

`

const ContainerText = styled.div `
max-width: 1600px;
width: 100%;
margin: 0 auto;
padding: 10px 2%;
display: flex;

.icon-warning svg {
    fill: #fff;
    font-size: 28px;
    margin: 3px 20px;
}

h4 {
    width: 85%;
}

@media(max-width: 768px) {

    .icon-warning svg {
        margin: 3px 10px;
    }
}
`

