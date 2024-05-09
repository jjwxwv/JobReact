import { CardActionArea, List } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Text from "./Text";
import { PostCardType } from "../types/type";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { date } from "../functions/function";
type CardType = {
  value: PostCardType;
};
function PostCard({ value }: CardType) {
  const responsibility = value.responsibility.slice(0, 3);
  return (
    <Card elevation={2} sx={{ mb: 1, borderRadius: 2 }}>
      <CardActionArea
        component={Link}
        to={`/post/${value.id}`}
        sx={{ px: 2, py: 1 }}
      >
        <CardContent>
          <CardMedia
            component="img"
            image={value.image_url}
            sx={{ width: "120px", height: "90px" }}
            title="img"
          />
          <Typography gutterBottom variant="h6">
            {value.title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {value.companyName}
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
          <List>
            {responsibility.map((des) => (
              <Text des={des.title} key={des.id}>
                <ArrowRightIcon fontSize="medium" />
              </Text>
            ))}
          </List>
          <Typography variant="body1" color="text.secondary">
            {date(value.updatedAt)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;
