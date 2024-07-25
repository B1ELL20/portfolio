import { AiFillInstagram } from 'react-icons/ai'
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

    const goWhatsapp = () => {

        window.location.href = '#/thanks'
    }

  return (
    <>
        <HomeBox>
            <HomeContainer>
                <ContainerText>
                    <Text>
                        <TopTitle>Softwares</TopTitle>
                        <Title>G3 Codee</Title>
                        <Description>Uma iniciativa dedicada a trabalhos de software de qualidade!</Description>
                        <ButtonHome 
                            spy={true} 
                            offset={-100} 
                            smooth={true} 
                            duration={1000} 
                            to="contacts">
                            Contrate a G3</ButtonHome>
                        <HomeLinks>
                            <ButtonLink onClick={() => {window.open('https://www.instagram.com/_g3codee/', '_blank')}}>
                                <LinkIcon><AiFillInstagram /></LinkIcon>
                                <LinkDescription>Instagram</LinkDescription>
                                <ButtonDiv />
                            </ButtonLink>
                            <ButtonLink onClick={goWhatsapp}>
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