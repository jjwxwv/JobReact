import { Typography } from "@mui/material";

function Text({ des, color }: { des: string; color: string }) {
  return (
    <Typography variant="subtitle2" color={color} component="li">
      {des}
    </Typography>
  );
}

export default Text;
