import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Chuck() {
  const [categories, setCategries] = useState([]);
  const [singleCategory, setsingleCategory] = useState("");
  const [randomJoke, setRandomJoke] = useState("");
  const [unfilteredJokes, setUnfilteredJokes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/categories`
        );
        setCategries(data);
      } catch (error) {
        console.log(`It's a trap!`);
      }
    };
    if (categories) {
      getData();
    }
  }, []);

  useEffect(() => {
    const getJokesByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${singleCategory}`
        );
        setUnfilteredJokes(data.result);
        // console.log(data.result);
      } catch (error) {
        console.log(`It's a trap!`);
      }
    };
    if (singleCategory) {
      getJokesByCategory();
    }
  }, [singleCategory]);

  useEffect(() => {
    const getJokeByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${singleCategory}`
        );
        setRandomJoke(data.value);
        console.log(data);
      } catch (error) {
        console.log(`It's a trap!`);
      }
    };
    if (singleCategory) {
      getJokeByCategory();
    }
  }, [singleCategory]);

  const onChangeHandle = (e) => {
    setsingleCategory(e.target.value);
  };

  const JokeByCategory = () => {
    if (randomJoke) {
      return (
        <div>
          <h1>Random joke from the category above:</h1>
          <h2>{randomJoke}</h2>
        </div>
      );
    }
  };

  // const jokesByCategory = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Search Joke..."
        list="categories"
        value={singleCategory}
        onChange={onChangeHandle}
        onClick={() => setsingleCategory("")}
      />
      <datalist id="categories">
        {categories &&
          categories.map((category) => {
            return <option key={category}>{category}</option>;
          })}
      </datalist>
      <div>{JokeByCategory()}</div>
      <br />
      <br />
    </div>
  );
}
