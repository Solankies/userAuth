import React from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const Signup=()=>{

let [first_name,setfirstName]= useState();
let [last_name,setlastName]= useState();
let [email,setEmail]=useState();
let [password,setPassword]= useState();
let navigate=useNavigate();
let collect=async()=>{


    let result =await fetch("http://localhost:8080/register",{
        method:"post",
        body: JSON.stringify({first_name,last_name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
    });
    result= await result.json();
    console.log(result);
if(result!=null){

    navigate("/login");
}

}

return (

<div className="signup">

<h2>Register</h2>
<input type="text" placeholder="enter first name" className="inputbox" value={first_name} onChange={(e)=>{setfirstName(e.target.value)}}></input>

<input type="text" placeholder="enter first name" className="inputbox" value={last_name} onChange={(e)=>{setlastName(e.target.value)}}></input>

<input type="email" placeholder="enter email" className="inputbox" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
<input type="password" placeholder="enter password" className="inputbox" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
<button onClick={collect}  type="button">submit</button>

</div>

)

}
export default Signup;