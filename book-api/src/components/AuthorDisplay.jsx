import React from "react";

export default function AuthorDisplay({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.top_work}</p>
    </div>
  );
}
