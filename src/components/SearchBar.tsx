import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
type categoryType = { label: string; id: number };
const category: categoryType[] = [
  { label: "IT", id: 1 },
  { label: "Law", id: 2 },
  { label: "Engineer", id: 3 },
  { label: "Accountant", id: 4 },
  { label: "Business", id: 5 },
];

function SearchBar() {
  return (
    <form
    // onSubmit={}
    >
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} sm={12} md={5}>
          <TextField
            id="keyword"
            label="ระบุคีย์เวิร์ด"
            variant="outlined"
            size="small"
            fullWidth
            //   onChange={}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Autocomplete
            fullWidth
            disablePortal
            id="category-select"
            options={category}
            size="small"
            //   onChange={}
            //   onClose={}
            renderInput={(params) => (
              <TextField {...params} label="ระบุหมวดหมู่งาน" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            size="medium"
            endIcon={<SearchIcon />}
          >
            ค้นหา
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SearchBar;
