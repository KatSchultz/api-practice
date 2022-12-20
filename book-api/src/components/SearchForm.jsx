import React, { useEffect, useState } from "react";
import { getAuthors } from "../services/books.service";
import AuthorDisplay from "./AuthorDisplay";
import Stack from "@mui/material/Stack";

export default function SearchForm() {
  const [authorData, setAuthorData] = useState([]);
  const [userInput, setUserInput] = useState({ author: "" });

  useEffect(() => {
    callAuthor("kurt vonnegut");
  }, []);

  function callAuthor(author) {
    getAuthors(author).then((response) => {
      console.log(response);
      setAuthorData(response.data.docs);
      return response;
    });
  }

  function handleInputChange(e) {
    setUserInput({ author: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    callAuthor(userInput.author);
  }

  return (
    <div className="search-form">
      <form action="book-search" onSubmit={handleSubmit}>
        <label htmlFor="">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
      <Stack spacing={2}>
        {authorData.map((elem) => (
          <AuthorDisplay data={elem} key={elem.key} />
        ))}
      </Stack>
    </div>
  );
}
