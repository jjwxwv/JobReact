import { Box, Divider, Link, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import PostCard from "../components/PostCard";

function AppLayout() {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      <NavBar />
      <Stack
        sx={{ m: 2 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
      >
        <Filter />
        <Box>
          <SearchBar />
          <Link underline="none" sx={{ cursor: "pointer" }}>
            <PostCard />
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
}

export default AppLayout;
