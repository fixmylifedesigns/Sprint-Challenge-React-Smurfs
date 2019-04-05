import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import styled from 'styled-components'
// import {NavLink, Route} from 'react-router-dom'

const Application = styled.div`
background:url(https://cafart.r.worldssl.net/images/Category_12502/subcat_39178/SmurfDayAdj.jpg);
background-position:center;
background-repeat:no-repeat;
background-size: cover;
height:100vh;
display:flex;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  // addSmurf = newSmurf => {
  //   axios
  //     .post("http://localhost:3333/smurfs", newSmurf)
  //     .then(res => {
  //       this.setState({ smurfs: res.data });
  //       console.log(res);
  //       // this.props.history.push('/');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <Application className="App">
        <SmurfForm addSmurf={this.addSmurf} smurfs={this.state.smurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </Application>
    );
  }
}

export default App;
