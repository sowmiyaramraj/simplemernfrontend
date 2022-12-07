import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import VerticalTabs from "../pages/tab"
import axios from "axios";

function Signin(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        email:"",
        password:"", 
    });
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const responce=await axios.post("http://localhost:3001/register/signin",{...formdata});
        if(responce.data){
            localStorage.setItem("token",responce.data);
        }
        console.log(responce);
        navigate("/user");

    }
    return(
        <div>
            <h1>Signin</h1>
            <form onSubmit={handlesubmit}>
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                type="email" 
                name="email" 
                value={formdata.email} 
                onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/><br/><br/>
            <TextField 
                id="outlined-basic" 
                label="Password"
                variant="outlined" 
                type="password" 
                value={formdata.password} 
                name="password" 
                onChange={(e)=>setFormdata({...formdata,password:e.target.value})} /><br/><br/>
            <Button variant="contained" type="submit">Login</Button>
            </form>
        </div>
    );
}

export default Signin;