import React from 'react';
import Cookies from 'universal-cookie';

const cookies= new Cookies();


export default function User_Page() {

const cerrarSesion=()=>{
    cookies.remove('id',{path:"/"});
    cookies.remove('name',{path:"/"});
    cookies.remove('lastName',{path:"/"});
    cookies.remove('empresa',{path:"/"});
    cookies.remove('email',{path:"/"});
    cookies.remove('username',{path:"/"});
    cookies.remove('phoNumber',{path:"/"});
    window.location.href='./';
    // history.push("/"); // react way
}
    
//ComponentDidMount () {if(cookies.get('username')){window.location.href="../User_Page"}};

    console.log('id: '+cookies.set('id'));    
    console.log('name: '+cookies.set('name'));
    console.log('lastName: '+cookies.set('lastName'));
    console.log('empresa: '+cookies.set('empresa'));
    console.log('email: '+cookies.set('email'));
    console.log('username: '+cookies.set('username'));
    console.log('phoNumber: '+cookies.set('phoNumber'));
                
            
    return (
        <div>
            esta es la pagina de usuario
            <br/>
            <button className="btn-user_page" onClick={()=>cerrarSesion()}> Cerrar Sesión</button>
        </div>
    )
}
