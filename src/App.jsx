import "./App.css";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher/Searcher";
import { useState } from "react";

const containerStyles = {
  backgroundColor: "whitesmoke",
  width: "80vw",
  height: "500px",
  borderRadius: "16px",
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const App = () => {
  const [searchedValue, setSearchedValue] = useState("JuanDeossa");
  return (
    <Container sx={{ ...containerStyles }}>
      <Searcher
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />
    </Container>
  );
};
