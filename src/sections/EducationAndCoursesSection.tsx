import { Container, Typography } from "@mui/material";
import CustomList from "../components/CustomList";
import CustomTable from "../components/CustomTable";
import SectionHeader from "../components/SectionHeader";
import { educationListData, rows } from "./data/educationData";

const EducationAndCourcesSection = () => {
  return (
    <>
      <Container sx={{ alignItems: "center", p: 2, w: "100%" }}>
        <SectionHeader title="Education and cources" navigationId="education" />
        <CustomList listData={educationListData} />
        <Typography
          variant="h4"
          component={"h2"}
          textAlign={"center"}
          sx={{ p: 4 }}
        >
          Expirience
        </Typography>
        <CustomTable rows={rows} />
      </Container>
    </>
  );
};

export default EducationAndCourcesSection;
