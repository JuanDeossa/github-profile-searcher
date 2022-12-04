import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

export const Searcher = () => {
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="GitHub User"
        placeholder="JuanDeossa"
        sx={{ width: "80%", marginTop: "30px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchTwoToneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
