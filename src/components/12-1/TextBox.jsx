import React from "react";

class TextBox extends React.Component {
  render = () => {
    const {text, categories} = this.props
    return (
      <div>
          <h1>{text}</h1>
          {categories && categories.map(category => {
            return <h1 key={category}>{category}</h1>
          })}
      </div>
    )
  }
}

export default TextBox;