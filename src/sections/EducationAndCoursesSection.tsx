import { Container, Typography } from "@mui/material"
import CustomList, { IListData } from "../components/CustomList"

const EducationAndCourcesSection = () =>{
    const educationListData:IListData = {
        "Kryvyj Rih National University":[{
          primaryText:"Geography teacher",
          secondaryText:"Masters degree"
        }],
        "QATestLab courses":[{
          primaryText:"Manual QA",
          secondaryText:`Introduction to testing. 
          Web projects testing. 
          Functional testing approaches.
          Software testing life cycle.
          Test design.
          Mobile application testing.
          Game testing `
        },
      ],
      "ITVDN":[{
        primaryText:"Basic HTML and CSS",
        secondaryText:"certificate"
      },{
        primaryText:"Basic HTML and CSS",
        secondaryText:"certificate"
      }]
      }
    return(
        <>
         <Container 
         sx={{alignItems:"center",p:2}}
         >
        <Typography variant="h4" component={"h2"} textAlign={"center"}>
            Education and courses
        </Typography>
        <CustomList listData={educationListData}/>
        </Container>
        </>
    )

}

export default EducationAndCourcesSection