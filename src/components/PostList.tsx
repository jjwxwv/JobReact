import { Typography } from "@mui/material";
import PostCard from "./PostCard";
import { PostCardType } from "../types/type";
type PostListType = {
  post: PostCardType[];
};
function PostList({ post }: PostListType) {
  return (
    <>
      {post.map((value) => (
        <PostCard value={value} key={value.id} />
      ))}
    </>
  );
}

export default PostList;
