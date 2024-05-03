import { Grid } from "@mui/material";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import { PostType, commonType } from "../types/type";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const url = "http://localhost:8080/post";
  const [post, setPost] = useState<PostType[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<commonType | null>(
    null
  );
  const [selectedHiring, setSelectedHiring] = useState<number | null>(null);
  const [selectedSalary, setSelectedSalary] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

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
  function handleSubmit() {
    setSearchParams({
      title: keyword || "",
      // salaryId: selectedSalary?.toString() || "",
      // categoryId: selectedCategory?.id?.toString() || "",
      // hiringTypeId: selectedHiring?.toString() || "",
    });
  }
  // function handleChange(
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   console.log(e.target.value);
  //   setKeyword(e.target.value);
  // }
  // function handleSelectedCategory(value: commonType | null) {
  //   console.log(value);
  //   setSelectedCategory(value);
  // }

  return (
    <>
      <Grid container sx={{ my: 1, p: 0 }} spacing={1} justifyContent="center">
        <Grid item xs={12} sm={12} md={4}>
          <Filter
            selectedHiring={selectedHiring}
            selectedSalary={selectedSalary}
            setSelectedHiring={setSelectedHiring}
            setSelectedSalary={setSelectedSalary}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <SearchBar
                keyword={keyword}
                setKeyword={setKeyword}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
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
