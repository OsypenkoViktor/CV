import {
  Box,
  Card,
  CardContent,
  Link,
  SvgIcon,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { HTMLAttributeAnchorTarget } from "react";

interface ContactsCardProps {
  contactName: string;
  subtitle: string;
  icon: React.ElementType<SvgIconProps>;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ContactsCard = ({
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
              color: "black",
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
