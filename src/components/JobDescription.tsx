import { Typography } from "@mui/material";

function JobDescription({ des }: { des: string }) {
  return (
    <Typography variant="subtitle2" color="text.secondary" component="li">
      {des}
    </Typography>
  );
}

export default JobDescription;
