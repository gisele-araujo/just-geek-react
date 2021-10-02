import { useHistory } from "react-router";
import styled from "styled-components";
import Art from '../../../assets/img/vaporwave-category.png'

export function GalleryArtist() {
    const history = useHistory()

    return (
        <>
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
            <img 
                onClick={() => history.push('/arte')}
                style={ArtistArt}
                src={Art} />
        </>
    )
}

const ArtistArt = {
    cursor: 'pointer',
    margin: '18px',
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    transition: '0.5s all'
}