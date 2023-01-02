import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Container from "@mui/material/Container";
import SubjectSearch from "./components/SubjectSearch";

function App() {
  return (
    <div className="App">
      <Container>
        <SubjectSearch />
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
