import React from "react";

class Avatar extends React.Component {
  render() {
    const { avatar } = this.props
    return (
      <div className="ui card">
        <div className="image">
          <img src={avatar.picture.large} alt="person pic" />
        </div>
        <div className="content">
          <div className="header" style={{textAlign: "center"}}>
            {avatar.name.first} {avatar.name.last}
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;