import { useState } from "react";
import TitleSection from "../../TitleSection"
import { 
    ContainerButtons,
    Destaque,
    LineButton,
    LineButtons,
    Project,
    ProjectImg,
    ProjectTitle,
    ProjectsBox, 
    ProjectsContainer,
    ProjectsLine,
    RowProject,
    SlideBox
} from "./ProjectsElements"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {

    const [slideArray, SetArray] = useState([1, 2, 3, 4]);


    function moveRight() {

        var number;
        var array = [];

        slideArray.forEach((id) => {

            if (id === 1) {

                number = 4;

            } else {

                number = id - 1;
            }

            array.push(number);
        })

        SetArray(array);
    }

    function moveLeft() {

        var number;
        var array = [];

        slideArray.forEach((id) => {

            if (id === 4) {

                number = 1;

            } else {

                number = id + 1;
            }

            array.push(number);
        })

        SetArray(array);
    }

  return (
    
    <ProjectsBox>

        <TitleSection text={'Projetos'}/>

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
                    <RowProject id="1" $sld={slideArray[0]}></RowProject>
                    <RowProject id="2" $sld={slideArray[1]}></RowProject>
                    <RowProject id="3" $sld={slideArray[2]}></RowProject>
                    <RowProject id="4" $sld={slideArray[3]}></RowProject>
                </SlideBox>
            </ProjectsLine>

        </ProjectsContainer>
    </ProjectsBox>
  )
}

export default Projects