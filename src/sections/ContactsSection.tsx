import {
  Box,
  Card,
  CardContent,
  Typography,
  SvgIconProps,
  SvgIcon,
  Link,
  Container,
  Grid,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { HTMLAttributeAnchorTarget } from "react";
import SectionHeader from "../components/SectionHeader";

const ContactsSection = () => {
  return (
    <>
      <SectionHeader title="Contacts" navigationId="contacts" />
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid item md={4} xs={6}>
          <ContactsCard
            contactName="Phone"
            subtitle="call me"
            icon={PhoneIcon}
            href="tel:380979676649"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          {" "}
          <ContactsCard
            contactName="GitHub"
            subtitle="code examples"
            icon={GitHubIcon}
            href="https://github.com/OsypenkoViktor"
            target="_blank"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          {" "}
          <ContactsCard
            contactName="GitHub"
            subtitle="code examples"
            icon={GitHubIcon}
            href="https://github.com/OsypenkoViktor"
            target="_blank"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          {" "}
          <ContactsCard
            contactName="GitHub"
            subtitle="code examples"
            icon={GitHubIcon}
            href="https://github.com/OsypenkoViktor"
            target="_blank"
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <ContactsCard
            contactName="GitHub"
            subtitle="code examples"
            icon={GitHubIcon}
            href="https://github.com/OsypenkoViktor"
            target="_blank"
          />
        </Grid>
      </Grid>
    </>
  );
};

interface ContactsCardProps {
  contactName: string;
  subtitle: string;
  icon: React.ElementType<SvgIconProps>;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

const ContactsCard = ({
  contactName,
  icon,
  href,
  subtitle,
  target = "_parent",
}: ContactsCardProps) => {
  return (
    <Card
      sx={{
        m: 2,
        bgcolor: "ButtonHighlight",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
          borderRadius: "0",
        },
      }}
    >
      <Link href={href} target={target}>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              bgcolor: "lightblue",
              p: 2,
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              color:"black",
              "&:hover": {
                transform: "scale(1.1)",
                borderRadius: "100%",
                bgcolor: "darkblue",
                color: "whitesmoke",
              },
            }}
          >
            <Typography align="center" gutterBottom sx={{ fontSize: 14 }}>
              {contactName}
            </Typography>
            <SvgIcon sx={{}} component={icon} />
            <Typography sx={{ mb: 1.5 }}>{subtitle}</Typography>
          </Box>

          <Typography variant="body2"></Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ContactsSection;
