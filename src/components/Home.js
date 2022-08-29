
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import About from "./About"
import Gallary from './Gallary';
import Reservation from './Reservation';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import{auth} from '../Firebase';
import {useNavigate} from 'react-router-dom';



function Home(){
  const navigate = useNavigate();
  const[user, loading, error] = useAuthState(auth);
 
  

   
    return(
      <>
   
      
     
<div class="container">
<div class="jumbotron jumbotron-fluid">


<Navbar bg="light" expand="lg">
       
        <div className='nav'> 
          <Navbar.Brand href=""></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             
             
              <Nav.Link href="Home.js">HOME</Nav.Link>
              <Nav.Link href="About.js">ABOUT US</Nav.Link>
              <Nav.Link href="Contact.js">CONTACT US</Nav.Link>
            </Nav>
       
       

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="CREATE ACCCOUNT"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"></Button>
            </Form>
          </Navbar.Collapse>
      
          </div>
      
      </Navbar>
     

    <h1>WELCOME TO KAY'S HOTEL</h1>
    <br/>


    <button className="button">GET STRATED NOW  </button> <button className="button2">LEARN MORE</button>
    
    </div>
    <div>



 <div className='bookings'>
<div className='booking1'>  
    <h6>SEARCH</h6>
  <h6 style={{color:'#FF0063'}}>YOUR ROOMS</h6>
</div>
  
<div className='booking2'>
<input className='box2' type="date"   placeholder='check in'/>
<input className='box2'  type="date"   placeholder='check out'/>
<select className='box2' >
    <option  value="">Room</option>
    <option  value="room">Presidental suite</option>
    <option value="room">Duluxe</option>
    <option value="room">Double room</option>
    <option value="room">Single room</option>
</select><br/>
<select className='box2' >
<option value="">Adult</option>
    <option value="room">1</option>
    <option value="room">2</option>
   
</select>
<select className='box2'>
<option value="">Child</option>
    <option value="room">1</option>
    <option value="room">2</option>
    <option value="room">3</option>

</select >

<select className='box3'>SEARCH
<option value="">SEARCH</option>
    <option value="room">Presidental suite</option>
    <option value="room">Duluxe</option>
    <option value="room">Double room</option>
    <option value="room">Single room</option>
</select>
</div>
</div>

 </div> 

  </div>
 <About/><br/><br/>
 <Gallary/>

 
 </>
      
    );

};



export default Home;