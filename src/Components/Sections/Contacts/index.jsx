import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail, AiFillBehanceCircle,AiFillInstagram } from 'react-icons/ai'
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
                                <ContactDescription>(75)99135-9299</ContactDescription>
                            </ItemContact>
                            <ItemContact>
                                <IconContact><AiFillInstagram /></IconContact>
                                <ContactDescription>_g3code</ContactDescription>
                            </ItemContact>
                            <ItemContact>
                                <IconContact><AiOutlineMail /></IconContact>
                                <ContactDescription>g3codee@gmail.com</ContactDescription>
                            </ItemContact>
                        </ListContact>
                    </BoxList>
                    <BoxMedia>
                        <MediaIcon onClick={() => {window.open('https://wa.me/5575991359299', '_blank')}}><FaWhatsapp /></MediaIcon>
                        <MediaIcon onClick={() => {window.open('https://www.instagram.com/_littlecodegd/', '_blank')}}><AiFillInstagram /></MediaIcon>
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