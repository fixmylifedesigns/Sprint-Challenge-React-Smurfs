import React, { Component } from 'react';
import styled from 'styled-components'
import Smurf from './Smurf';

const ContainerDiv = styled.div`
/* width:800px; */
margin:0 auto;
display:flex;
flex-direction:column;
`

const SmurfList = styled.ul`
display:flex;
flex-wrap: wrap;
justify-content:flex-start;
margin: 0 auto;

`

const Header = styled.h1`
background:lightblue;
width:250px;
height:40px;
margin:20px auto;
border-radius:20px;
border:5px solid white;

`


class Smurfs extends Component {
  render() {
    return (
      <ContainerDiv className="Smurfs">
        <Header>Smurf Village</Header>
        <SmurfList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </SmurfList>
      </ContainerDiv>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
