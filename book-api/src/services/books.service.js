import axios from "axios";

export function getAuthors(author) {
  return axios
    .get(`https://openlibrary.org/search/authors.json?q=${author}`)
    .then((response) => {
      return response;
    });
}

export function getBook(book) {
  return axios
    .get(`https://openlibrary.org/search.json?title=${book}`)
    .then((response) => {
      return response;
    });
}
