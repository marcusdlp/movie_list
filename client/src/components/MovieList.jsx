import React from 'react';
import SearchBar from './SearchBar.jsx';
import AddMovie from './Addmovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      matches: [],
      added: []
    }

    this.handleChange = (e) => {
      let movies = this.state.movies;
      let matches = movies.filter((movie) => {
        let lowerCaseTitle = movie.title.toLowerCase();
        let lowerCaseInput = (e.target.value).toLowerCase();
        return lowerCaseTitle.includes(lowerCaseInput);
      })
      console.log(matches);
      this.setState({
        matches: matches
      })
    }

    this.clickHandler = (e) => {
      e.preventDefault();
      this.setState({
        movies: this.state.matches
      })
    }

    this.addMovie = (movie) => {
      if (!this.props.movies.includes(movie)) {
        let mainList = [...this.state.movies, movie];
        let addedList = [...this.state.added, movie];
        this.setState({
          movies: mainList,
          added: addedList
        })
      }
    }

  }

  // componentDidMount() {
  //   this.setState({
  //     movies: this.state.movies
  //   })
  // }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.addMovie}/>
        <SearchBar movies={this.props.movies} handleChange={this.handleChange} handleSubmit={this.handleSubmit} clickHandler={this.clickHandler}/>
        {this.state.movies.map((movie) => {
          return (
            <div>{movie.title}</div>
          )
        })}
      </div>
    )
  }
}

export default MovieList;