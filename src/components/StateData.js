import Axios from "axios";
import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

class StateData extends Component {
  constructor() {
    super();
    this.state = {
      stateDate: {},
    };
  }

  componentDidMount() {
    Axios
      .get("https://data.covid19india.org/state_district_wise.json")
      .then((res) => {
        console.log(res);
        this.setState({ stateDate: res.data });
      });
  }

  render() {

    

      let key=Object.keys(this.state.stateDate)

    
    return (
      <div className="row">
        <div className="col-md-12">
        <Accordion >
        {
            key.map((itm,key)=>{
            
                let districts=this.state.stateDate[itm].districtData
                let district_keys=Object.keys(districts)

                let total_active=0;
                let total_confirmed=0;
                let total_recovered=0;
                let total_death=0;

                let districts_list=[]
                for(let x in districts){

                    total_active+=districts[x].active
                    total_confirmed+=districts[x].confirmed
                    total_recovered+=districts[x].recovered
                    total_death+=districts[x].death
                    let ob=districts[x]
                    ob["districr_name"]=x
                    districts_list.push(ob)
                    
                }

                return(

                    <Accordion.Item eventKey={key}>
                      <Accordion.Header>{itm}</Accordion.Header>
                      <Accordion.Body>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>District</td>
                                    <td>Confirmed</td>
                                    <td>Active</td>
                                    <td>Recovered</td>
                                    <td>death</td>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                districts_list.map((itm,key)=>{
                                  return(
                                    <tr key={key}>
                                      <td>{itm.districr_name}</td>
                                      <td>{itm.confirmed}</td>
                                      <td>{itm.active}</td>
                                      <td>{itm.recovered}</td>
                                      <td>{itm.deceased}</td>
                                    </tr>

                                  )
                                })

                              }
                                
                            </tbody>
                        </table>
                      </Accordion.Body>
                    </Accordion.Item>

                )


            })
            
            
        }
    </Accordion>
        </div>
      </div>
      );
  }
}

export default StateData;
