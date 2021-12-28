import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetching() {
  const [fetchedData, setFetchedData] = useState("");

  // useEffect(() => {
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`, {cancelToken: source.token});
  //       setFetchedData(data.value);
  //       console.log(data.value);
  //     } catch (error) {
  //       if (axios.isCancel(error)) return;
  //     }
  //     return () => source.cancel();
  //   };
  //   getData()
  // }, []);

  useEffect(() => {
    const source = axios.CancelToken.source(); 
    axios.get('https://api.chucknorris.io/jokes/random', {
      cancelToken: source.token
    }).then((response) => {
      setFetchedData(response.data);
    }).catch((error) => {
      if (axios.isCancel(error)) return;
    });

    return () => source.cancel();
  }, []);

  return (
    <div>
      <h1>{fetchedData}</h1>
    </div>
  );
}