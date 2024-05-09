import {
  ListItem,
  ListItemIcon,
  ListItemText,
  // Typography,
} from "@mui/material";
import { ReactNode } from "react";

function Text({ des, children }: { des: string; children?: ReactNode }) {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: "32px" }}>{children}</ListItemIcon>
      <ListItemText primary={des} />
    </ListItem>
  );
}

export default Text;
