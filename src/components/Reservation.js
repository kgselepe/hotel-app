import React, { useEffect, useState } from 'react';
import star from "../components/PICTURE/star.png";
import {db} from '../Firebase';
import { collection, addDoc } from "firebase/firestore"; 



function Reservation(){
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const[adult, setAdult] = useState("")
  const[child, setChild] = useState("")
  const[room, setRoom] = useState("")
  const[checkin, setCheckIn] = useState("")
  const[checkout, setCheckOut] = useState("")

const reservation = (()=>{
  const collectionReF = collection(db, 'Reservation')


  const Reservation = {
    firstname:firstname,
    lastname:lastname,
    adult:adult,
    child:child,
    room:room,
    checkin:checkin,
    checkout:checkout,
   
  };
  addDoc(collectionReF, Reservation).then(()=>{
    alert("booked successfully")
  }).catch((err)=>{
    console.log(err) ;
  
  })
  
})


   
    return(
        
      <div class="container">

<div class="jumbotron2 jumbotron-fluid">
 <div>
 <h1>KAY'S HOTEL 
          <img className='pic4'src={star} alt='images'/> 
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
  </h1><br/>


 <h3>RESERVATION</h3>
           

 </div>

    <div>
  <div class="form-row">
    <div class="col">
    <label for="FirstName">First Name</label>
      <input onChange={(event)=>setFirstName(event.target.value)} type="text" class="form-control" placeholder="Enter first name"/>
    </div>
    <div class="col">
    <label for="LastName">Last Name</label>
      <input onChange={(event)=>setLastName(event.target.value)} type="text" class="form-control" placeholder="Enter Last name"/>
    </div>
  </div>
    <div class="col">
    <label for="Email">Email Address</label>
      <input type="text" class="form-control" placeholder="Enter Email"/>
    </div>
    <div class="col">
    <label for="Phone Number">Phone Number</label>
      <input type="text" class="form-control" placeholder="Enter Phone Number"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose</option>
        <option>Northern cape</option>
        <option>Northern west</option>
        <option>Western cape</option>
        <option>Gauteng</option>
        <option>Mpumalanga</option>
        <option>other..</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <select onChange={(event)=>setAdult(event.target.value)} className='box2' >
<option value="">Adult</option>
    <option value="room">1</option>
    <option value="room">2</option>
   
</select>
<select onChange={(event)=>setChild(event.target.value)} className='box2'>
<option value="">Child</option>
    <option value="room">1</option>
    <option value="room">2</option>
    <option value="room">3</option>

</select ><br/>



 
  <div class="form-check form-check-inline">
  <input onChange={(event)=>setRoom(event.target.value)}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Presidental suite</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={(event)=>setRoom(event.target.value)}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Duluxe</label>
</div>

<div class="form-check form-check-inline">
  <input onChange={(event)=>setRoom(event.target.value)}   class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">Double room </label>
</div>

<div class="form-check form-check-inline">
  <input onChange={(event)=>setRoom(event.target.value)}   class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4"/>
  <label class="form-check-label" for="inlineRadio3">Single room </label>
</div>
<br/>

<div class="form-group col-md-2">
      <label for="check">Check in</label>
<input onChange={(event)=>setCheckIn(event.target.value)} className='box2' type="date"   placeholder='check in'/>
 <label for="check">Check out</label>
<input onChange={(event)=>setCheckOut(event.target.value)} className='box2'  type="date"   placeholder='check out'/>

</div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit"  onClick={reservation}>Submit form</button>
</div>

  </div>  
   

    );

};



export default Reservation;