import { CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { trackPromise } from "react-promise-tracker";
import { useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../api";
import { CompanyType, PostCardType, PostPageType } from "../types/type";
import Company from "./Company";
import PostList from "./PostList";

function CompanyInfo() {
  const { id } = useParams();
  const companyUrl = `/company/${id}`;
  const postUrl = `/post`;
  const [post, setPost] = useState<PostCardType[]>([]);
  const [company, setCompany] = useState<CompanyType>({
    id: 0,
    companyName: "",
    address: "",
    tel: "",
    email: "",
    image_url: "",
    companyDescription: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(1);
  // const [totalPost,setTotalPost] = useState<number>(0)
  const [pagination, setPagination] = useState<PostPageType>({
    page: 0,
    perPage: 0,
    totalPages: 0,
    totalPost: 0,
  });
  const getPage = searchParams.get("page");

  useEffect(function () {
    async function fetchData() {
      const companyRes = await axiosInstance.get(companyUrl);
      const companyData = companyRes.data;
      console.log(companyData);

      setCompany(companyData);
    }

    trackPromise(fetchData());
  }, []);
  useEffect(
    function () {
      async function fetchData() {
        // if (getPage) setPage(Number(getPage));
        const params = {
          page: index,
          companyId: id,
        };
        const postRes = await axiosInstance.get(postUrl, { params });
        const postData = postRes.data;
        const { page, perPage, totalPages, totalPost } = postData;

        setPost((prev) => [...prev, ...postData.post]);
        setPagination({ page, perPage, totalPages, totalPost });
        setHasMore(postData.post.length > 0);
      }
      fetchData();
    },
    [index]
  );

  function next() {
    setIndex((prev) => prev + 1);
    // searchParams.set("page", (page + 1).toString());
    // setSearchParams(searchParams);
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={7} marginTop={4}>
        <Company company={company} />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <Typography gutterBottom>
          {pagination.totalPost > 0
            ? `พบทั้งหมด ${pagination.totalPost} รายการ`
            : `ไม่พบข้อมูล`}
        </Typography>
        <InfiniteScroll
          dataLength={post.length}
          next={next}
          hasMore={hasMore}
          height={800}
          loader={<CircularProgress color="inherit" />}
        >
          <PostList post={post} />
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
}

export default CompanyInfo;
