import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"

const Form = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {store, actions}=useContext(Context)

  function enviarDatos(e) {
   e.preventDefault()
   actions.login(email,password)
   setEmail("")
   setPassword("")
  }
  fetch('https://3000-4geeksacade-reacthellow-dhzw6ua1rhm.ws-us84.gitpod.io/home',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({"email":email,"password":password}) // body data type must match "Content-Type" header
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err)=>console.log(err))
  


   if (condition) {//true
    //bloque de codigo
   }else{//false
//bloque de codigo
   }




    return(
// En el return no podemos dejar las cosas sueltas por eso ponemos todo dentro del div(<></>)
      <>
      {store.auth === true ? <Navigate to="/login"/>:
    <form>
        <div className="mb-3" onSubmit={enviarDatos}>
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      }
      </>)}

export default Form;

