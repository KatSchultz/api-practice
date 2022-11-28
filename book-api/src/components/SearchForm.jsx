import React, { useEffect, useState } from "react";
import { getAuthors } from "../services/books.service";
import AuthorDisplay from "./AuthorDisplay";

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
    <div>
      {authorData.map((elem) => (
        <AuthorDisplay data={elem} key={elem.key} />
      ))}
    </div>
  );
}
