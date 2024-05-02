import { Grid } from "@mui/material";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import { PostType } from "../types/type";

function HomePage() {
  const url = "http://localhost:8080/post";
  const [post, setPost] = useState<PostType[]>([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data);
        if (res.statusText !== "OK") {
          throw new Error("fetch error");
        }
        setPost(data);
      } catch (err) {
        if (err instanceof Error) {
          reportError({ message: err.message });
        }
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Grid container sx={{ my: 1, p: 0 }} spacing={1} justifyContent="center">
        <Grid item xs={12} sm={12} md={4}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <PostList post={post} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
