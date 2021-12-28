import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Algolia() {
  const [term, setTerm] = useState("hooks");
  const [term2, setTerm2] = useState("hooks");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${term}`
        );
        setResults(data.hits);
        console.log(data.hits);
      } catch (error) {
        console.log(`It's a trap!`);
      }
    };
    if (term) {
      getData();
    }
  }, [term]);

  const onClickHandler = () => {
    setTerm(term2)
  };

  const mapping = () => {
    if (results.length > 0) {
      return results.map((item) => {
        return (
          <li key={item.created_at_i}>
            <a href={item.url} key={item.created_at_i}>
              {item.title}
            </a>
          </li>
        );
      });
    }
  };

  return (
    <div>
      <input
        type="search"
        value={term2}
        className="input"
        placeholder="Enter a country name"
        onChange={(e) => setTerm2(e.target.value)}
      />
      <button onClick={onClickHandler}>search</button>
      <div>{mapping()}</div>
    </div>
  );
}
