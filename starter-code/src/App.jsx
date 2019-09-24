import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import foods from "./foods.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foodsArray: foods
    };
    this.method = this.method.bind(this);
  }

  method() {
    console.log(this.state.foodsArray);
  }

  render() {
    return (
      <div className="App">
        <Navbar className="bg-light justify-content-between p-5 m-5">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button onClick={this.method} type="submit">
              Submit
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default App;
