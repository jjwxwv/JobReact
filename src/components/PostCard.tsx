import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PostCard() {
  return (
    <Card elevation={2} sx={{ m: 1 }}>
      <CardContent>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          sx={{ width: "120px", height: "90px" }}
          title="img"
        />
        <Typography gutterBottom variant="h6" component="div">
          Full Stack Developer
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Address
        </Typography>
        <Typography variant="body1" color="text.secondary">
          category
        </Typography>
        <Typography variant="body1" color="text.secondary">
          salary
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="li">
          Free text
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
