import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { useState } from "react";

export const Searcher = (props) => {
  const { searchedValue, setSearchedValue } = props;
  const [onChangeValue, setOnChangeValue] = useState("")
  const handleValue = (e) => {
    const value = e.target.value;
    setOnChangeValue(value);
  };
  const handkeSubmit = () => {
    setSearchedValue(onChangeValue)
  };
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="GitHub User"
        placeholder="JuanDeossa"
        onChange={handleValue}
        sx={{ width: "80%", marginTop: "30px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handkeSubmit}>
                <SearchTwoToneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
