import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

export const Searcher = (props) => {
  const { searchedValue, setSearchedValue } = props;

  const handleValue = (e) => {
    const value = e.target.value;
    setSearchedValue(value);
  };
  const handkeSubmit = () => {
    console.log(searchedValue);
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
