import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import "./css/style.css";

const Temp = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("Deoli");
  let api = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=da8e93f898403e31da009e138b3e47e2`;
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(api);
      const res = await response.json();
      setData(res.main);
    };
    fetchApi();
  }, [search]);

  const inputEvent = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input
        value={search}
        onChange={inputEvent}
        align="center"
        type="text"
        name="city"
        id="city"
        placeholder="Enter city name"
      />
      {!data ? (
        <p>No Data Found</p>
      ) : (
        <>
          <div className="box">
            <div class="wave -one"></div>
            <div class="wave -two"></div>
            <div class="wave -three"></div>

            <div id="weathercon">
              
            </div>

            <div class="info">
              <h2 class="location">{search}</h2>
              {/* <p id="date">WED | nov 23 | 10:49AM</p> */}
              <h1 class="temp">{data.temp}&deg;C</h1>
              <h3 class="tempmin_max">
                Min {data.temp_min} &deg;C | Max {data.temp_max} &deg;C
              </h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Temp;
