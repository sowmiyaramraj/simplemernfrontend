import logo from './logo.svg';
import './App.css';
import useState from "react";
import Signin from "./register/signin";
import Signup from "./register/signup";
import Usersdata from "./usersdata";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
   return (
    <div className="App">
      <div className="body">
        <Router>
           
            <Routes>          
            <Route path="/"  element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>          
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/users" element={<Usersdata/>}/>
            </Routes>
           </Router>
        </div>
    </div>
  );
}

export default App;
