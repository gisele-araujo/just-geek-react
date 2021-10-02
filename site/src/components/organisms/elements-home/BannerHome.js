import styled from "styled-components";
import { BannerPromo } from "../../molecules/BannerPromo";
import Arrow from './../../../assets/img/arrow.svg'

export function BannerHome() {
    return (
        <>
            <BannerSection>
                <img src={Arrow} className="arrow-promotion" />
                <BannerPromo />
                <img src={Arrow} className="arrow-promotion" />
            </BannerSection>
        </>
    )
}

const BannerSection = styled.section`
width: 100%;
padding: 40px 0;
max-width: 1600px;
margin: 0 auto;
display: flex;
justify-content: center;

@media(max-width: 768px) {
padding: 20px;
    .arrow-promotion {
        display: none;
    }
}

.arrow-promotion {
    animation: arrow-animate 1s infinite;
    width: 50px;
    margin: 0 20px;
}

@keyframes arrow-animate {
    0% {
        padding-top: 17px;
    }
    50% {
        padding-top: 0;
    }
    100% {
        padding-top: 17px;
    }
}
`