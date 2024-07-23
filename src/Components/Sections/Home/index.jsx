import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
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
                        <TopTitle>Softwares</TopTitle>
                        <Title>G3 Code</Title>
                        <Description>Uma iniciativa dedicada a trabalhos de software de qualidade!</Description>
                        <ButtonHome 
                            spy={true} 
                            offset={-100} 
                            smooth={true} 
                            duration={1000} 
                            to="contacts">
                            Contrate a G3</ButtonHome>
                        <HomeLinks>
                            <ButtonLink onClick={() => {window.open('https://github.com/B1ELL20', '_blank')}}>
                                <LinkIcon><AiFillGithub /></LinkIcon>
                                <LinkDescription>Instagram</LinkDescription>
                                <ButtonDiv />
                            </ButtonLink>
                            <ButtonLink onClick={() => {window.open('https://wa.me/5575991359299', '_blank')}}>
                                <LinkIcon><FaWhatsapp /></LinkIcon>
                                <LinkDescription>Whatsapp</LinkDescription>
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