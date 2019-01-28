import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'; 

const HeadOne = styled.h1`{
  display: flex;
  justify-content: center;
}`

const AppDiv = styled.div`{
  margin-left: 10%;
  margin-right: 10%;
}`

const NavDiv = styled.div`{
  display: flex;
  margin-left: 35%;
  width: 300px;
  justify-content: space-around;
}`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.


  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data})
        console.log(res)});
  }


  render() {
    return (
      <AppDiv>
        <HeadOne>Smurf Village</HeadOne>
        <NavDiv>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>Add Smurf</NavLink>
        </NavDiv>

          <Route path='/smurf-form' 
          render={props => (<SmurfForm {...props} />)}
          />
          <Route exact path='/' 
          render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)}
          />

     </AppDiv> 
    );
  }
}

export default App;
