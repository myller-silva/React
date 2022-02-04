import { Usuario } from "../model/Usuario"
import './Settings.css';
import { TiEdit } from 'react-icons/ti';

export function Settings(user: Usuario | any) {
    
    function editar(e:React.MouseEvent) {
        console.log(e);
    }

    return (
        <div id="settings">
            <h1>Configurar perfil</h1>
            <div className="settingsUser">
                <p>
                    <img src="https://avatars.githubusercontent.com/u/76014754?v=4" width="50%" alt="foto de perfil"/>
                    <span onClick={editar}><TiEdit /></span>
                </p>
                <p>
                    Nome: <input placeholder={user.nome ?? "indefinido"} />
                    <span onClick={editar}><TiEdit /></span>
                </p>
                <p>
                    Endereço: <input placeholder={user.endereco ?? "indefinido"}/>
                    <span onClick={editar}><TiEdit /></span>
                </p>
                <p>
                    Telefone: <input placeholder={user.telefone ?? "indefinido"}/>
                    <span onClick={editar}><TiEdit /></span>
                </p>
                <p>
                    Tipo sanguíneo: {user.tipoSanguineo ?? ""}
                    <select name="tipo sanguineo">
                        <option value="indefinido" disabled>selecionar</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    {/* <span onClick={editar}><TiEdit /></span> */}
                </p>
            </div>
        </div>
    )
}