import React from "react";
import Paper from "@mui/material/Paper";
import { singleBookSearch } from "../services/books.service";
import { useNavigate } from "react-router-dom";

export default function AuthorDisplay({ data }) {
  const navigate = useNavigate();
  function getBookDetails() {
    singleBookSearch(data.top_work).then((response) => {
      console.log(response);
      navigate("/book");
      // console.log(response);
    });
  }

  return (
    <Paper>
      <h1>{data.name}</h1>
      <p onClick={getBookDetails}>{data.top_work}</p>
    </Paper>
  );
}
