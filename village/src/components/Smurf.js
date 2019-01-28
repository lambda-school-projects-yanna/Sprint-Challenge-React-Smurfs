import React from 'react';
import styled from 'styled-components'; 

const SmurfDiv = styled.div`{
  border: solid gray 1px;
  width: 20%;
  height: 180px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center
}`

const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={()=>{
        props.deleteSmurf(props.id)
      }}>Delete me?</button>
      <button onClick={()=>{
        props.editSmurf(props.id)
      }}>Edit me?</button>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

