import React from "react";
import axios from "axios";
import Button from "./Button.jsx";
import TextBox from "./TextBox.jsx";
import SearchBar from "./SearchBar.jsx";

class ChuckNorris extends React.Component {
  state = {
    joke: "",
    categories: [],
    searchCategories: [],
    singleCategory: "",
  };

  getJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: response.data.value });
  };

  getJokeCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    // this.setState({ categories: response.data });
    this.setState({ searchCategories: response.data });
  };

  getJokeByCategory = async () => {
    // this.changeValue();
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${this.state.singleCategory}`
    );
    // console.log(response);
    this.setState({ joke: response.data.value });
  };

  changeValue = (e) => {
    this.setState({ singleCategory: e.target.value });
    // this.getJokeByCategory();
  };

  emptyValue = () => {
    this.setState({ singleCategory: '' })
  }

  componentDidMount = () => {
    this.getJokeCategories();
    // this.getJoke();
  };

  render = () => {
    console.log(this.state.singleCategory);
    // console.log(this.state.joke);
    return (
      <div>
        <Button button="Get a Chuck Norris Joke" invoker={this.getJoke} />

        {/* <TextBox text={this.state.joke} /> */}

        <SearchBar
          // invoker={this.getJokeCategories}
          categories={this.state.searchCategories}
          // searchBarValue={this.getJokeByCategory}
          searchBarValue={this.changeValue}
          // emptyValue={this.emptyValue}
        />

        <Button
          button="Get joke by this category"
          invoker={this.getJokeByCategory}
        />
        <TextBox text={this.state.joke} />

        <Button
          button="Get jokes categories"
          // invoker={this.getJokeCategories}
        />

        <TextBox categories={this.state.categories} />
      </div>
    );
  };
}
export default ChuckNorris;
