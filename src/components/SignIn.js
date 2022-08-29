import React from 'react';

import star from "../components/PICTURE/star.png";
import {auth} from '../Firebase';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { Next } from 'react-bootstrap/esm/PageItem';
 
function SignIn(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("")

  const goReg = ()=>{
    navigate('/signup')

  }

  const SignIn = ()=> {
    signInWithEmailAndPassword(auth, email, password)
    .then (auth=>{navigate('/home')})
    .catch(error=>console.error(error))

  }

    return(
       
     <div class=" container">


<div class="jumbotron4 jumbotron-fluid">
 <div>
 <h1>KAY'S HOTEL
            <img className='pic4'src={star} alt='images'/> 
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
  </h1><br/>

 </div>

 </div><br/><br/><br/><br/>


<div className='Signin'>

<h3>SIGN IN</h3><br/>
  <div class="row">

  <div class="col">
    <label for="Email">Email </label>
      <input onChange={(event)=>setEmail(event.target.value)} type="text" class="form-control" placeholder="Enter Email"/>
    </div><br/>

    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input onChange={(event)=>setPassword(event.target.value)}  type="password" class="form-control" id="inputPassword4" placeholder="Enter Password"/>
    </div>
    
  </div>
 
  <button  onClick={SignIn }   style={{margin:'10px'}} type="submit" class="btn btn-primary">Sign In</button>

  
  <button onClick={goReg } type="submit" class="btn btn-primary">Sign Up</button><br/>
  Forgetten password? <button style={{background:'#151515'}}  onClick={'' } type="submit" class="btn btn-primary">Reset</button>
</div>


        </div>
     

    )
};
export default SignIn; 