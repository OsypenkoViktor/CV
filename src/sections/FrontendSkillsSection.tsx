import { Card, CardHeader, Container, Typography } from "@mui/material"
import TagCloud from 'react3dtagcloud'
import { useTheme, useMediaQuery } from '@mui/material';



const FrontendSkillsSection = () =>{

    const theme = useTheme(); // Получаем текущую тему
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const currentRadius = matches ? 200 : 100;
    const currentWidth = matches ? 600 : 300

    const tagName = ['JavaScript',"HTML",'Next.js',
                    'template engines', 'CSS', 'SCSS','React', 
                    'Redux', 'API','Node','npm','Webpack',
                    'Vite','Bootstrap','MUI'
                ]
    return(
        <>
         <Container 
         sx={{alignItems:"center",width:"100%",height:600,overflow:"hidden"}}
         >
            <Card variant="outlined" sx={{height:"100%"}}>

        <CardHeader title={"Frontend skills"} subheader={"Some small explanation about skills"}/>
            
        <Container sx={{marginTop:20,maxHeight:{
            lg:100,
            xs:100
        },maxWidth:100}}>
       <TagCloud speed={0.1} radius={currentRadius} tagName={tagName}></TagCloud>
        </Container>
        </Card>
        </Container>
        </>
    )

}

export default FrontendSkillsSection