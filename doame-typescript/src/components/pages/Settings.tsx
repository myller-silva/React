import { Usuario } from "../model/Usuario"
// import { TiEdit } from 'react-icons/ti';
import { CgProfile } from "react-icons/cg";
import './Settings.css';

export function Settings(user: Usuario | any) {
    
    function editar(e:React.MouseEvent) {
        console.log(e);
    }

    return (
        <div id="settings">
        <h1>Configurar perfil</h1>
            {/* <div id="settings"> */}
                <div className="edit">
                    <div className="foto">
                        <CgProfile/>
                    </div>
                    <div className="content">
                        <span>Nome:</span>
                        <input type="text" placeholder="nome"/>
                    </div>
                    <div className="content">
                        <span>Email:</span>
                        <input type="email" placeholder="email"/>
                    </div>
                    <div className="content">
                        <span>Telefone:</span>
                        <input type="tel" placeholder="telefone"/>
                    </div>
                    
                    <div className="content">
                        <div id="btnEnviar">
                            <input type="submit" placeholder="nome"/>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}