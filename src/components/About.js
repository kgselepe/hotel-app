import React from 'react';
import PIC2 from '../components/PICTURE/PIC2.jpg';
import PIC3 from "../components/PICTURE/PIC3.jpg";
import PIC5 from "../components/PICTURE/PIC5.jpeg";
import star from "../components/PICTURE/star.png";

 function About(){

    return(
    <div class="container">
             <div class="row">
            <div class="col-lg-6 col-sm-12 program">
            <h4>WELCOME TO KAY'S HOTEL</h4>
            <img className='pic4'src={star} alt='images'/> 
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
            <img className='pic4'src={star} alt='images'/>
        <p style={{color:'#FF0063'}}>Make golden memories with us:</p>
             <p>Choose our five-star hotel and experience heaven on earth</p> <br/><br/>
             <button className='btn'>VIEW DETAILS<a href=''></a></button>


        </div>
        
     <div class="col-lg-6 col-sm-12 program">
     <img className='pic1'src={PIC2} alt='images'/> 
     <img className='pic2'src={PIC5} alt='images'/>
    <img className='pic3'src={PIC3} alt='images'/>
   
        
       
        </div>
        </div>
        </div>
        
        
    
     
   
     
    );

 };


export default About;