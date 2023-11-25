import { AiFillGithub, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai'
import { 
    ButtonDiv,
    ButtonHome, 
    ButtonLink, 
    ContainerMe, 
    ContainerText, 
    Description, 
    HomeBox, 
    HomeContainer,
    HomeLinks,
    LinkDescription,
    LinkIcon,
    Text, 
    Title, 
    TopTitle 
} from "./HomeElements"

const Home = () => {
  return (
    <>
        <HomeBox>
            <HomeContainer>
                <ContainerText>
                    <Text>
                        <TopTitle>Dev Full-Stack</TopTitle>
                        <Title>Gabriel Dantas</Title>
                        <Description>"Sou só um vírus, querendo escapar, dos programadores da vida."</Description>
                        <ButtonHome>Me conheça</ButtonHome>
                        <HomeLinks>
                            <ButtonLink onClick={() => {window.open('https://github.com/B1ELL20', '_blank')}}>
                                <LinkIcon><AiFillGithub /></LinkIcon>
                                <LinkDescription>GitHub</LinkDescription>
                                <ButtonDiv />
                            </ButtonLink>
                            <ButtonLink onClick={() => {window.open('https://www.linkedin.com/in/gabriel-dantas-costa-carneiro-056451230/', '_blank')}}>
                                <LinkIcon><AiFillLinkedin /></LinkIcon>
                                <LinkDescription>Linkedin</LinkDescription>
                                <ButtonDiv />
                            </ButtonLink>
                            <ButtonLink onClick={() => {window.open('https://www.behance.net/bielldantas20', '_blank')}}>
                                <LinkIcon><AiFillBehanceCircle /></LinkIcon>
                                <LinkDescription>Behance</LinkDescription>
                                <ButtonDiv />
                            </ButtonLink>
                        </HomeLinks>
                    </Text>
                </ContainerText>
                <ContainerMe>
                </ContainerMe>
            </HomeContainer>
        </HomeBox>
    </>
  )
}

export default Home