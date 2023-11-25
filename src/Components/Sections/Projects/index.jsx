import TitleSection from "../../TitleSection"
import { 
    Destaque,
    Project,
    ProjectImg,
    ProjectTitle,
    ProjectsBox, 
    ProjectsContainer
} from "./ProjectsElements"

const Projects = () => {

  return (
    <>
        <ProjectsBox>
            <TitleSection text={'Projetos'}/>
            <ProjectsContainer>
                <Project onClick={() => {window.open('https://luimit.com', '_blank')}}>
                    <ProjectImg img="0"/>
                    <ProjectTitle><Destaque>Site</Destaque> Luimit</ProjectTitle>
                </Project>
                <Project img="1" onClick={() => {window.open('https://www.sinergiasee.com.br', '_blank')}}>
                    <ProjectImg img="1"/>
                    <ProjectTitle><Destaque>Site</Destaque> Sinergia</ProjectTitle>
                </Project>
                <Project img="2" onClick={() => {window.open('https://www.ctsttreinamentosfsa.com', '_blank')}}>
                    <ProjectImg img="2"/>
                    <ProjectTitle><Destaque>Site</Destaque> CTST Treinamentos</ProjectTitle>
                </Project>
                <Project img="3" onClick={() => {window.open('https://b1ell20.github.io/bank/', '_blank')}}>
                    <ProjectImg img="3"/>
                    <ProjectTitle><Destaque>Site</Destaque> Bank</ProjectTitle>
                </Project>
            </ProjectsContainer>
        </ProjectsBox>
    </>
  )
}

export default Projects