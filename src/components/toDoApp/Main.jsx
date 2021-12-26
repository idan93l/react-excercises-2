import React from "react";
import axios from "axios";

class Main extends React.Component {
  state = {
    data: []
  }

  getData = async () => {
    const response = await axios.get('https://61c325b69cfb8f0017a3e9ac.mockapi.io/animals');
    this.setState({ data: response.data });
    // console.log(response.data);
  };

  componentDidMount = () => {
    this.getData()
  }

  render = () => {
    console.log(this.state.data);
    return (
    <div className="ui segment">
      <form ref="myForm" className="ui form"></form>
      <input type="text" placeholder="Add something..." className="ui input"/>
    </div>
    )
  };
}

export default Main;
