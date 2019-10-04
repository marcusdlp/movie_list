import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form >
          <label>Search movies...</label>
          <div>
            <input id="search-input" type="text" onChange={this.props.handleChange} />
            <button onClick={this.props.clickHandler}>Go!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;