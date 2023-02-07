import React, { useEffect, useState } from "react";
import {
  getAuthors,
  getBookBySubject,
  getAuthors2,
} from "../services/books.service";
import AuthorDisplay from "./AuthorDisplay";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function SearchForm({ changeBook }) {
  const [authorData, setAuthorData] = useState([]);
  const [author, setAuthor] = useState({ author: "" });

  useEffect(() => {
    callAuthor("kurt vonnegut");
  }, []);

  function callAuthor(author) {
    const writerData = getAuthors2(author).then((response) => {
      setAuthorData(response.data.docs.slice(0, 3));
      console.log("writerData: ", response.data.docs.slice(0, 3));
    });
    // setAuthorData(writerData.data.docs);
    // getAuthors(author).then((response) => {
    //   setAuthorData(response.data.docs);
    //   return response;
    // });
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
      <Paper elevation={4} sx={{ marginBottom: "1rem" }}>
        <form action="book-search" onSubmit={handleAuthorSubmit}>
          <h2>Search by Author</h2>
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
      </Paper>
      <Stack spacing={2}>
        {authorData.map((elem) => (
          <AuthorDisplay data={elem} key={elem.key} changeBook={changeBook} />
        ))}
      </Stack>
    </div>
  );
}
