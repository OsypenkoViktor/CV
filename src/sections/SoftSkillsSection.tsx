import { Container, Typography } from "@mui/material"
import CustomList, { IListData } from "../components/CustomList"
import SectionHeader from "../components/SectionHeader"

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
        <SectionHeader title="Soft skills" navigationId="softSkills"/>
        <CustomList listData={softSkillsListData}/>
        </Container>
        </>
    )

}

export default SoftSkillsSection