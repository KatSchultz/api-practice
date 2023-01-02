import React, { useState } from "react";
import { getBookBySubject } from "../services/books.service";
import SubjectDisplay from "./SubjectDisplay";

export default function SubjectSearch() {
  const [bookData, setBookData] = useState([]);
  const [subject, setSubject] = useState({ subject: "" });

  function handleSubjectChange(e) {
    setSubject({ subject: e.target.value });
  }

  function handleSubjectSubmit(e) {
    e.preventDefault();
    getBookBySubject(subject.subject).then((response) => {
      console.log("book: ", subject);
      console.log(response);
      setBookData(response.data.works);
      return response;
    });
  }

  return (
    <div className="">
      <form action="book-search" onSubmit={handleSubjectSubmit}>
        <label htmlFor="">Subject</label>
        <input
          type="text"
          name="book"
          id="book"
          onChange={handleSubjectChange}
        />
        <button>Submit</button>
      </form>
      {bookData &&
        bookData.map((elem) => <SubjectDisplay book={elem} key={elem.id} />)}
    </div>
  );
}
