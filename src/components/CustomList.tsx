import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";

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
    subheader={<li />}
  >

    {Object.entries(listData).map(([subheader,LIdata])=>(
      <li>
        <GraySubheader text={subheader}/>
        {LIdata.map((LI)=>(
           <ListItem>
           <ListItemText primary={LI.primaryText}  secondary={LI.secondaryText}/>
         </ListItem>
        ))}
      </li>
    ))}
{/*       <li>
          <GraySubheader text="Kryvyj Rih National University"/>
            <ListItem>
              <ListItemText primary={"Geography teacher"}  secondary={"Masters degree"}/>
            </ListItem>
      </li>
      <li>
          <GraySubheader text="QATestLab courses"/>
            <ListItem>
              <ListItemText primary={"Manual QA"}  secondary={`Introduction to testing. 
                Web projects testing. 
                Functional testing approaches.
                Software testing life cycle.
                Test design.
                Mobile application testing.
                Game testing `}/>
            </ListItem>
      </li>
      <li>
            <GraySubheader text="ITVDN"/>
            <ListItem>
              <ListItemText primary={"Basic HTML and CSS"}  secondary={"certificate"}/>
            </ListItem>
            <ListItem>
              <ListItemText primary={"Basic HTML and CSS"}  secondary={"certificate"}/>
            </ListItem>
      </li> */}
  </List>
  );
};

export default CustomList;

const GraySubheader:React.FC<{text:string}> = ({text}) =>{
  return(
    <ListSubheader  sx={{backgroundColor:"lightblue"}}>{text}</ListSubheader>
  )
}