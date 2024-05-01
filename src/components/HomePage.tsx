import { Container, Grid } from "@mui/material";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";

function HomePage() {
  return (
    <Container sx={{ p: 0 }}>
      <Grid
        container
        sx={{ my: 1, p: 0 }}
        columnSpacing={1}
        rowSpacing={1}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={4}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <PostCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
