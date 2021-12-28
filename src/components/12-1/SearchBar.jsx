import React from "react";

class SearchBar extends React.Component {
  render = () => {
    const {categories, searchBarValue, emptyValue} = this.props
    return (
      <div>
          <input
          type="text"
          placeholder="Search Joke..."
          list="jokes"
          onChange={searchBarValue}
          onClick={emptyValue}
          />
          <datalist id="jokes">
          {categories && categories.map(category => {
            return <option key={category}>{category}</option>
          })}
          </datalist>
      </div>
    )
  }
}

export default SearchBar;