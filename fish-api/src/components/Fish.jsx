import React, { useEffect, useState } from "react";
import { getFish } from "../services/api.service";
import "./Fish.css";
import fishimg from "../images/fish-img.jpg";

export default function Fish() {
  const [fish, setFish] = useState({});

  useEffect(() => {
    getRandomFish();
  }, []);

  function getRandomFish() {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(randomNum);

    getFish().then((response) => {
      setFish(response.data[randomNum]);
      console.log(response);

      return response;
    });
  }

  console.log(fish["Species Name"]);

  return (
    <div>
      Fish
      <button onClick={getRandomFish}>Get New Fish</button>
      {fish && <h2>{fish["Species Name"]}</h2>}
      <img src={fish["Image Gallery"]?.[0].src} alt="" />
    </div>
  );
}
