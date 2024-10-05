import { Container } from "@mui/material";
import CustomList, { IListData } from "../components/CustomList";
import SectionHeader from "../components/SectionHeader";

const BackendSkillsSection = () => {
    const frontendSkillsListData: IListData = {
      "Basics": [
        {
          primaryText: "Backbone of frontent development - HTML",
          secondaryText: "Good knowlerge of the HTML. Semantic and logic, metas etc.",
        },{
          primaryText:"CSS",
          secondaryText:"Pure CSS, how it works. Cascades, priority, modern approaches. BEM, preprocessors." +
                          "Frameworks and libraries for styling - Tailwind, Material UI, Bootstrap." +
                          "CSS-IN-JS, styled components in React, modules."
        },
      ],
      "QATestLab courses": [
        {
          primaryText: "Manual QA",
          secondaryText: `Introduction to testing. 
            Web projects testing. 
            Functional testing approaches.
            Software testing life cycle.
            Test design.
            Mobile application testing.
            Game testing `,
        },
      ],
      ITVDN: [
        {
          primaryText: "Basic HTML and CSS",
          secondaryText: "certificate",
        },
        {
          primaryText: "Basic HTML and CSS",
          secondaryText: "certificate",
        },
      ],
    };
  
    return (
      <>
        <Container sx={{ alignItems: "center", p: 2 }}>
          <SectionHeader title="Backend" navigationId="backend"/>
          <CustomList listData={frontendSkillsListData} />
        </Container>
      </>
    );
  };

export default BackendSkillsSection;