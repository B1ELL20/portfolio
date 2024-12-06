import { useState } from "react";
import TitleSection from "../../TitleSection"
import { 
    BoxProject,
    ContainerButtons,
    LineButton,
    LineButtons,
    LinkProject,
    Project,
    ProjectsBox, 
    ProjectsContainer,
    ProjectsLine,
    RowProject,
    SlideBox
} from "./ProjectsElements"

import { FaArrowLeft, FaArrowRight, FaLink  } from "react-icons/fa";

const Projects = () => {

    const [slideArray, SetArray] = useState([1, 2, 3, 4]);
    const [cont, setCont] = useState(1);

    function moveRight() {

        var number;
        var array = [];

        slideArray.forEach((id) => {
            
            id === 1 ? number = 4 : number = id - 1;
            array.push(number);
        })

        SetArray(array);
        setCont(cont < 4 ? cont + 1 : 1);
    }

    function moveLeft() {

        var number;
        var array = [];

        slideArray.forEach((id) => {

            id === 4 ? number = 1 : number = id + 1;
            array.push(number);
        })

        SetArray(array);
        setCont(cont > 1 ? cont - 1 : 4);
    }

  return (
    
    <ProjectsBox>

        <TitleSection text={'Projetos desenvolvidos'}/>

        <ProjectsContainer>

            <Project>
                <LineButtons>
                    <ContainerButtons>
                        <LineButton onClick={moveLeft}><FaArrowLeft/></LineButton>
                        <LineButton onClick={moveRight}><FaArrowRight/></LineButton>
                    </ContainerButtons>
                </LineButtons>
            </Project>

            <ProjectsLine>
                <SlideBox>
                    <BoxProject $count={cont} $sld={slideArray[0]} href='https://luimit.com' target="_blank">
                        <RowProject $count={cont} $sld={slideArray[0]} $img={1}></RowProject>
                        <LinkProject>Acesse o Projeto! <FaLink /></LinkProject>
                    </BoxProject>
                    <BoxProject $count={cont} $sld={slideArray[1]} href='https://sinergiasee.com.br' target="_blank">
                        <RowProject $count={cont} $sld={slideArray[1]} $img={2}></RowProject>
                        <LinkProject>Acesse o Projeto! <FaLink /></LinkProject>
                    </BoxProject>
                    <BoxProject $count={cont} $sld={slideArray[2]} href='https://www.ctsttreinamentosfsa.com' target="_blank">
                        <RowProject $count={cont} $sld={slideArray[2]} $img={3}></RowProject>
                        <LinkProject>Acesse o Projeto! <FaLink /></LinkProject>
                    </BoxProject>
                    <BoxProject $count={cont} $sld={slideArray[3]} href='https://b1ell20.github.io/bank/' target="_blank">
                        <RowProject $count={cont} $sld={slideArray[3]} $img={4}></RowProject>
                        <LinkProject>Acesse o Projeto! <FaLink /></LinkProject>
                    </BoxProject>
                </SlideBox>
            </ProjectsLine>

        </ProjectsContainer>
    </ProjectsBox>
  )
}

export default Projects