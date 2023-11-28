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
import me from '../../../images/me.jpg'

const Me = () => {
  return (
    <>
        <MeBox>
            <MeContainer>
                <ContainerImg>
                    <MeImg src={me}/>
                </ContainerImg>
                <ContainerText>
                    <TextBox>
                        <TitleSection color={0} text={'Quem Sou?'}/>
                        <Text>Me chamo Garbriel Dantas! Sou um desenvolvedor Full-Stack de React. Venho a alguns anos trilhando esse caminho da programação, até que me achei nos sites e aplicativos. Buscando cada vez mais conhecimento e maestria no que faço, sigo aprendendo e evoluindo cada vez mais.</Text>
                    </TextBox>
                    <Card>
                        <CardItem>
                            <ItemIcon><BsArrowReturnRight /></ItemIcon>
                            <ItemContent>Dev Full-Stack</ItemContent>
                        </CardItem>
                        <CardItem>
                            <ItemIcon><BsArrowReturnRight /></ItemIcon>
                            <ItemContent>2 Anos de Experiência</ItemContent>
                        </CardItem>
                        <CardItem>
                            <ItemIcon><BsArrowReturnRight /></ItemIcon>
                            <ItemContent>Freelancer</ItemContent>
                        </CardItem>
                    </Card>
                </ContainerText>
            </MeContainer>
        </MeBox>
    </>
  )
}

export default Me