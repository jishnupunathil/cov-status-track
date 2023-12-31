import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Route,Routes } from 'react-router-dom';
import India from './components/India';
import World from './components/World';
import Header from './components/Header';

class App extends Component{

  render(){
    return(
      <div className='container-fluid'>
      <Header/>
 
        <Routes>
          <Route path='/' element={<India/>}/>
          <Route path='/india' element={<India/>}/>
          <Route path='/world' element={<World/>}/>
        
        </Routes>
        

      </div>
    )
  }


}

export default App;
