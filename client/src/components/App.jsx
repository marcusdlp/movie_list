import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>flandango</h1>
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
}

export default App;