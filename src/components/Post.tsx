import {
  Box,
  Card,
  CardContent,
  // Container,
  Divider,
  // Grid,
  List,
  // Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostType } from "../types/type";
import Text from "./Text";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { trackPromise } from "react-promise-tracker";
import { date } from "../functions/function";
import { axiosInstance } from "../api";

function Post() {
  const { id } = useParams();
  const url = `/post/${id}`;
  const [post, setPost] = useState<PostType>();
  useEffect(function () {
    async function fetchData() {
      const res = await axiosInstance.get(url);
      const data = res.data;
      setPost(data);
    }
    trackPromise(fetchData());
  }, []);
  if (!post) {
    return;
  }
  return (
    // <Container maxWidth="md" sx={{ my: 12 }}>
    // <Card sx={{ my: 4, px: 10, pt: 8, pb: 20 }} elevation={4}>
    // <Grid container direction="column" spacing={2}>
    // <Grid item>
    //   <Card elevation={3} sx={{ borderRadius: 3 }}>
    //     <CardContent>
    //       <Typography sx={{ m: 2 }} variant="h5">
    //         {post.companyName}
    //       </Typography>

    //       <Divider sx={{ my: 2 }} />

    //       <img
    //         src={post.image_url}
    //         width="360px"
    //         height="270px"
    //         style={{ margin: "0 auto", display: "block" }}
    //       />
    //     </CardContent>
    //   </Card>
    // </Grid>
    // <Grid item>
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent sx={{ px: 5, py: 3 }}>
        <Box sx={{ my: 1 }}>
          <Typography variant="body1">{date(post.updatedAt)}</Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <img
            src={post.image_url}
            width="280px"
            height="210px"
            // style={{ margin: "0 auto", display: "block" }}
          />
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="h5">{post.title}</Typography>
          <Typography
            component={Link}
            to={`/company/${post.companyId}`}
            variant="h6"
          >
            {post.companyName}
          </Typography>
          <List>
            <Text des={post.email}>
              <EmailIcon fontSize="medium" />
            </Text>
            <Text des={post.tel}>
              <PhoneIphoneIcon fontSize="medium" />
            </Text>
          </List>
        </Box>
        <Divider />
        <Box sx={{ my: 1 }}>
          <Typography variant="h6">คุณสมบัติพื้นฐาน</Typography>
          <List>
            <Text des={post.address}>
              <LocationOnIcon fontSize="medium" />
            </Text>
            <Text des={post.category}>
              <CategoryIcon fontSize="medium" />
            </Text>
            <Text des={post.hiringType}>
              <PersonIcon fontSize="medium" />
            </Text>
            <Text des={post.exp}>
              <WorkHistoryIcon fontSize="medium" />
            </Text>
            <Text des={post.salary}>
              <PaidIcon fontSize="medium" />
            </Text>
          </List>
        </Box>

        {/* <Box sx={{ my: 1 }}>
              <Typography variant="body1">{post.salary}</Typography>
            </Box> */}
        <Divider />
        <Box sx={{ my: 1 }}>
          <Typography variant="h6">หน้าที่และความรับผิดชอบ</Typography>
          {/* <Box sx={{ mx: 1 }}> */}
          <List>
            {post.responsibility.map((res) => (
              <Text des={res.title} key={res.id}>
                <ArrowRightIcon fontSize="medium" />
              </Text>
            ))}
          </List>
          {/* </Box> */}
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
        <Divider />
        <Box sx={{ my: 1 }}>
          <Typography variant="h6">คุณสมบัติผู้สมัคร</Typography>
          {/* <Box sx={{ mx: 1 }}> */}
          <List>
            {post.qualification.map((qua) => (
              <Text des={qua.title} key={qua.id}>
                <ArrowRightIcon fontSize="medium" />
              </Text>
            ))}
          </List>
          {/* </Box> */}
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
        <Divider />
        <Box sx={{ my: 1 }}>
          <Typography variant="h6">สวัสดิการ</Typography>
          {/* <Box sx={{ mx: 1 }}> */}
          <List>
            {post.benefit.map((ben) => (
              <Text des={ben.title} key={ben.id}>
                <ArrowRightIcon fontSize="medium" />
              </Text>
            ))}
          </List>
          {/* </Box> */}
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
      </CardContent>
    </Card>
  );
  {
    /* </Grid> */
  }
  {
    /* </Grid> */
  }
  // </Card>
  // </Container>
}

export default Post;
