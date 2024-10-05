import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

export interface IListData {
  [key:string]:{
    primaryText:string;
    secondaryText:string;
  }[]
}

const CustomList = ({listData}:{listData:IListData}) => {
  return (
    <List
    sx={{
      minWidth: {
        xs:260,
        lg:700,
      },
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
      '& ul': { padding: 0 },
    }}
    subheader={<ListSubheader />}
  >

    {Object.entries(listData).map(([subheader,LIdata],i)=>(
      <React.Fragment key={i}>
        <GraySubheader text={subheader}/>
        {LIdata.map((LI,i)=>(
           <ListItem key={i}>
           <ListItemText primary={LI.primaryText}  secondary={LI.secondaryText}/>
         </ListItem>
        ))}
      </React.Fragment>
    ))}

  </List>
  );
};

export default CustomList;

const GraySubheader:React.FC<{text:string}> = ({text}) =>{
  return(
    <ListSubheader  sx={{backgroundColor:"lightblue"}}>{text}</ListSubheader>
  )
}