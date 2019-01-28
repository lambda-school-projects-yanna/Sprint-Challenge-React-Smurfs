import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import styled from 'styled-components'; 

const SmurfsDiv = styled.div`{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}`


class Smurfs extends Component {

  deleteSmurf(id) {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .catch(err => console.log(err));
      window.location.reload();
  }

  editSmurf(id) {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, {
        name: prompt('Smurf name'),
        age: prompt('Smurf age'),
        height: prompt('Smurf height'),
      })
      .catch(err => console.log(err));
      window.location.reload();
  }

  render() {
    return (
      <SmurfsDiv>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.deleteSmurf}
                editSmurf={this.editSmurf}
              />
            );
          })}
      </SmurfsDiv>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
