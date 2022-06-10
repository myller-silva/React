import { Link } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai';
import {BiDroplet} from 'react-icons/bi';

import './Navbar.css';


function Navbar() {
    return(
        <nav className="navbar">
            <ul className="list-navbar">
                <li className="list-navbar-item"><Link to="/"><AiOutlineHome/></Link></li>
                <li className="list-navbar-item"><Link to="/pedidos"><BiDroplet/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;