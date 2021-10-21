import '../../../assets/css/override.css'
import ImgOne from '../../../assets/img/arts/akali-red.jpg'
import ImgTwo from '../../../assets/img/arts/zed-colorido.jpg'
import ImgThree from '../../../assets/img/arts/dragao.png'
import ImgFour from '../../../assets/img/arts/jack-sparrow-amarelo.jpg'
import ImgFive from '../../../assets/img/arts/jack-sparrow-negativo.jpg'
import ImgSix from '../../../assets/img/arts/omniman.jpg'
import ImgSeven from '../../../assets/img/arts/sasuke.png'
import ImgEight from '../../../assets/img/arts/todoroki-red-blue.png'
import ImgNine from '../../../assets/img/arts/zed-negativo.jpg'
import { Image } from 'antd';

export function GalleryArtist() {

    return (
        <>
        <Image.PreviewGroup>
            <Image
                style={ArtistArt}
                src={ImgThree} />
            <Image
                style={ArtistArt}
                src={ImgTwo} />
            <Image
                style={ArtistArt}
                src={ImgNine} />
            <Image
                style={ArtistArt}
                src={ImgFour} />
            <Image
                style={ArtistArt}
                src={ImgFive} />
            <Image
                style={ArtistArt}
                src={ImgEight} />
            <Image
                style={ArtistArt}
                src={ImgSix} />
            <Image
                style={ArtistArt}
                src={ImgSeven} />
        </Image.PreviewGroup>
            
        </>
    )
}

const ArtistArt = {
    cursor: 'pointer',
    padding: '16px',
    width: '270px',
    height: '270px',
    objectFit: 'cover',
    transition: '0.5s all'
}