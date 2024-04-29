import { Box, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import PostCard from "../components/PostCard";
import Post from "../components/Post";

function AppLayout() {
  return (
    <Box>
      <NavBar />
      {/* <Stack
        sx={{ m: 1 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
      >
        <Filter />
        <Box>
          <SearchBar />
          <PostCard />
        </Box>
      </Stack> */}
      <Post />
    </Box>
  );
}

export default AppLayout;
