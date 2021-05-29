
import {useState} from 'react';
import {URL_USERS} from '../setting';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies= new Cookies();

export default function Userlogin() {

      const [users, setUsers] = useState('');
        const handleChange=e=>{
         const{name,value}= e.target;
         setUsers({...users,[name]:value})
       
        }

       

      const iniciarSesion= async()=>{
           await axios.get(URL_USERS,{ params:{username:users.username,password:users.password}})
           .then(response=>{
              return response.data; 
                })
           .then(response=>{
              if(response.length>0){
                  let respuesta=response[0];
                  cookies.set('id',respuesta.id,{path:"/"});
                  cookies.set('name',respuesta.name,{path:"/"});
                  cookies.set('lastName',respuesta.lastName,{path:"/"});
                  cookies.set('empresa',respuesta.empresa,{path:"/"});
                  cookies.set('email',respuesta.email,{path:"/"});
                  cookies.set('username',respuesta.username,{path:"/"});
                  cookies.set('phoNumber',respuesta.phoNumber,{path:"/"});
                  alert(`Bienvenido ${respuesta.name} ${respuesta.lastName}`);
                  window.location.href="../User_Page";
                  }else{
                      alert('El usuario o la contraseña no son correctos.');
                  }
                })
           .catch(error=>{
             console.log(error);
         })
        };

      //ComponentDidMount () {if(cookies.get('username')){window.location.href="../User_Page"}};
        
    return (
        <div>
             <div className="userLogin">
                        <div className="userLogin2">
                            <label >Usuario: </label>
                            <br/>
                            <input type="text" className="inputuser" name="username" onChange={handleChange} />
                            <br/>
                            <label >Password: </label>
                            <br/>
                            <input type="password" className="inputpassword" name="password" onChange={handleChange} />
                            <br/><br/>
                            <button className="btn-access" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
                        </div>
                    </div>
        </div>
    )
}
