import PostCard from "./PostCard";

function PostList() {
  return (
    <>
      {postList.map((post) => (
        <PostCard />
      ))}
    </>
  );
}

export default PostList;
