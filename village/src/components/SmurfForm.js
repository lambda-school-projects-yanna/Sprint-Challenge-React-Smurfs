import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SmurfFormDiv = styled.form`{
  margin-top: 2%
  width: 100%;
  display: flex;
  justify-content: center

  input {
    display: flex;
    width: 300px;
    height: 20px;
    justify-content: center
    margin-bottom: 5px;
  }

  button {
    margin-left: 30%;
  }


}`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .catch(err => console.log(err))
    this.setState({
      name: '',
      age: '',
      height: '',
    });
    alert('Smurf added! Return home to see the village')
    window.location.reload();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SmurfFormDiv>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </SmurfFormDiv>
    );
  }
}

export default SmurfForm;
