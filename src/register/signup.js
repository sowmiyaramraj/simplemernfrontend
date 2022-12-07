import React, { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Formik} from "formik";
import Signin from "./signin";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Signup(){
    const navigate=useNavigate();
    const [userStateData,setUserStateData]=useState([]); 
    const validateform=(formdata)=>{
    var errors={};
    if(formdata.firstname==='') errors.firstname=("firstname is required"); 
    if(formdata.lastname==='') errors.lastname=("lastname is required"); 
    if(formdata.email==='') errors.email=("email is required"); 
    if(formdata.password==='') errors.password=("password is required"); 
    if(formdata.confirmpassword==='') errors.confirmpassword=("confirmpassword is required"); 
    if(formdata.mobilenumber==='') errors.mobilenumber=("mobilenumber is required"); 
    if(formdata.gender==='') errors.gender=("gender is required");
    return errors;
   };
   const handleSubmit=async(formdata, { resetForm })=>{
    console.log(formdata);

    // signup axios call

    const response= await axios.post("http://localhost:3001/register/signup",
       
        {
         fristname: formdata.fristname,
         lastname: formdata.lastname,
         email: formdata.email,
         password: formdata.password,
         confirmpassword: formdata.confirmpassword,
         gender: formdata.gender,
         mobilenumber: formdata.mobilenumber,
         
        });
        setUserStateData([...userStateData,response.data]);
        navigate("/users");
        resetForm();
       
};
const handlesubmit1=()=>{
  navigate("/Signin")
}
    return(
      <div>
      <Box sx={{ flexGrow: 1 }}>
     
         
           <Formik
       initialValues={{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        mobilenumber:"",
        gender:"",
       }}
       validate={(formdata)=>validateform(formdata)}
       onSubmit={handleSubmit}
     >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
         isSubmitting,
       }) =>(
       
       <Box
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
       onSubmit={handleSubmit}
       >
        {/* firtsname */}
       
       <TextField id="Firstname" 
       label="First Name" 
       variant="filled"
       name="firstname" 
       value={values.firstname}     
        onChange={handleChange}
        onBlur={handleBlur} /><br/>
        <span style={{color:"green"}}>{touched.firstname && errors.firstname}</span><br/>
       {/* Lastname */}
       <TextField id="Lastname" 
       label="Last Name" 
       name="lastname" 
       variant="filled"
       value={values.lastname}    
       onChange={handleChange}
       onBlur={handleBlur}   /><br/>
        <span style={{color:"green"}}>{touched.lastname && errors.lastname}</span><br/>
               {/* Email */}
       <TextField id="Email" 
       label="Email address" 
        name="email" 
       value={values.email}
       type="email"
       variant="filled"       
       onChange={handleChange}
       onBlur={handleBlur}/><br/>
        <span style={{color:"green"}}>{touched.email && errors.email}</span><br/>
       {/* password */}
       <TextField id="password" 
       label="password" 
        name="password" 
       type="password"
       value={values.password}
       variant="filled"            
       onChange={handleChange}
       onBlur={handleBlur}   /><br/>
        <span style={{color:"green"}}>{touched.password && errors.password}</span><br/>
       {/* confirmpassword */}
       <TextField id="Confirmpassword" 
       label="Confirm password" 
       name="confirmpassword" 
       type="password"
       value={values.confirmpassword}
       variant="filled"       
       onChange={handleChange}
       onBlur={handleBlur}/><br/>
        <span style={{color:"green"}}>{touched.confirmpassword && errors.confirmpassword}</span><br/>
       {/* Mobilenumber */}
       <TextField id="Mobilenumber" 
       label="Mobile number"
        name="mobilenumber"
        type="number"  
       value={values.mobilenumber}
       variant="filled"             
       onChange={handleChange}
       onBlur={handleBlur}/><br/>
        <span style={{color:"green"}}>{touched.mobilenumber && errors.mobilenumber}</span><br/>
       {/* gender */}
       <FormControl>
       <FormLabel id="demo-radio-buttons-group-label">Gender  </FormLabel>
       <RadioGroup
         aria-labelledby="demo-radio-buttons-group-label"
         name="gender"
         value={values.gender}
         onChange={handleChange}
         onBlur={handleBlur}
       >
         <FormControlLabel value="male" control={<Radio />} label="male" />
         <FormControlLabel value="female" control={<Radio />} label="female" />
         </RadioGroup>
         <span style={{color:"green"}}>{touched.gender && errors.gender}</span><br/>
     </FormControl><br/>
    
     <Button variant="contained" type="submit" disabled={isSubmitting} >Submit</Button>
       </Box>
       )}
       </Formik>
       <hr/>
       <form onSubmit={handlesubmit1}>
       <span>Already registered User? </span>
       <Button variant="text" type="submit">Login</Button>
      </form>
        
    </Box>
</div>
    );
}

export default Signup;