import { Container } from "@mui/material";
import CustomList from "../components/CustomList";
import SectionHeader from "../components/SectionHeader";
import { backendSkillsListData } from "./data/backendData";

const BackendSkillsSection = () => {
  return (
    <>
      <Container sx={{ alignItems: "center", p: 2 }}>
        <SectionHeader title="Backend" navigationId="backend" />
        <CustomList listData={backendSkillsListData} />
      </Container>
    </>
  );
};

export default BackendSkillsSection;
