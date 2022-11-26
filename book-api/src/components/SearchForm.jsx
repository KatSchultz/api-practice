import React, { useEffect } from "react";
import { getAuthors } from "../services/books.service";

export default function SearchForm() {
  useEffect(() => {
    callAuthor("vonnegut");
  }, []);

  function callAuthor(author) {
    getAuthors(author).then((response) => {
      console.log(response);
      return response;
    });
  }
  return <div>SearchForm</div>;
}
