import styled from 'styled-components'
import { NameTitle, SecondaryTitle } from '../atoms/Titles'
import { TwitterOutlined, InstagramFilled } from '@ant-design/icons'
import { Colors } from '../../shared/Colors'
import BgProfile from '../../assets/img/bg-section-artist.jpeg'
import { Skeleton } from 'antd'

export function ProfileArtist(props) {
    const {
        name,
        username,
        pic,
        bio,
        loading,
        twitter,
        instagram
    } = props

    return (
        <>
            <ContainerProfile>
                <ProfileBox>
                    {loading ?
                        <>
                            <Skeleton.Image />
                            <Skeleton.Input style={{ width: 200, margin: 20 }} active={true} size="small" />
                            <Skeleton.Input style={{ width: 300, marginBottom: 20 }} active={true} size="small" />
                        </>
                        :
                        <>
                            <img src={pic} />
                            <NameTitle text={`${username} (${name})`} />
                            <SecondaryTitle text={bio} />
                        </>

                    }
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
background-image: url(${BgProfile});
background-position: right;
width: 100%;
height: 300px;
display: flex;
align-items: flex-end;
justify-content: center;
`

const ProfileBox = styled.div`
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
.ant-skeleton-element .ant-skeleton-image {
    width: 100px;
    height: 100px;
}
`

const NetworkBox = styled.div` 

`

const Network = {
    cursor: 'pointer',
    color: Colors.gray.white,
    fontSize: '24px',
    padding: '6px'
}
