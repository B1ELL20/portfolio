import { 
    Client,
    ClientImg,
    KnowledgeBox, 
    KnowledgeContainer,
    SliderContainer
} from "./KnowledgeElements"
import TitleSection from '../../TitleSection'

import logo_luimit from '../../../images/logo_luimit.webp'
import logo_ctst from '../../../images/logo_ctst.webp'
import logo_sinergia from '../../../images/logo_sinergia.webp'
import logo_sapulha from '../../../images/logo_sapulha.webp'

const Knowledge = () => {

  return (
    
    <KnowledgeBox>
        <TitleSection color={0} text={'Clientes Satisfeitos'} />
        <SliderContainer>
          <KnowledgeContainer>
              <Client>
                <ClientImg src={logo_luimit} large='360px' alt="Logo da empresa Luimit Piscinas"/>
              </Client>
              <Client>
                <ClientImg src={logo_ctst} large='340px' alt="Logo da  empresa CTST Treinamentos"/>
              </Client>
              <Client>
                <ClientImg src={logo_sinergia} large='155px' alt="Logo da empresa Sinergia"/>
              </Client>
              <Client>
                <ClientImg src={logo_sapulha} large='214px' alt="Logo da empresa Sapulha News"/>
              </Client>
              <Client>
                <ClientImg src={logo_luimit} large='360px' alt="Logo da empresa Luimit Piscinas"/>
              </Client>
              <Client>
                <ClientImg src={logo_ctst} large='340px' alt="Logo da  empresa CTST Treinamentos"/>
              </Client>
              <Client>
                <ClientImg src={logo_sinergia} large='155px' alt="Logo da empresa Sinergia"/>
              </Client>
              <Client>
                <ClientImg src={logo_sapulha} large='214px' alt="Logo da empresa Sapulha News"/>
              </Client>
          </KnowledgeContainer>
        </SliderContainer>
    </KnowledgeBox>
  )
}

export default Knowledge