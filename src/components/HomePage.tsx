import { Box, Grid, Pagination, Typography } from "@mui/material";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import { DataType, commonType } from "../types/type";
import { useSearchParams } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { axiosInstance } from "../api";

function HomePage() {
  const categoryUrl = "/category";
  const [searchParams, setSearchParams] = useSearchParams();
  const getHiring = searchParams.get("hiringTypeId");
  const getSalary = searchParams.get("salaryId");
  const getExp = searchParams.get("expId");
  const title = searchParams.get("title");
  const categoryId = searchParams.get("categoryId");
  const getPage = searchParams.get("page");
  const [category, setCategory] = useState<commonType[]>([]);
  const [getCategory] = category.filter((cur) => cur.id === Number(categoryId));
  const [data, setData] = useState<DataType>({
    page: 0,
    perPage: 0,
    totalPages: 0,
    totalPost: 0,
    post: [],
  });
  const [keyword, setKeyword] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<commonType | null>(
    getCategory || null
  );
  const [selectedHiring, setSelectedHiring] = useState<number>(0);
  const [selectedSalary, setSelectedSalary] = useState<number>(0);
  const [selectedExp, setSelectedExp] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(
    function () {
      async function fetchData() {
        if (title) setKeyword(title);
        if (getHiring) setSelectedHiring(Number(getHiring));
        if (getSalary) setSelectedSalary(Number(getSalary));
        if (categoryId) setSelectedCategory(getCategory);
        if (getExp) setSelectedExp(Number(getExp));
        // if (getPage) setPage(Number(getPage));
        console.log(getPage, page);
        const params = {
          title: title !== "" ? title : undefined,
          hiringTypeId: getHiring !== "0" ? getHiring : undefined,
          salaryId: getSalary !== "0" ? getSalary : undefined,
          categoryId: categoryId !== "0" ? categoryId : undefined,
          expId: getExp !== "0" ? getExp : undefined,
          page: getPage ? getPage : 1,
        };
        const res = await axiosInstance.get("/post", {
          params,
        });

        const newData = res.data;

        setData({ ...data, ...newData });
        setPage(Number(newData.page));
      }

      trackPromise(fetchData());
    },
    [title, getHiring, getSalary, categoryId, getPage, getExp]
  );
  useEffect(function () {
    async function fetchData1() {
      const categoryRes = await axiosInstance.get(categoryUrl);
      const categoryData = categoryRes.data;

      setCategory(categoryData);
    }
    trackPromise(fetchData1());
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
    searchParams.delete("page");
    selectedExp
      ? searchParams.set("expId", selectedExp.toString())
      : searchParams.delete("expId");
    setSearchParams(searchParams);
    setPage(1);
  }
  function handleChange(value: number) {
    setPage(value);
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
    console.log(page);
    console.log(getPage);
  }

  return (
    <>
      <Grid container sx={{ p: 0 }} spacing={1} justifyContent="center">
        <Grid item xs={12} sm={12} md={4}>
          <Filter
            selectedHiring={selectedHiring}
            selectedSalary={selectedSalary}
            selectedExp={selectedExp}
            setSelectedHiring={setSelectedHiring}
            setSelectedSalary={setSelectedSalary}
            setSelectedExp={setSelectedExp}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box>
            <SearchBar
              category={category}
              keyword={keyword}
              setKeyword={setKeyword}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              handleSubmit={handleSubmit}
            />
            <Typography gutterBottom>
              {data.totalPost > 0
                ? `พบทั้งหมด ${data.totalPost} รายการ`
                : `ไม่พบข้อมูล`}
            </Typography>
            <PostList post={data.post} />
          </Box>
        </Grid>
        <Grid item>
          <Pagination
            count={data.totalPages}
            page={page}
            onChange={(_, value) => {
              handleChange(value);
            }}
            color="secondary"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
