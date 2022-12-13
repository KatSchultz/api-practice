import React, { useEffect, useState } from "react";
import { getAuthors } from "../services/books.service";
import AuthorDisplay from "./AuthorDisplay";
import Stack from "@mui/material/Stack";

export default function SearchForm() {
  const [authorData, setAuthorData] = useState([]);

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
  return (
    <Stack spacing={2}>
      {authorData.map((elem) => (
        <AuthorDisplay data={elem} key={elem.key} />
      ))}
    </Stack>
  );
}
