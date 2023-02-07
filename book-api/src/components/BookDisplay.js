import React from "react";
import { containerClasses, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getCoverArt } from "../services/books.service";
import "./BookDisplay.css";

export default function BookDisplay({ book }) {
  console.log(book);
  console.log(getCoverArt(book.key));
  return (
    <div className="book-detail-container">
      <Paper>
        <Stack spacing={2}>
          <Typography variant="h3">{book.title}</Typography>
          <Typography variant="h6">{book.author_name}</Typography>
          {/* {book?.subject[0] && (
          <Typography variant="p">{book.subject[0]}</Typography>
        )} */}
          <Typography variant="p">
            First published: {book.first_publish_year}
          </Typography>
          <Typography variant="p">Main character: {book.person}</Typography>
        </Stack>
      </Paper>
    </div>
  );
}
