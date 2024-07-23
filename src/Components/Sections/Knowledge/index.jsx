import { 
    Client,
    KnowledgeBox, 
    KnowledgeContainer
} from "./KnowledgeElements"
import TitleSection from '../../TitleSection'

import logo_luimit from '../../../images/logo_luimit.png'
import logo_ctst from '../../../images/logo_ctst.png'
import logo_sinergia from '../../../images/logo_sinergia.png'
import logo_sapulha from '../../../images/logo_sapulha.png'

const Knowledge = () => {

  return (
    <>
        <KnowledgeBox>
            <TitleSection color={0} text={'Clientes Satisfeitos'} />
            <KnowledgeContainer>
                <Client logo={logo_luimit}/>
                <Client logo={logo_ctst}/>
                <Client logo={logo_sinergia}/>
                <Client logo={logo_sapulha}/>
            </KnowledgeContainer>
        </KnowledgeBox>
    </>
  )
}

export default Knowledge