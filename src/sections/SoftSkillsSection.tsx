import { Container } from "@mui/material";
import CustomList from "../components/CustomList";
import SectionHeader from "../components/SectionHeader";
import { softSkillsListData } from "./data/softSkillData";

const SoftSkillsSection = () => {
  return (
    <>
      <Container sx={{ alignItems: "center", p: 2, w: "100%" }}>
        <SectionHeader title="Soft skills" navigationId="softSkills" />
        <CustomList listData={softSkillsListData} />
      </Container>
    </>
  );
};

export default SoftSkillsSection;
