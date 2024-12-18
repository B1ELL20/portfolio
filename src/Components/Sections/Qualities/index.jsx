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

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Qualities = ({ reverse, img, top, mid, desc, alt }) => {

    
    useEffect(() => {

        Aos.init({ duration: 1000 });

    }, []);

  return (

    <QualitiesBox>
        <QualitiesContainer reverse={reverse}>
            <QualitiesDivision data-aos="fade-down" data-aos-offset='250'>
                <TextBox>
                    <TopTitle>{top}</TopTitle>
                    <MidTitle>{mid}</MidTitle>
                    <DescServ>{desc}</DescServ>
                </TextBox>
            </QualitiesDivision>
            <QualitiesDivision data-aos="fade-up" data-aos-offset='250'>
                <QualitiesImg src={img} alt={alt}/>
            </QualitiesDivision>
        </QualitiesContainer>
    </QualitiesBox>
  )
}

export default Qualities