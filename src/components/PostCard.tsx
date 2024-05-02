import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { PostType } from "../types/type";
import JobDescription from "./JobDescription";

function PostCard({ value }: { value: PostType }) {
  const jobDescription = value.jobDescription.slice(0, 3);
  return (
    <Card elevation={2} sx={{ mb: 1 }}>
      <CardActionArea component={Link} to="/post/id" sx={{ px: 2, py: 1 }}>
        <CardContent>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random"
            sx={{ width: "120px", height: "90px" }}
            title="img"
          />
          <Typography gutterBottom variant="h6" component="div">
            {value.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value.address}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value.category}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value.salary}
          </Typography>
          {jobDescription.map((des) => (
            <JobDescription des={des.title} key={des.id} />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;
