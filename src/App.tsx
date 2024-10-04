import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import GeneralInfo from './sections/GeneralInfo';
import EducationAndCourcesSection from './sections/EducationAndCoursesSection';
import SoftSkillsSection from './sections/SoftSkillsSection';
import FrontendSkillsSection from './sections/FrontendSkillsSection';
import BackendSkillsSection from './sections/BackendSkillsSection';
import ContactsSection from './sections/ContactsSection';



function App() {


  return (
    <>
    <Header>
    <GeneralInfo/>
    <EducationAndCourcesSection/>
    <SoftSkillsSection/>
    <FrontendSkillsSection/>
    <BackendSkillsSection/>
    <ContactsSection/>
    </Header>
    </>
  )
}

export default App
