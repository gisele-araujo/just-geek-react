import '../../../assets/css/override.css'
import Art from '../../../assets/img/custom-category.png'
import Art2 from '../../../assets/img/custom.png'
import { Image } from 'antd';

export function GalleryArtist() {

    return (
        <>
        <Image.PreviewGroup>
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art2} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art2} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art2} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art2} />
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