import { Container, Typography } from "@mui/material"
import CustomList, { IListData } from "../components/CustomList"
import CustomTable from "../components/CustomTable"

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
        <Typography variant="h4" component={"h2"} textAlign={"center"} sx={{p:4}}>
            Expirience
        </Typography>
        <CustomTable/>
        </Container>
        </>
    )

}

export default EducationAndCourcesSection