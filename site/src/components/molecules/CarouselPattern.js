import { Carousel } from 'antd';
import BlackFriday from './../../assets/img/bg-promo.gif'

export function CarouselPattern() {
    const contentStyle = {
        width: '100%',
        height: '65vh',
        color: '#fff',
        objectFit: 'cover',
        overflow: 'hidden',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#000',
    };

    return (
        <>
            <Carousel autoplay>
                <div>
                    <img src={BlackFriday} style ={Slide} />
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
            </Carousel>
        </>
    )
}

const Slide = {
    width: '100%',
    height: '65vh',
    objectFit: 'cover'
}