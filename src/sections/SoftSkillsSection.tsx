import { Container, Typography } from "@mui/material"
import CustomList, { IListData } from "../components/CustomList"

const SoftSkillsSection = () =>{
    const softSkillsListData:IListData = {
        "Motivation":[{
            primaryText:"It`s not all about money",
            secondaryText:"Programming for me - it`s main hobby"
        }]
    }
    return(
        <>
         <Container 
         sx={{alignItems:"center",p:2}}
         >
        <Typography variant="h4" component={"h2"} textAlign={"center"}>
            Soft skills
        </Typography>
        <CustomList listData={softSkillsListData}/>
        </Container>
        </>
    )

}

export default SoftSkillsSection