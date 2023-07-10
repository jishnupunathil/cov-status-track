import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';
import India from './components/India';
import World from './components/World';
import Header from './components/Header';

class App extends Component{

  render(){
    return(
      <div className='container-fluid'>
      <Header/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<India/>}></Route>
          <Route path='/india' element={<India/>}></Route>
          <Route path='/world' element={<World/>}></Route>
        
        </Routes>
        
        </BrowserRouter>

      </div>
    )
  }


}

export default App;
