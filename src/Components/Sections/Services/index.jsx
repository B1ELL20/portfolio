import { TbWorldSearch } from "react-icons/tb"
import { FaComputer } from "react-icons/fa6"
import { IoMdTabletPortrait } from "react-icons/io"
import { 
    Destaque,
    Service,
    ServiceBox, 
    ServiceContainer, 
    ServiceDescription, 
    ServiceDetail, 
    ServiceHR, 
    ServiceIcon
} from "./ServicesElements"
import TitleSection from "../../TitleSection"

const Services = () => {
  return (
    <>
        <ServiceBox>
            <TitleSection text={'Serviços'}/>
            <ServiceContainer>
                <Service>
                    <ServiceIcon><TbWorldSearch /></ServiceIcon>
                    <ServiceDescription>Desenvolvimento <Destaque>Web</Destaque></ServiceDescription>
                    <ServiceHR/>
                    <ServiceDetail>Landing Pages, Sites, Lojas virtuais, etc</ServiceDetail>
                </Service>
                <Service>
                    <ServiceIcon><IoMdTabletPortrait /></ServiceIcon>
                    <ServiceDescription>Criação de <Destaque>App Mobile</Destaque></ServiceDescription>
                    <ServiceHR/>
                    <ServiceDetail>Apps feitos sob medida para Android/IOS</ServiceDetail>
                </Service>
                <Service>
                    <ServiceIcon><FaComputer /></ServiceIcon>
                    <ServiceDescription>Criação de  <Destaque>App Desktop</Destaque></ServiceDescription>
                    <ServiceHR/>
                    <ServiceDetail>Programas dedicados e exclusivos</ServiceDetail>
                </Service>
            </ServiceContainer>
        </ServiceBox>
    </>
  )
}

export default Services