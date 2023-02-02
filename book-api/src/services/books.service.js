import axios from "axios";

export function getAuthors(author) {
  return axios
    .get(`https://openlibrary.org/search/authors.json?q=${author}`)
    .then((response) => {
      return response;
    });
}

export async function getAuthors2(author) {
  const response = await axios.get(
    `https://openlibrary.org/search/authors.json?q=${author}`
  );
  // console.log(response);
  return response;
}

export function getBookBySubject(subject) {
  return axios
    .get(`https://openlibrary.org/subjects/${subject}.json`)
    .then((response) => {
      return response;
    });
}
