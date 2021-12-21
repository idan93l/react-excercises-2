import React from "react";
import { data } from "./data.js";

class Messaging extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredData: [],
    };
  }
  getNames = (data) => {
    return data.map((element, index) => {
      return <h1 key={index}>{element.name}</h1>;
    });
  };

  getOldPeople = (data) => {
    const filteredArray = data.filter((element) => {
      return +element.birthday.slice(-4) <= 1990;
    });
    this.setState({ filteredData: filteredArray });
  };

  // getFood = ()

  componentDidMount = () => {
    this.getOldPeople(data);
  };

  render = () => {
    return (
      <div>
        <h1>filterde names:</h1>
        <div>{this.getNames(data)}</div>
        <br />
        {/* <div>{this.getNames(this.getOldPeople(data))}</div> */}
        {this.state.filteredData.map((obj) => {
          return (
            <div>
              <p>name: {obj.name}</p>
              <p>birthday: {obj.birthday}</p>
              <p>
                favorite food:
                <br />
                fishes: {obj.favoriteFoods.fish.map(food => {return <span> {food}</span>})}
                <br />
                meats: {obj.favoriteFoods.meats.map(food => {return <span> {food}</span>})}
              </p>
              <br />
            </div>
          );
        })}
      </div>
    );
  };
}

export default Messaging;
