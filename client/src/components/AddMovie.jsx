import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    
    this.handleChange = (e) => {
      this.setState({
        title: e.target.value
      })
    }

    this.clickHandler = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.addMovie(this.state);
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>Add movie...</label>
          <div>
            <input id="add-input" type="text" onChange={this.handleChange}/>
            <button onClick={this.clickHandler}>Go!</button>
          </div>
        </form>
      </div>
    )
  };
}

export default AddMovie;