import { Container } from "@mui/material";
import CustomList from "../components/CustomList";
import SectionHeader from "../components/SectionHeader";
import { frontendSkillsListData } from "./data/frontentData";

const FrontendSkillsSection = () => {
  return (
    <>
      <Container sx={{ alignItems: "center", p: 2, w: "100%" }}>
        <SectionHeader
          title="Frontend scills and expirience"
          navigationId="frontend"
        />
        <CustomList listData={frontendSkillsListData} />
      </Container>
    </>
  );
};

export default FrontendSkillsSection;
