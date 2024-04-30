import { Autocomplete, Button, Stack, TextField } from "@mui/material";
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
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <TextField
          id="keyword"
          label="ระบุคีย์เวิร์ด"
          variant="outlined"
          size="small"
          fullWidth
          //   onChange={}
        />
        <Autocomplete
          disablePortal
          id="category-select"
          options={category}
          sx={{ width: 1 }}
          size="small"
          //   onChange={}
          //   onClose={}
          renderInput={(params) => (
            <TextField {...params} label="ระบุหมวดหมู่งาน" />
          )}
        />
        <Button
          variant="contained"
          sx={{ width: { xs: 1, md: "auto" } }}
          size="medium"
          endIcon={<SearchIcon />}
        >
          ค้นหา
        </Button>
      </Stack>
    </form>
  );
}

export default SearchBar;
