import React, { Component } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import  auth  from "../auth";

export default class Login extends Component {
  render() {
      
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ width: "350px", minWidth: "350px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={(input) => (this.emailRef = input)}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={(input) => (this.passwordRef = input)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    ref={(input) => (this.checkRef = input)}
                  />
                </Form.Group>
                <Button
                  onClick={(e) => {
                        e.preventDefault()
                        auth.login(this.emailRef.value,
                          this.passwordRef.value, () =>   this.props.history.push("/app")
                          )

                      
                  }}
                  variant="danger"
                  className="w-100"
                  type="submit"
                  style={{ backgroundColor: "rgb(226, 80, 31)" }}
                >
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to={"/signUp"}>Sign up</Link>
          </div>
        </div>
      </Container>
    );
  }
}
