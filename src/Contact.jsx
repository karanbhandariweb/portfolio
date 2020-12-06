import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const Contact=() =>
{  const [data,setData]= useState({
    Name:"",
    Number:"",
    Emailaddress:"",
    Message:"",
}); 
const InputEvent=(event)=>
{
    const {name,value}=event.target;
    setData((preVal)=>{
    return{
         ...preVal,
         [name]:value,
    }
    })
} 

const formsub = ()=>{
alert("submitted")
};

const onCl = (event)=>{
  event.preventDefault();
  console.log(data);
  const cont = {
  Name: data.Name, 
  Number: data.Number,
  Emailaddress: data.Emailaddress,
  Message: data.Message
  }
  axios.post('http://localhost:9000/og',cont);
  }

    return(<>
        <section id="kon" className="text-center mt-3">
        <div className="container-fluid">
         <div className="row">
             <div className="col-6 mx-auto">
                 <h1 >CONTACT US</h1>
                 <form onSubmit={formsub}>
  <div className="my-3">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="Name" value={data.Name} onChange={InputEvent} placeholder="Enter your name" required/>
  </div>
  <div className="my-3">
    <label for="exampleFormControlInput1">Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="Number" value={data.Number} onChange={InputEvent} placeholder="Enter your number" required/>
  </div>
  <div className="my-3">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="Emailaddress" value={data.Emailaddress} onChange={InputEvent} placeholder="Enter your e-mail" required/>
  </div>
 
 
  <div class="my-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="" name="Message" value={data.Message} onChange={InputEvent} rows="3"></textarea>
  </div><button onClick={onCl} className="btn">Submit</button>
</form>

                 </div></div></div>
        </section>
    </>)
}
export default Contact;