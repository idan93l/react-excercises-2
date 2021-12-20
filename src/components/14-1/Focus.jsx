import React from "react";

class Focus extends React.Component {
  constructor(){
    super();
    this.Input = React.createRef();
  }

  componentDidMount = () => {
    this.Input.current.focus();
  }

  render = () => {
    return (
      <div>
        <input type="text" placeholder="focused!" ref={this.Input}/>
      </div>
    )
  }
}

export default Focus;