import { Box, Button, Card, CardActions, CardContent, Typography, SvgIconProps, SvgIcon } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import React from "react";

const ContactsSection = () =>{
    return(
        <>
        <Typography variant="h4" align="center">Contacts</Typography>
        <Box sx={{ display:"flex",flexWrap:"wrap",width:"100%", justifyContent:"space-around", gap:"30px"}}>
        <ContactsCard contactName="Phone" icon={PhoneIcon}/>

        </Box>
        </>
    )
}

interface ContactsCardProps {
    contactName:string,
    icon:React.ElementType<SvgIconProps>
}

const ContactsCard = ({contactName,icon}:ContactsCardProps) =>{
return (
    <Card sx={{ width: {
        lg:"300px"
    }}}>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {contactName}
      </Typography>
      <SvgIcon component={icon}/>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
)
}

export default ContactsSection;