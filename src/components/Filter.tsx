import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Box,
  FormControl,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { commonType } from "../types/type";

export default function Filter() {
  const url1 = "http://localhost:8080/hiring";
  const url2 = "http://localhost:8080/salary";
  const [category, setCategory] = useState<commonType[]>([]);
  const [salary, setSalary] = useState<commonType[]>([]);
  useEffect(function () {
    async function fetchData() {
      try {
        const res1 = await axios.get(url1);
        const res2 = await axios.get(url2);
        const data1 = res1.data;
        const data2 = res2.data;
        if (res1.statusText !== "OK") {
          throw new Error("fetch error");
        }
        setCategory(data1);
        setSalary(data2);
      } catch (err) {
        if (err instanceof Error) {
          reportError({ message: err.message });
        }
      }
    }
    fetchData();
  }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        ตัวกรอง
      </Typography>
      <FormControl fullWidth focused={false} sx={{ gap: 1 }}>
        <Box>
          <FormLabel>ลักษณะงาน</FormLabel>
          <RadioGroup>
            {category.map((value) => (
              <FormControlLabel
                value={value.id}
                control={<Radio size="small" />}
                label={value.title}
                key={value.id}
              />
            ))}
            {/* <FormControlLabel
              value={1}
              control={<Radio size="small" />}
              label="พนักงานประจำ"
            />
            <FormControlLabel
              value={2}
              control={<Radio size="small" />}
              label="พนักงานพาร์ทไทม์"
            />
            <FormControlLabel
              value={3}
              control={<Radio size="small" />}
              label="พนักงานรายวัน หรือ รายชั่วโมง"
            />
            <FormControlLabel
              value={4}
              control={<Radio size="small" />}
              label="พนักงานสัญญาจ้าง"
            />
            <FormControlLabel
              value={5}
              control={<Radio size="small" />}
              label="นักศึกษาฝึกงาน"
            /> */}
          </RadioGroup>
        </Box>
        <Box>
          <FormLabel>ช่วงระหว่างเงินเดือนที่ต้องการ</FormLabel>
          <RadioGroup>
            {salary.map((value) => (
              <FormControlLabel
                value={value.id}
                control={<Radio size="small" />}
                label={value.title}
                key={value.id}
              />
            ))}
            {/* <FormControlLabel
              value={1}
              control={<Radio size="small" />}
              label="ต่ำกว่า 15,000"
            />
            <FormControlLabel
              value={2}
              control={<Radio size="small" />}
              label="15,000 - 25,000"
            />
            <FormControlLabel
              value={3}
              control={<Radio size="small" />}
              label="25,001 - 35,000"
            />
            <FormControlLabel
              value={4}
              control={<Radio size="small" />}
              label="35,000 ขึ้นไป"
            />
            <FormControlLabel
              value={5}
              control={<Radio size="small" />}
              label="ไม่ระบุเงินเดือน"
            /> */}
          </RadioGroup>
        </Box>
      </FormControl>
    </Paper>
  );
}
