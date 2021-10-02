import styled from "styled-components";
import { Colors } from "../../../shared/Colors";
import { SubTitle } from "../../atoms/Titles";
import { RateCard } from "../../molecules/cards/RateCard";

export function RateHome() {
    return (
        <>
            <RateSection>
                <SubTitle text='Avaliação dos clientes' />
                <RateGrade>
                    <RateCard name='Luana Bittencourt' comment='Camiseta muito linda, amo a loja, sempre me surpreende!' rate={5} />
                    <RateCard name='Luana Bittencourt' comment='Camiseta muito linda, amo a loja, sempre me surpreende!' rate={5} />
                    <RateCard name='Luana Bittencourt' comment='Camiseta muito linda, amo a loja, sempre me surpreende!' rate={5} />
                    <RateCard name='Luana Bittencourt' comment='Camiseta muito linda, amo a loja, sempre me surpreende!' rate={5} />
                    <RateCard name='Luana Bittencourt' comment='Camiseta muito linda, amo a loja, sempre me surpreende!' rate={5} />
                </RateGrade>
            </RateSection>
        </>
    )
}

const RateSection = styled.section`
background-color: ${Colors.gray.medium};
padding: 35px 2%;
text-align: center;
`

const RateGrade = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`