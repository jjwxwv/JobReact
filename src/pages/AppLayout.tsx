import { Box, Container, Divider, Grid, Link, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import PostCard from "../components/PostCard";

function AppLayout() {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      <NavBar />
      {/* <Container sx={{ p: 0 }}>
        <Stack
          sx={{ my: 2 }}
          direction={{ sm: "column", md: "row" }}
          justifyContent="center"
          gap={2}
        >
          <Filter />

          <Box sx={{ width: { md: "75%" } }}>
            <SearchBar />
            <Link underline="none" sx={{ cursor: "pointer" }}>
              <PostCard />
            </Link>
          </Box>
        </Stack>
      </Container> */}
      <Container sx={{ p: 0 }}>
        <Grid
          container
          sx={{ my: 2 }}
          gap={1}
          justifyContent="center"
          columns={{ xs: 1, sm: 1, md: 12 }}
        >
          <Grid item xs={1} sm={1} md={4}>
            <Filter />
          </Grid>
          <Grid item xs={1} sm={1} md={7}>
            <SearchBar />
            <Link underline="none" sx={{ cursor: "pointer" }}>
              <PostCard />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default AppLayout;
