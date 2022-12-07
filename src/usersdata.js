import React,{useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
function Userdata(){
  const [userdata,setUserdata]=useState([]);
  useEffect(()=>{
  async function getData()
       {
        const decodedtoken=jwt.decode(localStorage.getItem("token"));
        if(decodedtoken.exp * 1000 < Date.now())
        {
          navigate("/signin");

        }
else{
        const response= await axios.get("http://localhost:3001/user/get");
        setUserdata(response.data);    
    }
  }
    getData();
},[]);
    return(
        <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
          
        <div style={{marginLeft:"50px",marginRight:"50px"}}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
      
        <TableHead style={{background:"purple"}}>
          <TableRow>
            <TableCell style={{color:"white",width:"20px"}}>ID</TableCell>
            <TableCell style={{color:"white"}} align="right">Name</TableCell>
            <TableCell style={{color:"white"}}  align="right">Batch</TableCell>
            <TableCell style={{color:"white"}}  align="right">Learning</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.learning}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
    );
}
export default Userdata;