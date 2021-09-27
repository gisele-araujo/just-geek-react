import styled from "styled-components";
import { BannerPromo } from "../molecules/BannerPromo";
import Arrow from './../../assets/arrow.svg'

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

const BannerSection = styled.section `
width: 100%;
padding: 40px 0;
display: flex;
justify-content: center;

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