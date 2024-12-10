import { BsArrowReturnRight } from 'react-icons/bs'
import { 
    Card,
    CardItem,
    ContainerImg,
    ContainerText,
    ItemContent,
    ItemIcon,
    MeBox, 
    MeContainer, 
    MeImg, 
    Text, 
    TextBox
} from "./MeElements"
import TitleSection from '../../TitleSection'
import g3 from '../../../images/Logog3code.webp'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Me = () => {

        
    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);

  return (

    <MeBox id="me">
        <MeContainer>
            <ContainerImg>
                <MeImg data-aos="zoom-out-down" src={g3} alt='Logo da empresa G3 Codee'/>
            </ContainerImg>
            <ContainerText>
                <TextBox>
                    <TitleSection color={0} text={'Sobre a G3'}/>
                    <Text>Voltada ao trabalho de excelência e produtividade, tem como foco principal o desenvolvimento de sites, mas também atua com outros serviços. Vem a 2 anos executando trabalhos de qualidade e eficiência.</Text>
                </TextBox>
                <Card>
                    <CardItem>
                        <ItemIcon><BsArrowReturnRight /></ItemIcon>
                        <ItemContent>Desenvolvimento WEB</ItemContent>
                    </CardItem>
                    <CardItem>
                        <ItemIcon><BsArrowReturnRight /></ItemIcon>
                        <ItemContent>Apps</ItemContent>
                    </CardItem>
                    <CardItem>
                        <ItemIcon><BsArrowReturnRight /></ItemIcon>
                        <ItemContent>Desktop</ItemContent>
                    </CardItem>
                </Card>
            </ContainerText>
        </MeContainer>
    </MeBox>
  )
}

export default Me