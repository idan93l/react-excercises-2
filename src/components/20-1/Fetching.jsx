import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetching() {
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source()
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`, {cancelToken: source.token});
        setFetchedData(data.value);
        console.log("oh yeah!");
      } catch (error) {
        console.log(`${error} failed! hahaha!`);
      }
    };
    getData()

    return (() => {
      source.cancel();
    })
  }, []);

  return (
    <div>
      <h1>{fetchedData}</h1>
    </div>
  );
}