import { Carousel } from 'antd';
import SlidePromo from './../../assets/img/bg-promo.gif'
import SlideApp from './../../assets/img/bg-app.gif'

export function CarouselPattern() {

    return (
        <>
            <Carousel autoplay>
                <div>
                    <img src={SlidePromo} style ={Slide} />
                </div>
                <div>
                    <img src= {SlideApp} style={Slide} />
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