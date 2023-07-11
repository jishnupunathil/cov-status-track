import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StateData from "./StateData";


class India extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png "
            alt=""
            style={{ width: "3rem" }}
          />
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card bg="primary" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Total Case</Card.Title>
                  <h3>19767</h3>
                  <Card.Text>[Today:25]</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Active Cases</Card.Title>
                  <h3>19767</h3>
                  <Card.Text>[Today:25]</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Recovered</Card.Title>
                  <h3>19767</h3>
                  <Card.Text>[Today:25]</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Death</Card.Title>
                  <h3>19767</h3>
                  <Card.Text>[Today:25]</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div>
            <StateData/>
        </div>
      </div>
    );
  }
}

export default India;
