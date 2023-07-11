import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StateData from "./StateData";
import axios from "axios";


class India extends Component {


  constructor(){
    super()
    this.state={
      data:{}
    }
  }
  componentDidMount(){

    axios.get('https://corona.lmao.ninja/v2/countries/india').then((res)=>{
      this.setState({data:res.data})
    })
  }

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
                  <h3>{this.state.data.cases}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Active Cases</Card.Title>
                  <h3>{this.state.data.active}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Recovered</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Death</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
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
