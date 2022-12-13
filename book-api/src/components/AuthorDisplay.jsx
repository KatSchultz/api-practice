import React from "react";
import Paper from "@mui/material/Paper";

export default function AuthorDisplay({ data }) {
  return (
    <Paper>
      <h1>{data.name}</h1>
      <p>{data.top_work}</p>
    </Paper>
  );
}
