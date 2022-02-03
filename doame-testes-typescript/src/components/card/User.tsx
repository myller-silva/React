import { CgProfile } from 'react-icons/cg';
import './User.css';

interface UserInterface{
    urlFoto: string;
    nome: string;
    endereco: string;
}

function User(user:UserInterface) {
    
    return(
        <div className='usuario'>
            <div className='profile'>
                {user.urlFoto?<img src={user.urlFoto} alt='foto'/>:<CgProfile/>}    
            </div>
            <div className='nome_endereco'>
                <h3 className='nome'>{user.nome}</h3>
                <span>{user.endereco}</span>
            </div>
        </div>
    )
}

export default User;