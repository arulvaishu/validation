import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function App() {
  const [email , setEmail] = useState("");
  const [password , setPassword] =useState("");
  const [errors , setErrors] = useState({email:"" , password:""});
  const[showpassword , setShowpassword] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault();
    const newErrors = {email:"" , password:""};
    let valid = true;
    if(email===""){
      newErrors.email="Enter your Email";
      valid=false;
      toast.error="Email is required";
    }

    if(password===""){
      newErrors.password="Enter your Password";
      valid = false;
    }else if(password.length<6){
      newErrors.password="Password must be atleast 6 characters long";
      valid=false;
      toast.error="Password is required";
    }
    setErrors(newErrors);
    if(valid){
      if(email==="vaishnavimurugesan@gmail.com" && password==="arulvaishu@2020"){
        // console.log("Form submited successfully");
        toast.success("form submitted successfully");
        setTimeout(()=>{
          window.location.href='/Login'
         } ,3000)

      }else{
        toast.error("invalid email or passwors")
      }
    }

  };

  const visibility=()=>{
    setShowpassword(!showpassword);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type='email' placeholder='Enter your Email' value={email}  onChange={(e) => setEmail(e.target.value)} required></input>
        <span style={{color:'red'}}>{errors.email}</span>
        <MdEmail />

      </div>
      <div>
        <label>Password:</label>
        <input type= {showpassword? "text" :"password"}
         placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
        <span onClick={visibility} >
          {showpassword ? <FaEye />:<FaEyeSlash />}</span>
          <span style={{color:'red'}}>{errors.password}</span>

      </div>
      <button>Submit</button>
      <ToastContainer />

    </form>
      
    
  )
}



   
        
      

    

  
      

