import React from "react";
import Api from "../Api";
import Item from "./Item";

export default class ItemList extends React.Component {
  state = {
    items: Api.getListItems()
  }

  onDelete = (id) => {
    Api.deleteItem(id);
    this.setState({items: Api.getListItems()});
  }

  renderItems = () => {
    return this.state.items.map(
      item => 
        <Item key={item.id} item={item} onDelete={this.onDelete}></Item>
    )
  }

  render() {
    return (
      <>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </>
    )
  }
}