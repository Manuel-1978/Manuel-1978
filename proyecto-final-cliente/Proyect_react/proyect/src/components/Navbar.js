import {Recursos} from './recursos';
import {NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="Navbar">
            <div> <img  src={Recursos().navbar} alt="logo"></img></div> 
            <nav className="linkCustomer">
                < NavLink className="linkPrincipal"  exact to="/" ><h1 >Principal</h1></NavLink>
                < NavLink className="linkUsers"  exact to="/Users" ><h1>Usuario</h1> </NavLink>
                < NavLink className="linkNew_user"  exact to="/New_user" > <h1>Nuevo Usuario</h1></NavLink>
                {/* {isAdmin && < NavLink className="linkUsers"  exact to="/Users" >Usuario</NavLink>} */}
            </nav>
        </div>
    )
}
