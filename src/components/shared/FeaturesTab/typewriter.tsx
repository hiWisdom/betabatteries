 "use client";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import './style.css';

const Typewrite = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
 
 return (

    <>
<br/>
<br/>
        <h1 className="typewrite flex special-text-2 text-[42px] font-[900]">
        👋 We Code and Create 
        
            <Typewriter
                options={{
                strings: [
                    // ", Clean User Interface.",
                    // ", Essential Business Pages.", 
                    // ", Fully Functional Integrations.", 
                    ", WordPress Solution.",
                    ", Web App Solution.",
                    ", Mobile App Solution.",
                    ", Customize ERP Solution.", 
                    // ", Custom Website Presentation and Solution.", 
                    // ", Custom Mobile Application Solution.",
                    // ", Custom WordPress Solution and Presentation.",
                    // ", Custom Online Shops & E-Commerce.",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            />

        </h1>

    <p className="lg:hidden">
         <Typewriter
                options={{
                strings: [
                    "We Code and Create WordPress Solution.",
                    "We Code and Create Web App Solution.",
                    "We Code and Create Mobile App Solution.",
                    "We Code and Create Customize ERP Solution.", 
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            />
    </p>
   
    
<br/>
<br/>
    </>

 ) 

}

export default  Typewrite;