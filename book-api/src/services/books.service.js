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

export async function singleBookSearch(title) {
  const singleBook = await axios.get(
    `https://openlibrary.org/search.json?q=${title}`,
    {
      // headers: {
      //   "access-control-allow-headers": "*",
      // },
    }
  );
  return singleBook;
}

export async function singleBookSearchFromSubject(bookID) {
  const singleBook = await axios.get(
    `https://https://openlibrary.org/works/OL45804W.json`
  );

  return singleBook;
}

export function getBookBySubject(subject) {
  return axios
    .get(`https://openlibrary.org/subjects/${subject}.json`)
    .then((response) => {
      return response;
    });
}
