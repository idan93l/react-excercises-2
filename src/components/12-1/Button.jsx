import React from "react";

class Button extends React.Component {
  render = () => {
    const {invoker, button} = this.props
    return (
      <div>
        <button onClick={invoker}>{button}</button>
      </div>
    )
  }
}

export default Button;