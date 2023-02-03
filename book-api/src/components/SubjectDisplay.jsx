import React from "react";
import { singleBookSearchFromSubject } from "../services/books.service";

export default function SubjectDisplay({ book }) {
  function getBookDetails() {
    singleBookSearchFromSubject(book.id).then((response) => {
      console.log(response);
    });
    // console.log(book.key);
  }
  return (
    <div>
      <h2 onClick={getBookDetails}>{book.title}</h2>
    </div>
  );
}
