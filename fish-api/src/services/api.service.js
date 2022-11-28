import axios from "axios";

export function getFish() {
  return axios.get("https://www.fishwatch.gov/api/species").then((response) => {
    return response;
  });
}

export function getGovData(drilldowns = "Nation", measures = "Population") {
  return axios
    .get("https://datausa.io/api/data?", {
      params: {
        drilldowns,
        measures,
        year: "latest",
      },
    })
    .then((response) => response);
}
