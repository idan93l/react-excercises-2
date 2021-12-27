import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StarWarsApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/1/");
        setData(response.data);
      } catch (error) {
        console.log(`It's a trap!`);
      }
    };
    getData();
  }, []);

  return (
  <div>
    <h1>Movie title: {data.title}</h1>
    <h1>Director: {data.director}</h1>
  </div>
  )
}
