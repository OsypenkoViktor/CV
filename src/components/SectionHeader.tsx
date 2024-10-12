import { Typography } from "@mui/material";

interface SectionHeaderProps {
  navigationId: NavigationId;
  title: string;
}

export const navigationIds = {
  generalInfo: "generalInfo",
  backendSection: "backend",
  frontendSection: "frontend",
  softSkillsSection: "softSkills",
  contacts: "contacts",
  educationAndCources: "education",
  whyMe: "whyMe",
} as const;

export type NavigationId = (typeof navigationIds)[keyof typeof navigationIds];

const SectionHeader = ({ navigationId, title }: SectionHeaderProps) => {
  return (
    <Typography
      variant="h4"
      align="center"
      id={navigationId}
      sx={{
        bgcolor: "gray",
        my: 4,
        py: 4,
        color: "wheat",
        borderBottomLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
