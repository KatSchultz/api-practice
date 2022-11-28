import React, { useState, useEffect } from "react";
import { getGovData } from "../services/api.service";

export default function GovData() {
  const [govData, setGovData] = useState({});
  const [drilldown, setDrilldown] = useState("State");
  const [measure, setMeasure] = useState("Population");

  useEffect(() => {
    retrieveGovData();
  }, []);

  function retrieveGovData(drill, measure) {
    getGovData(drill, measure).then((response) => {
      setGovData(response.data.data[0]);
      console.log(response);
      return response;
    });
  }

  function drillChangeHandler(e) {
    setDrilldown(e.target.value);
  }

  function measureHandler(e) {
    setMeasure(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    getGovData(drilldown, measure).then((response) => {
      setGovData(response.data.data[0]);
      return response;
    });
  }
  console.log("in submit handler", govData);
  return (
    <div>
      <h2>Gov Data</h2>
      <form action="" onSubmit={submitHandler}>
        <select name="drilldown" id="drilldown" onChange={drillChangeHandler}>
          <option value="State">State</option>
          <option value="Nation">Nation</option>
          <option value="City">City</option>
        </select>
        <select name="measure" id="measure" onChange={measureHandler}>
          <option value="Population">Population</option>
          <option value="Occupation">Occupation</option>
          <option value="Industries">Industries</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <div className="data-display">
        <h3>{govData?.Nation}</h3>
        <h3>{govData?.State}</h3>
      </div>
    </div>
  );
}
