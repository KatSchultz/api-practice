import React, { useEffect, useState } from "react";
import { getAuthors, getBookBySubject } from "../services/books.service";
import AuthorDisplay from "./AuthorDisplay";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SearchForm() {
  const [authorData, setAuthorData] = useState([]);
  const [author, setAuthor] = useState({ author: "" });

  useEffect(() => {
    callAuthor("kurt vonnegut");
  }, []);

  function callAuthor(author) {
    getAuthors(author).then((response) => {
      setAuthorData(response.data.docs);
      return response;
    });
  }

  function handleInputChange(e) {
    setAuthor({ author: e.target.value });
  }

  function handleAuthorSubmit(e) {
    e.preventDefault();

    callAuthor(author.author);
  }

  return (
    <div className="search-form">
      <form action="book-search" onSubmit={handleAuthorSubmit}>
        <label htmlFor="">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          onChange={handleInputChange}
        />
        <Button variant="contained" color="secondary">
          Submit
        </Button>
      </form>

      <Stack spacing={2}>
        {authorData.map((elem) => (
          <AuthorDisplay data={elem} key={elem.key} />
        ))}
      </Stack>
    </div>
  );
}
