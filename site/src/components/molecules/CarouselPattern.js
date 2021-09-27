import { Carousel } from 'antd';

export function CarouselPattern() {
    const contentStyle = {
        height: '380px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#000',
    };

    return (
        <>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    )
}