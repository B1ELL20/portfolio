import React, { useEffect } from 'react'
import { 
    ThanksBox, 
    ThanksButton, 
    ThanksContainer,  
    ThanksImage,  
    ThanksTitle
} from '../Components/Thanks/ThanksElements'
import logo from '../images/Logog3code.webp'

function Thanks() {

    useEffect(() => {

        setTimeout(function() {

            window.open('https://wa.me/5575991086600', '_blank');
            
        }, 2000);

    }, []);

    const goHome = () => {

        window.open('/', '_self');
    }
     
  return (
    <ThanksBox>
        <ThanksContainer>
            <ThanksImage src={logo} alt='Logo da G3 Codee'/>
            <ThanksTitle>A G3 agradece seu interesse!</ThanksTitle>
            <ThanksButton onClick={goHome}>Voltar ao site</ThanksButton>
        </ThanksContainer>
    </ThanksBox>
  )
}

export default Thanks