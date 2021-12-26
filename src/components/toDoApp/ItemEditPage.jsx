import React from "react";
import Api from "../Api";
import { Link } from "react-router-dom";

export default class ItemEditPage extends React.Component {
  state = Object.assign({}, Api.getItem(this.props.id));

  onStatusChange = (e) => {
    this.setState({status: e.target.value});
  }

  onDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  onSave = () => {
    Api.updateItem(this.state)
  }

  render() {
    return <>
      <div>
        <label>Status:
          <input type="text" value={this.state.status} onChange={this.onStatusChange} />
        </label>
      </div>

      <div>
        <label>Description:
          <input type="text" value={this.state.description} onChange={this.onDescriptionChange} />
        </label>
      </div>

      <Link to={"/"}>
        <button className="ui button" onClick={this.onSave}>Save</button>
      </Link>
    </>
  }
}
