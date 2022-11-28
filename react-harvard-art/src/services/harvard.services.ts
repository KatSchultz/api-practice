import axios from "axios";
import { config } from "../config";

export function fetchArt() {
  return axios
    .get("https://api.harvardartmuseums.org/image?", {
      params: {
        apikey: config.apiKey,
      },
    })
    .then((response) => {
      console.log(config.apiKey);
      return response;
    });
}
