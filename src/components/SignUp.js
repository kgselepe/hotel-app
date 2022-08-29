import React from 'react';
import star from "../components/PICTURE/star.png";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import {auth} from '../Firebase';
import {signUpWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import SignIn from './SignIn';
import { click } from '@testing-library/user-event/dist/click';


function SignUp(){

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("")

    const Reg = ()=> {
      alert('click')
      createUserWithEmailAndPassword (auth, email, password)
      .then (auth=>{navigate('/')})
      .catch(error=>console.error(error))
  


  }
    return(
        <div class= "container">


<div class="jumbotron3 jumbotron-fluid">
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



 <div className='Signup'>
 <h3>SIGN UP</h3>
  <div class="row">
  
  <div class="col">
    <label for="FirstName">First Name</label>
      <input type="text" class="form-control" placeholder="Enter first name"/>
    </div><br/>
    <div class="col">
    <label for="LastName">Last Name</label>
      <input type="text" class="form-control" placeholder="Enter Last name"/>
    </div><br/>
   
    <div class="form-group col-md-6">
    <label for="inputEmai4">Email</label>
    <input onChange={(event)=>setEmail(event.target.value)} type="text" class="form-control" placeholder="Enter Email"/>
 
     </div>
  
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input onChange={(event)=>setPassword(event.target.value)}  type="password" class="form-control" id="inputPassword4" placeholder="Enter Password"/>
      
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4"> Confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password"  />

    </div>
  </div>
  
 

  <button onClick={Reg } type="submit" class="btn btn-primary">Sign Up</button>
  </div>

        </div>

    )
};
export default SignUp;