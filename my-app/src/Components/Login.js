

import React from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Login=()=>{

    let [name,setName]= useState();
let [email,setEmail]=useState();
let [password,setPassword]= useState();
let navigate=useNavigate();

let login=async()=>{


    let result =await fetch("http://localhost:8080/login",{
        method:"post",
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
    });
    result= await result.json();
    console.log(result);
if(result[1].email==email){

    navigate("/add");
}else{
    alert("please register first");
}

}

    return(


        <div className='Login'>
<h3>login</h3>
<input className='inputbox' type='email' placeholder='enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
<input className='inputbox' type ="password" placeholder='enter password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
<button onClick={login} className='inputbox' type='button'>Login</button>
</div>


    )
}


export default Login;