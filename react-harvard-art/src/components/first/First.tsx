import React, { useEffect, useState } from "react";
import { fetchArt } from "../../services/harvard.services";
import { config } from "../../config";
import { Data } from "../../types/data.type";
import "./First.css";

export default function First() {
  const [art, setArt] = useState<Data[]>([]);

  useEffect(() => {
    fetchArt().then((response) => {
      setArt(response.data.records);
      console.log("response: ", response);
    });
  }, []);

  console.log(config);

  return (
    <div>
      <h1>First</h1>
      {art.map((art) => (
        <img src={art.baseimageurl} alt="" id="data-image" />
      ))}
    </div>
  );
}
