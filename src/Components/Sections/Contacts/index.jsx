import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlinePhone, AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillBehanceCircle,AiFillInstagram } from 'react-icons/ai'
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
        <ContactsBox>
            <TitleSection color={0} text={'Contatos'} />
            <ContactsContainer>
                <ContactsList>
                    <BoxList>
                        <ListContact>
                            <ItemContact>
                                <IconContact><FaWhatsapp /></IconContact>
                                <ContactDescription>(75)98888-7777</ContactDescription>
                            </ItemContact>
                            <ItemContact>
                                <IconContact><AiOutlinePhone /></IconContact>
                                <ContactDescription>(75)98888-7777</ContactDescription>
                            </ItemContact>
                            <ItemContact>
                                <IconContact><AiOutlineMail /></IconContact>
                                <ContactDescription>Dantasbiell20@gmail.com</ContactDescription>
                            </ItemContact>
                        </ListContact>
                    </BoxList>
                    <BoxMedia>
                        <MediaIcon onClick={() => {window.open('https://github.com/B1ELL20', '_blank')}}><AiFillGithub /></MediaIcon>
                        <MediaIcon onClick={() => {window.open('https://www.linkedin.com/in/gabriel-dantas-costa-carneiro-056451230/', '_blank')}}><AiFillLinkedin /></MediaIcon>
                        <MediaIcon onClick={() => {window.open('https://www.behance.net/bielldantas20', '_blank')}}><AiFillBehanceCircle /></MediaIcon>
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