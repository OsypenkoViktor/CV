import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import GeneralInfo from "./sections/GeneralInfo";
import EducationAndCourcesSection from "./sections/EducationAndCoursesSection";
import SoftSkillsSection from "./sections/SoftSkillsSection";
import FrontendSkillsSection from "./sections/FrontendSkillsSection";
import BackendSkillsSection from "./sections/BackendSkillsSection";
import ContactsSection from "./sections/ContactsSection";
import { Box } from "@mui/material";
import WhyMeSection from "./sections/WhyMeSection";
import "./index.css";

function App() {
  return (
    <Header>
      <Box
        sx={{
          "& > *:nth-of-type(even)": {
            border: "1px gray solid",
          },
        }}
      >
        <GeneralInfo />
        <EducationAndCourcesSection />
        <SoftSkillsSection />
        <FrontendSkillsSection />
        <BackendSkillsSection />
        <ContactsSection />
        <WhyMeSection />
      </Box>
    </Header>
  );
}

export default App;
