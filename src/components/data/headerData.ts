import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import SkillsIcon from "@mui/icons-material/AddTask";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { SvgIconProps } from "@mui/material";
import { NavigationId } from "../SectionHeader";

export const topPartOfList: ICustomListItem[] = [
  { text: "General info", icon: InfoIcon, navigationId: "generalInfo" },
  {
    text: "Education and expirience",
    icon: SchoolIcon,
    navigationId: "education",
  },
  { text: "Soft skills", icon: SkillsIcon, navigationId: "softSkills" },
  { text: "Frontend skills", icon: WebIcon, navigationId: "frontend" },
  { text: "Backend skills", icon: TerminalIcon, navigationId: "backend" },
];

export const bottomPartOfList: ICustomListItem[] = [
  { text: "Contacts", icon: MailIcon, navigationId: "contacts" },
  {
    text: "Why me",
    icon: KeyboardDoubleArrowRightIcon,
    navigationId: "whyMe",
  },
];

export interface ICustomListItem {
  icon: React.ElementType<SvgIconProps>;
  text: string;
  navigationId: NavigationId;
}
