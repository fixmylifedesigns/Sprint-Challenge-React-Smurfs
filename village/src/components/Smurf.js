import React from 'react';
import styled from 'styled-components'

const SmurfDiv = styled.div`
background:white;
width:200px;
padding:20px;
margin:5px;
border-radius:10px;
background:lightblue;
border:5px solid white;
`


const Smurf = props => {
  return (
    <SmurfDiv className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

