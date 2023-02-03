import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Container from "@mui/material/Container";
import SubjectSearch from "./components/SubjectSearch";
import { Route, Routes } from "react-router-dom";
import BookDisplay from "./components/BookDisplay";
import { useState } from "react";

function App() {
  const [activeBook, setActiveBook] = useState("");

  function changeBook(book) {
    setActiveBook(book);
  }

  return (
    <div className="App">
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SubjectSearch />
                <SearchForm />
              </>
            }
          ></Route>
          <Route path="/book" element={<BookDisplay />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
