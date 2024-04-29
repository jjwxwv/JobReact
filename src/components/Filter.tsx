import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControl, FormLabel, Paper } from "@mui/material";

export default function Filter() {
  return (
    <FormControl>
      <Paper sx={{ p: 3 }}>
        <FormLabel>ตัวกรอง</FormLabel>
        <Box>
          <FormLabel>ลักษณะงาน</FormLabel>
          <FormGroup>
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="พนักงานประจำ"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="พนักงานพาร์ทไทม์"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="พนักงานรายวัน หรือ รายชั่วโมง"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="พนักงานสัญญาจ้าง"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="นักศึกษาฝึกงาน"
            />
          </FormGroup>
        </Box>
        <Box>
          <FormLabel>ช่วงระหว่างเงินเดือนที่ต้องการ</FormLabel>
          <FormGroup>
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="ต่ำกว่า 15,000"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="15,000 - 25,000"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="25,001 - 35,000"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="35,000 ขึ้นไป"
            />
            <FormControlLabel
              value=""
              control={<Checkbox size="small" />}
              label="ไม่ระบุเงินเดือน"
            />
          </FormGroup>
        </Box>
      </Paper>
    </FormControl>
  );
}
