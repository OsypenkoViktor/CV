import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionHeader from "../components/SectionHeader";
import { ContactsCard } from "./data/contactSection";

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

export default ContactsSection;
