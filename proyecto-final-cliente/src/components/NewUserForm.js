import{useState} from "react";
import {URL_USERS} from "../setting"
//import {useHistory} from 'react-router-dom';

export default function NewUsertForm() {

    const initialState={
            name:"",
            lastName:"",
            identity:"",
            company:"",
            email:"",
            username:"",
            password:"",           
            phoneNumber:""
   };

     const[users,setUsers]= useState(initialState)

    function handleInput(e) {

        const inputName= e.target.id;
        const newValue= e.target.value;
        setUsers({...users,...{[inputName]: newValue}})
        
    };
 

    //const history=useHistory(); 

   function submit(e) {
       
    e.preventDefault();  
  
      //setUsers(currentUsers => [...currentUsers,newUsers]);
        setUsers(initialState);

        const newUser ={
            name: users.name,
            lastName:users.lastName,
            identity:users.identity,
            company:users.company,
            email:users.email,
            username:users.username,
            password:users.password,           
            phoneNumber:users.phoneNumber
        };
     // Enviamos el newUser con POST
    const options = {
      method:'POST',
      // headers -> tipo de informacion JSON
      headers:{"Content-Type": "application/json"},
      // body -> json stringify
      body:JSON.stringify(newUser)
    };

    fetch(URL_USERS, options)
    .then(res=>res.json())
    .then(res=>{
      if (res.success){

        alert('Su cuenta ha sido creada.');
       // history.push('/Users');
       
      }
    })
   }
    return (
        <form className="form" onSubmit={submit}>
        <input id="name"        value={users.name}        onChange={handleInput} className="formInput" type="text"     placeholder="Introduce el nombre"/>
        <input id="lastName"    value={users.lastName}    onChange={handleInput} className="formInput" type="text"     placeholder="Introduce los apellidos"/>
        <input id="phoneNumber" value={users.phoneNumber} onChange={handleInput} className="formInput" type="text"     placeholder="Introduce el teléfono"/>
        <input id="email"       value={users.email}       onChange={handleInput} className="formInput" type="text"     placeholder="Introduce Email"/>        
        <input id="company"     value={users.company}     onChange={handleInput} className="formInput" type="text"     placeholder="Introduce nombre de Empresa"/>
        <input id="username"    value={users.username}    onChange={handleInput} className="formInput" type="text"     placeholder="Introduce su Username"/>
        <input id="password"    value={users.password}    onChange={handleInput} className="formInput" type="password" placeholder="Introduce el password"/>
        <input id="identity"    value={users.identity}    onChange={handleInput} className="formInput" type="text"     placeholder="Introduce DNI-NIF-CIF"/>
        <button id="btn-newuser" className="formButton" type="submit"  value="Registrar">REGISTRARSE</button>
        </form>
    )
  }