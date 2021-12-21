import React from 'react';
import axios from 'axios';
import Avatar from './Avatar.jsx';

class Main extends React.Component {
  state = {
    avatars: [],
    searchValue: '',
  };

  getAvatars = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    this.setState({ avatars: response.data.results });
  };

  filterAvatars = (avatars, searchValue) => {
    return avatars.filter((avatar) => {
      const fullName = (`${avatar.name.first} ${avatar.name.last}`).toLowerCase();
      return fullName.includes(searchValue.toLowerCase());
    });
  };

  avatarsCards = () => {
    if (this.state.avatars.length > 0) {
      return (
        <div className='ui link cards'>
          {this.filterAvatars(this.state.avatars, this.state.searchValue).map((avatar) => {
              return <Avatar key={avatar.login.uuid} avatar={avatar} />;
            }
          )}
        </div>
      );
    }
  };

  onChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  componentDidMount = () => {
    this.getAvatars();
  };

  render = () => {
    return (
      <div className='ui container segment'>
        <div className='ui grid search segment'>
        <h1>Random Avatars</h1>
          <input
            onChange={this.onChangeHandler}
            value={this.state.searchValue}
            className='prompt'
            type='text'
            placeholder='Search...'
          />
        </div>
        <div>{this.avatarsCards()}</div>
      </div>
    );
  }
}
export default Main;