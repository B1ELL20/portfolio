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
                        <TopTitle>Serviços de software</TopTitle>
                        <Title>G3 Code</Title>
                        <Description>Uma iniciativa dedicada a trabalhos de software de qualidade!</Description>
                        <ButtonHome 
                            spy={true} 
                            offset={-100} 
                            smooth={true} 
                            duration={500} 
                            to="me">
                            Contrate a G3</ButtonHome>
                        <HomeLinks>
                            <ButtonLink onClick={() => {window.open('https://github.com/B1ELL20', '_blank')}}>
                                <LinkIcon><AiFillGithub /></LinkIcon>
                                <LinkDescription>Instagram</LinkDescription>
                                <ButtonDiv />
                            </ButtonLink>
                            <ButtonLink onClick={() => {window.open('https://www.linkedin.com/in/gabriel-dantas-costa-carneiro-056451230/', '_blank')}}>
                                <LinkIcon><AiFillLinkedin /></LinkIcon>
                                <LinkDescription>Whatsapp</LinkDescription>
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