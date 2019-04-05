import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  margin:100px 40px;
  background:lightblue;
  height:200px;
  align-items:center;
  border:5px solid white;
  border-radius:20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px auto;
`;

const FormSections = styled.div`
margin:5px;

`;

const Input = styled.input`
text-align:center;
height:20px;
border-radius:20px;
`
const Button = styled.button`
height:30px;
border-radius:20px;
  `

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  

  addSmurf = event => {
    // event.preventDefault();
    // add code to create the smurf using the api
    // this.props.addSmurf(this.state.smurfs)
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        this.setState({ smurfs: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
          <FormSections>
            <Input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </FormSections>
          <FormSections>
            <Input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </FormSections>
          <FormSections>
            <Input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </FormSections>
          <FormSections>
            <Button type="submit">Add to the village</Button>
          </FormSections>
        </Form>
      </Container>
    );
  }
}

export default SmurfForm;
