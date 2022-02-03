import { Link } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai';
import {BiDroplet} from 'react-icons/bi';

import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/"><AiOutlineHome/></Link></li>
                <li><Link to="/pedidos"><BiDroplet/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;