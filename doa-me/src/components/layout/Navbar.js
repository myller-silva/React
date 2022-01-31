import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiDroplet} from 'react-icons/bi';


function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/"><AiOutlineHome/></Link></li>
                <li className={styles.item}><Link to="/pedidos"><BiDroplet/></Link></li>
                {/* <li className={styles.item}><Link to="/contatos">Contatos</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;