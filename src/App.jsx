import "./App.css";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher/Searcher";
import { useState } from "react";
import { useEffect } from "react";
import { getUserFromAPI } from "./services/githubUser";

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
  const [searchedValue, setSearchedValue] = useState("octocat");
  const [initialQuery, setInitialQuery] = useState(true);

  const getUser = async (value) => {
    try {
      let userData = await getUserFromAPI({ userQuery: value });
      if (value === "octocat" && initialQuery) {
        window.localStorage.setItem("octocat", JSON.stringify(userData));
        setInitialQuery(false);
        console.log("Primera carga", userData);
      } else if (userData.message === "Not Found") {
        userData = JSON.parse(window.localStorage.getItem("octocat"));
        console.log("FromLocalStorage", userData);
      } else {
        console.log("Busqueda", userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(searchedValue);
  }, [searchedValue]);

  return (
    <Container sx={{ ...containerStyles }}>
      {JSON.stringify(initialQuery)}
      <Searcher
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />
    </Container>
  );
};
