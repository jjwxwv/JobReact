import { Box, Divider, List, Paper, Typography } from "@mui/material";
import { CompanyType } from "../types/type";
import Text from "./Text";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfiniteScroll from "react-infinite-scroll-component";

function Company({ company }: { company: CompanyType }) {
  return (
    <Paper elevation={1} sx={{ px: 5, py: 3, pb: 5, borderRadius: 2 }}>
      <Box marginBottom={10}>
        <Box marginBottom={1}>
          <img
            src={company.image_url}
            width="120px"
            height="90px"
            // style={{ margin: "0 auto", display: "block" }}
          />
        </Box>
        <Typography
          variant="h5"
          display="inline-block"
          textTransform="capitalize"
        >
          {company.companyName}
        </Typography>
        <Box marginY={2}>
          <Typography variant="h6">ข้อมูลติดต่อ</Typography>
          <List>
            <Text des={company.address}>
              <LocationOnIcon fontSize="medium" />
            </Text>
            <Text des={company.email}>
              <EmailIcon fontSize="medium" />
            </Text>
            <Text des={company.tel}>
              <PhoneIphoneIcon fontSize="medium" />
            </Text>
          </List>
        </Box>

        <Divider />
        <Box marginY={2}>
          <Typography variant="h6">เกี่ยวกับบริษัท</Typography>
        </Box>
        <Box marginY={2}>
          <Typography variant="body1">{company.companyDescription}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Company;
