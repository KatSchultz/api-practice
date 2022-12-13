import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
