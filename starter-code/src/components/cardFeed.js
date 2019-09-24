import React, { Component } from "react";
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

export class cardFeed extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            {this.state.foodsArray.map(food => {
              return (
                <div>
                  <div>
                    <Card className="p-2 m-2" style={{ width: "22rem" }}>
                      <Card.Img variant="top" src={food.image} />
                      <Card.Body>
                        <Card.Title>
                          <h1>{food.name}</h1>
                        </Card.Title>
                        <Card.Text>{food.calories}</Card.Text>
                        <hr></hr>
                        <Container>
                          <Row>
                            <Col>
                              <Button variant="danger">take -</Button>
                            </Col>
                            <Col>
                              <Container>
                                <h1>{food.quantity}</h1>
                              </Container>
                            </Col>
                            <Col>
                              <Button variant="danger">add +</Button>
                            </Col>
                          </Row>
                        </Container>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </Container>
      </div>
    );
  }
}

export default cardFeed;
