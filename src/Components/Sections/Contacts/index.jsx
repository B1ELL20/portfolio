import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail, AiFillBehanceCircle, AiFillInstagram } from 'react-icons/ai'
import { 
    BoxList,
    BoxMedia,
    ContactDescription,
    ContactsBox, 
    ContactsContainer, 
    ContactsList, 
    IconContact, 
    ItemContact, 
    ListContact,
    Media,
    MediaContent,
    MediaIcon
} from "./ContactsElements"

import TitleSection from '../../TitleSection'
import media from '../../../images/contact.svg'

const Contacts = () => {

    const goWhatsapp = () => {

        window.location.href = '#/thanks'
    }

  return (
    <>
        <ContactsBox id='contacts'>
            <TitleSection color={0} text={'Contatos'} />
            <ContactsContainer>
                <ContactsList>
                    <BoxList>
                        <ListContact>
                            <ItemContact>
                                <IconContact><FaWhatsapp /></IconContact>
                                <ContactDescription>(75)99108-6600</ContactDescription>
                            </ItemContact>
                            <ItemContact>
                                <IconContact><AiFillInstagram /></IconContact>
                                <ContactDescription>_g3codee</ContactDescription>
                            </ItemContact>
                            <ItemContact>
                                <IconContact><AiOutlineMail /></IconContact>
                                <ContactDescription>g3codee@gmail.com</ContactDescription>
                            </ItemContact>
                        </ListContact>
                    </BoxList>
                    <BoxMedia>
                        <MediaIcon onClick={goWhatsapp}><FaWhatsapp /></MediaIcon>
                        <MediaIcon onClick={() => {window.open('https://www.instagram.com/_g3codee/', '_blank')}}><AiFillInstagram /></MediaIcon>
                    </BoxMedia>
                </ContactsList>
                <Media>
                    <MediaContent src={media}/>
                </Media>
            </ContactsContainer>
        </ContactsBox>
    </>
  )
}

export default Contacts