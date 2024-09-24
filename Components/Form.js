import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
    const [action,SetAction]=useState("signup")



  return (
    <div className='container'>
        <h1>{action}</h1>
        <div className="input-data">
            {action==="login"?<div></div>: <div className='input'>
            <input type="text" placeholder='Enter your Name' />
            </div>}
         
        
            <div className='input'>
            <input type="email" placeholder='Enter your Email' />
            </div>
            <div className='input'>
            <input type="password" placeholder='Enter your Password' />
            </div>
            </div>
            <div className="btn">
                <button className={action==="login"?"submit grey":"submit"} onClick={()=>SetAction("signup")} >signup</button>
                <button  className={action==="signup"?"submit grey":"submit"} onClick={()=>SetAction("login")}>login</button>
               
            </div>
          
           
        
    </div>
    
  )
}

export default Form
