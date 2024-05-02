import { PostType } from "../types/type";
import PostCard from "./PostCard";
type PostListType = {
  post: PostType[];
};
function PostList({ post }: PostListType) {
  return (
    <>
      {post.map((value: PostType) => (
        <PostCard value={value} />
      ))}
    </>
  );
}

export default PostList;
