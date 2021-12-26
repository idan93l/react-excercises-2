import React from "react";
import { Link } from "react-router-dom";

export default class Item extends React.Component {
  getStatusClass = () => {
    return this.props.item.status === "Done" ? "positive" : "";
  }

  render() {
    return (
      <>
        <tr className={this.getStatusClass()}>
          <td>{this.props.item.status}</td>
          <td>{this.props.item.description}</td>
          <td>
            <Link to={`/item/${this.props.item.id}`}>
              <button className="ui button">Edit</button>
            </Link>
          </td>

          <td><button
            onClick={() => this.props.onDelete(this.props.item.id)}
            className="ui button">Delete</button>
          </td>
        </tr>
      </>
    )
  }
}