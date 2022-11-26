import axios from "axios";

export function getAuthors(author) {
  return axios
    .get(`https://openlibrary.org/search/authors.json?q=${author}`)
    .then((response) => {
      console.log(response);
      return response;
    });
}
