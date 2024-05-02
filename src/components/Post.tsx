import { Box, Typography } from "@mui/material";

function Post() {
  return (
    <>
      <img
        src="https://source.unsplash.com/random"
        width="360px"
        height="270px"
      />
      <Typography gutterBottom variant="h5" component="div">
        Full Stack Developer
      </Typography>
      <Box sx={{ m: 1 }}>
        <Typography variant="body1">CompanyName</Typography>
        <Typography variant="body1">Address</Typography>
        <Typography variant="body1">category</Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="body1">salary</Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="body1">posted time</Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="h6">Responsibility</Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="h6">Qualification</Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="h6">Benefits</Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
      </Box>
    </>
  );
}

export default Post;
