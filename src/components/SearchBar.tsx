import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { commonType } from "../types/type";
import { Link } from "react-router-dom";

type ComponentType = {
  keyword: string;
  selectedCategory: commonType | null;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<commonType | null>>;
  handleSubmit: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  selectedHiring: number | null;
  selectedSalary: number | null;
};
function SearchBar({
  keyword,
  selectedCategory,
  setKeyword,
  setSelectedCategory,
  handleSubmit,
  selectedHiring,
  selectedSalary,
}: ComponentType) {
  const url = "http://localhost:8080/category";
  const [category, setCategory] = useState<commonType[]>([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data);
        if (res.statusText !== "OK") {
          throw new Error("fetch error");
        }
        setCategory(data);
      } catch (err) {
        if (err instanceof Error) {
          reportError({ message: err.message });
        }
      }
    }
    fetchData();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} sm={12} md={5}>
          <TextField
            id="keyword"
            label="ระบุคีย์เวิร์ด"
            variant="outlined"
            size="small"
            fullWidth
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Autocomplete
            value={selectedCategory}
            fullWidth
            disablePortal
            id="category-select"
            options={category}
            size="small"
            getOptionLabel={(option) => option.title}
            onChange={(_, newValue) => {
              setSelectedCategory(newValue);
            }}
            // onClose={}
            renderInput={(params) => (
              <TextField {...params} label="ระบุหมวดหมู่งาน" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Button
            component={Link}
            to={`?${keyword ? `title=${keyword}` : ""}${
              selectedCategory ? `categoryId=${selectedCategory.id}` : ""
            }${selectedHiring ? `hiringTypeId=${selectedHiring}` : ""}${
              selectedSalary ? `salaryId=${selectedSalary}` : ""
            }`}
            variant="contained"
            size="medium"
            endIcon={<SearchIcon />}
            fullWidth
          >
            ค้นหา
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SearchBar;
