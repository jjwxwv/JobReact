import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "../types/type";
import Text from "./Text";

function Post() {
  const { id } = useParams();
  const url = `http://localhost:8080/post/${id}`;
  const [post, setPost] = useState<PostType>();
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
  if (!post) {
    return;
  }
  return (
    <>
      <img
        src="https://source.unsplash.com/random"
        width="360px"
        height="270px"
      />
      <Typography gutterBottom variant="h5" component="div">
        {post.title}
      </Typography>
      <Box sx={{ m: 1 }}>
        <Typography variant="body1">{post.companyName}</Typography>
        <Typography variant="body1">{post.address}</Typography>
        <Typography variant="body1">{post.category}</Typography>
        <Typography variant="body1">{post.hiringType}</Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="body1">{post.salary}</Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="body1">{post.updatedAt}</Typography>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="h6">Responsibility</Typography>
        {post.responsibility.map((res) => (
          <Text des={res.title} color={""} key={res.id} />
        ))}
        {/* <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography> */}
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="h6">Qualification</Typography>
        {post.qualification.map((qua) => (
          <Text des={qua.title} color={""} key={qua.id} />
        ))}
        {/* <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography> */}
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography variant="h6">Benefits</Typography>
        {post.benefit.map((ben) => (
          <Text des={ben.title} color={""} key={ben.id} />
        ))}
        {/* <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography>
        <Typography variant="subtitle2" component="li">
          Free text
        </Typography> */}
      </Box>
    </>
  );
}

export default Post;
