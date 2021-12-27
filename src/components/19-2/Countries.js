import React, { useState, useEffect } from "react";
import axios from "axios";
// import SearchInput from "./SearchInput.jsx";
// import ListItem from "./ListItem.jsx";

export default function Countries() {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v2/all");
        setResults(data);
      } catch (error) {
        console.log(`It's a trap!`);
      }
    };
    getData();
  }, []);
  
  const filterList = (results, term) => {
    return results.filter((result) => {
      const countryName = result.name.toLowerCase();
      return countryName.startsWith(term.toLowerCase());
    });
  };
  
  const mapping = (arr) => {
    return arr.map((item, index) => {
      return <li key={index}>{item.name}</li>;
    });
  };
  
  const updateList = () => {
    const updated = filterList(results, term);
    if (term.length > 0) {
      return mapping(updated);
    } else {
      return mapping(results);
    }
  };
  
  const onChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input
            value={term}
            className="input"
            placeholder="Enter a country name"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>{updateList()}</div>
    </div>
  );
}
