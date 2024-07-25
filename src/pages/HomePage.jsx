import '../App.css'
import Qualities from '../Components/Sections/Qualities'
import Contacts from '../Components/Sections/Contacts'
import Footer from '../Components/Sections/Footer'
import Home from '../Components/Sections/Home'
import Knowledge from '../Components/Sections/Knowledge'
import Me from '../Components/Sections/Me'
import Projects from '../Components/Sections/Projects'
import Services from '../Components/Sections/Services'

import { TextQualities } from '../Contents/ContentQualities'
import { TextPLus } from '../Contents/ContentPlus'

function HomePage() {

  return (
    <>
      <Home />
      <Me />
      {
        TextPLus.map((obj, key) => {

          return (<Qualities key={key} 
                             reverse={obj.reverse}
                             img={obj.img} 
                             top={obj.toptitle}
                             mid={obj.midtitle}
                             desc={obj.description}
                             />)
        })
      } 
      <Services />
      <Knowledge />
      <Projects />
      {
        TextQualities.map((obj, key) => {

          return (<Qualities key={key} 
                             reverse={obj.reverse}
                             img={obj.img} 
                             top={obj.toptitle}
                             mid={obj.midtitle}
                             desc={obj.description}
                             />)
        })
      } 
      <hr/> 
      <Contacts />
      <Footer />
    </>
  )
}

export default HomePage
