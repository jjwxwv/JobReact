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
import { commonType } from "../types/type";
import { useEffect, useState } from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { axiosInstance } from "../api";

type ComponentType = {
  selectedHiring: number;
  selectedSalary: number;
  selectedExp: number;
  setSelectedHiring: React.Dispatch<React.SetStateAction<number>>;
  setSelectedSalary: React.Dispatch<React.SetStateAction<number>>;
  setSelectedExp: React.Dispatch<React.SetStateAction<number>>;
  // hiring: commonType[];
  // salary: commonType[];
};
export default function Filter({
  selectedHiring,
  selectedSalary,
  selectedExp,
  setSelectedHiring,
  setSelectedSalary,
  setSelectedExp,
}: ComponentType) {
  const hiringUrl = "/hiring";
  const salaryUrl = "/salary";
  const expUrl = "/exp";
  const [hiring, setHiring] = useState<commonType[]>([]);
  const [salary, setSalary] = useState<commonType[]>([]);
  const [exp, setExp] = useState<commonType[]>([]);
  useEffect(function () {
    async function fetchData() {
      const res1 = await axiosInstance.get(hiringUrl);
      const res2 = await axiosInstance.get(salaryUrl);
      const res3 = await axiosInstance.get(expUrl);
      const data1 = res1.data;
      const data2 = res2.data;
      const data3 = res3.data;

      setHiring(data1);
      setSalary(data2);
      setExp(data3);
    }
    trackPromise(fetchData());
  }, []);
  return (
    <Paper sx={{ p: 3, pb: 5, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        ตัวกรอง
      </Typography>
      <FormControl fullWidth focused={false} sx={{ gap: 1 }}>
        <Box>
          <FormLabel>ลักษณะงาน</FormLabel>
          <RadioGroup
            value={selectedHiring}
            onChange={(_, value) => {
              console.log(value);
              setSelectedHiring(Number(value));
            }}
          >
            <FormControlLabel
              value={0}
              control={<Radio size="small" />}
              label={"เลือกทั้งหมด"}
            />
            {hiring.map((value) => (
              <FormControlLabel
                value={value.id}
                control={<Radio size="small" />}
                label={value.title}
                key={value.id}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box>
          <FormLabel>ประสบการณ์</FormLabel>
          <RadioGroup
            value={selectedExp}
            onChange={(_, value) => {
              console.log(value);
              setSelectedExp(Number(value));
            }}
          >
            <FormControlLabel
              value={0}
              control={<Radio size="small" />}
              label={"เลือกทั้งหมด"}
            />
            {exp.map((value) => (
              <FormControlLabel
                value={value.id}
                control={<Radio size="small" />}
                label={value.title}
                key={value.id}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box>
          <FormLabel>ช่วงระหว่างเงินเดือนที่ต้องการ</FormLabel>
          <RadioGroup
            value={selectedSalary}
            onChange={(_, value) => {
              console.log(value);
              setSelectedSalary(Number(value));
            }}
          >
            <FormControlLabel
              value={0}
              control={<Radio size="small" />}
              label={"เลือกทั้งหมด"}
            />
            {salary.map((value) => (
              <FormControlLabel
                value={value.id}
                control={<Radio size="small" />}
                label={value.title}
                key={value.id}
              />
            ))}
          </RadioGroup>
        </Box>
      </FormControl>
    </Paper>
  );
}
