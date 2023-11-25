import { BsArrowReturnRight } from 'react-icons/bs'
import { 
    Card,
    CardItem,
    CardList,
    ContainerCard,
    ContainerText,
    ItemContent,
    ItemIcon,
    MeBox, 
    MeContainer, 
    Text, 
    TextBox
} from "./MeElements"
import TitleSection from '../../TitleSection'

const Me = () => {
  return (
    <>
        <MeBox>
            <MeContainer>
                <ContainerText>
                    <TextBox>
                        <TitleSection color={0} text={'Quem Sou?'}/>
                        <Text>Me chamo Garbriel Dantas! Sou um desenvolvedor Full-Stack de React. Venho a alguns anos trilhando esse caminho da programação, até que me achei nos sites e aplicativos. Buscando cada vez mais conhecimento e maestria no que faço, sigo aprendendo e evoluindo cada vez mais.</Text>
                    </TextBox>
                </ContainerText>
                <ContainerCard>
                    <Card>
                        <CardList>
                            <CardItem>
                                <ItemIcon><BsArrowReturnRight /></ItemIcon>
                                <ItemContent>Gabriel Dantas</ItemContent>
                            </CardItem>
                            <CardItem>
                                <ItemIcon><BsArrowReturnRight /></ItemIcon>
                                <ItemContent>20 Anos</ItemContent>
                            </CardItem>
                            <CardItem>
                                <ItemIcon><BsArrowReturnRight /></ItemIcon>
                                <ItemContent>Programador</ItemContent>
                            </CardItem>
                            <CardItem>
                                <ItemIcon><BsArrowReturnRight /></ItemIcon>
                                <ItemContent>Dev Full-Stack</ItemContent>
                            </CardItem>
                            <CardItem>
                                <ItemIcon><BsArrowReturnRight /></ItemIcon>
                                <ItemContent>Freelancer</ItemContent>
                            </CardItem>
                        </CardList>
                    </Card>
                </ContainerCard>
            </MeContainer>
        </MeBox>
    </>
  )
}

export default Me