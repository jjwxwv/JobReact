import { Grid } from "@mui/material";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import { PostType, commonType } from "../types/type";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getHiring = Number(searchParams.get("hiringTypeId"));
  // if (getHiring === 0) {
  //   searchParams.delete("hiringTypeId");
  //   setSearchParams(searchParams);
  // }
  const getSalary = Number(searchParams.get("salaryId"));
  // if (getSalary === 0) {
  //   searchParams.delete("salaryId");
  //   setSearchParams(searchParams);
  // }
  const title = searchParams.get("title");
  // if (title === "") {
  //   searchParams.delete("title");
  //   setSearchParams(searchParams);
  // }
  const [category, setCategory] = useState<commonType[]>([]);
  const categoryId = searchParams.get("categoryId");
  const [getCategory] = category.filter((cur) => cur.id === Number(categoryId));
  const [url, setUrl] = useState<string>(
    `${
      window.location.search
        ? `http://localhost:8080/post${window.location.search}`
        : `http://localhost:8080/post`
    }`
  );
  const categoryUrl = "http://localhost:8080/category";
  const [post, setPost] = useState<PostType[]>([]);
  const [keyword, setKeyword] = useState<string>(title || "");
  const [selectedCategory, setSelectedCategory] = useState<commonType | null>(
    getCategory || null
  );
  const [selectedHiring, setSelectedHiring] = useState<number>(getHiring || 0);
  const [selectedSalary, setSelectedSalary] = useState<number>(getSalary || 0);

  useEffect(
    function () {
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
    },
    [url]
  );
  useEffect(function () {
    async function fetchData1() {
      try {
        const categoryRes = await axios.get(categoryUrl);
        const categoryData = categoryRes.data;
        if (categoryRes.statusText !== "OK") {
          throw new Error("fetch error");
        }
        setCategory(categoryData);
      } catch (err) {
        if (err instanceof Error) {
          reportError({ message: err.message });
        }
      }
    }
    fetchData1();
  }, []);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
    keyword ? searchParams.set("title", keyword) : searchParams.delete("title");
    selectedCategory
      ? searchParams.set("categoryId", selectedCategory.id.toString())
      : searchParams.delete("categoryId");
    selectedHiring
      ? searchParams.set("hiringTypeId", selectedHiring.toString())
      : searchParams.delete("hiringTypeId");
    selectedSalary
      ? searchParams.set("salaryId", selectedSalary.toString())
      : searchParams.delete("salaryId");
    setSearchParams(searchParams);
    console.log(window.location);
    setUrl(`http://localhost:8080/post${window.location.search}`);
  }

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
                handleSubmit={handleSubmit}
                category={category}
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
