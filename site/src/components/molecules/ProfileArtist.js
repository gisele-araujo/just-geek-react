import styled from 'styled-components'
import { NameTitle, SecondaryTitle } from '../atoms/Titles'
import { TwitterOutlined, InstagramFilled } from '@ant-design/icons'
import { Colors } from '../../shared/Colors'

export function ProfileArtist(props) {
    const {
        name,
        pic,
        bio,
        twitter,
        instagram
    } = props

    return (
        <>
            <ContainerProfile>
                <ProfileBox>
                    <img src={pic} />
                    <NameTitle text={name} />
                    <SecondaryTitle text={bio} />
                    <NetworkBox>
                        <TwitterOutlined style={Network} />
                        <InstagramFilled style={Network} />
                    </NetworkBox>
                </ProfileBox>
            </ContainerProfile>
        </>
    )
}

const ContainerProfile = styled.div` 
background-color: ${Colors.gray.medium};
width: 100%;
height: 300px;
display: flex;
align-items: flex-end;
justify-content: center;
`

const ProfileBox = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;

img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    object-fit: cover;
    border: 2px solid ${Colors.gray.white};
    margin-bottom: 10px;
}
`

const NetworkBox = styled.div ` 

`

const Network = {
    cursor: 'pointer',
    color: Colors.gray.white,
    fontSize: '24px',
    padding: '6px'
}
