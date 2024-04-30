import { Divider, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import Post from "../components/Post";

function PostPage() {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      <NavBar />
      <Post />
    </Stack>
  );
}

export default PostPage;
