import { BrowserRouter,Route, Switch } from "react-router-dom";
import Principal from './pages/Principal';
import Users from './pages/Users';
import New_user from './pages/New_user';
import Navbar from './components/Navbar';
import User_Page from './pages/User_Page';

export default function Router() {
    
    
    return (
        <BrowserRouter>
            <Navbar />
        <Switch>
            <Route exact path='/' component={Principal}/>
            <Route path="/Users" component={Users}/>
            <Route path="/New_user" component={New_user}/>
            <Route path="/User_Page" component={User_Page}></Route>
        </Switch>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    </BrowserRouter>
    )
}
