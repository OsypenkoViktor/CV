import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, Grid } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';

import mainPhoto from "../assets/GeneralInfoPhoto.jpg";

export default function MediaCard() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Card sx={{ height: "100%" }}>
        <CardHeader
        title="Osypenko Viktor"
        subheader="Fullstack web-developer (Node.js)"
      />
        <AspectRatio minHeight="200px" maxHeight="400px" objectFit="contain">
        <img
          src={mainPhoto}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
             Welcome.
            </Typography>
            <Typography variant="body2" color="text.secondary">
            👋 Hi there! I'm Viktor, a passionate full-stack web developer. 
            My journey in web development is driven by a love for crafting modern, 
            functional, and creative web applications that make life easier and businesses 
            more efficient. I work on both frontend and backend, leveraging cutting-edge 
            technologies and embracing complex challenges. Welcome to my resume page — here, 
            you'll find the projects I'm proud of and the skills that can help your business thrive.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
