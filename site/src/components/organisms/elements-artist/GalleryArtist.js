import styled from "styled-components";
import Art from '../../../assets/img/vaporwave-category.png'
import { Image } from 'antd';

export function GalleryArtist() {
    return (
        <>
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
            <Image
                style={ArtistArt}
                src={Art} />
        </>
    )
}

const ArtistArt = {
    padding: '18px',
    width: '300px',
    height: '300px',
    objectFit: 'cover'
}