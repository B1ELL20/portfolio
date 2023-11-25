import { 
    QualitiesBox, 
    QualitiesContainer,
    DescServ, 
    MidTitle, 
    TextBox, 
    TopTitle,
    QualitiesImg,
    QualitiesDivision
} from "./QualitiesElements"

const Qualities = ({ reverse, img, top, mid, desc }) => {
  return (
    <>
        <QualitiesBox>
            <QualitiesContainer reverse={reverse}>
                <QualitiesDivision>
                    <TextBox>
                        <TopTitle>{top}</TopTitle>
                        <MidTitle>{mid}</MidTitle>
                        <DescServ>{desc}</DescServ>
                    </TextBox>
                </QualitiesDivision>
                <QualitiesDivision>
                    <QualitiesImg src={img}/>
                </QualitiesDivision>
            </QualitiesContainer>
        </QualitiesBox>
    </>
  )
}

export default Qualities