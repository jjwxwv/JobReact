import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FormControl,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Filter() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        ตัวกรอง
      </Typography>
      <FormControl fullWidth focused={false}>
        <FormLabel>ลักษณะงาน</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value={1}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="พนักงานประจำ"
          />
          <FormControlLabel
            value={2}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="พนักงานพาร์ทไทม์"
          />
          <FormControlLabel
            value={3}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="พนักงานรายวัน หรือ รายชั่วโมง"
          />
          <FormControlLabel
            value={4}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="พนักงานสัญญาจ้าง"
          />
          <FormControlLabel
            value={5}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="นักศึกษาฝึกงาน"
          />
        </RadioGroup>
        <FormLabel>ช่วงระหว่างเงินเดือนที่ต้องการ</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value={1}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="ต่ำกว่า 15,000"
          />
          <FormControlLabel
            value={2}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="15,000 - 25,000"
          />
          <FormControlLabel
            value={3}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="25,001 - 35,000"
          />
          <FormControlLabel
            value={4}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="35,000 ขึ้นไป"
          />
          <FormControlLabel
            value={5}
            control={
              <Radio
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                size="small"
              />
            }
            label="ไม่ระบุเงินเดือน"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
