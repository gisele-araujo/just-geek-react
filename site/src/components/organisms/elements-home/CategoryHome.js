import styled from "styled-components";
import { CategoryCard } from "../../molecules/cards/CategoryCard";
import Anime from '../../../assets/img/anime-category.png'
import Custom from '../../../assets/img/custom-category.png'
import Vaporwave from '../../../assets/img/vaporwave-category.png'
import Cartoon from '../../../assets/img/cartoons-category.png'
import { Colors } from "../../../shared/Colors";
import { SubTitle } from "../../atoms/Titles";

export function CategoryHome() {
    return (
        <>
        <CategorySection>
            <SubTitle text='Categorias Populares' />
             <CategoryGrade>
                <CategoryCard image={Anime} text='Anime' />
                <CategoryCard image={Custom} text='Custom' />
                <CategoryCard image={Vaporwave} text='Vaporwave' />
                <CategoryCard image={Cartoon} text='Cartoon' />
            </CategoryGrade>
        </CategorySection>
           
        </>
    )
}

const CategorySection = styled.section`
padding: 35px 0;
background-color: ${Colors.gray.medium};
text-align: center;
`

const CategoryGrade = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`