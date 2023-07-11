import React,{Component} from "react";
import axios from "axios";

class World extends Component{

    constructor(){
        super()
        this.state={
            data:[]
        }
    }


    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries')
        .then((res)=>{
            this.setState({data:res.data})
        })
    }
    render(){

        return(
            <div className="row">
            <div className="col-md-12">
                <table className="table table-primary table-bordered table-striped">
                    <thead>
                        <tr>
                        <td>Country</td>
                        <td>Total Case</td>
                        <td>Recovered</td>
                        <td>Death</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item,key)=>{
                                return(
                                    <tr>
                                        <td>{item.country} 
                                        <img src={item.countryInfo.flag} alt="" style={{width:'3rem',marginLeft:'10px'}}/>
                                        </td>
                                        <td>{item.cases}</td>
                                        <td>{item.recovered}</td>
                                        <td>{item.deaths}</td>
                                    </tr>
                                )
                            })



                        }
                    
                    </tbody>
                </table>
            </div>
            
            </div>
        )
    }
}

export default World