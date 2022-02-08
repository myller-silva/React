import {CgProfile} from 'react-icons/cg';
import {BiDroplet} from 'react-icons/bi';
import {RiHealthBookFill} from 'react-icons/ri';
import {SiWhatsapp} from 'react-icons/si';
import TiposCompativeis from './TiposCompativeis';
import './Pedido.css';

let foto="";
foto="https://avatars.githubusercontent.com/u/76014754?s=400&u=b231329faf83b64293b66fbdc0611a4c12bc7f66&v=4";
const nome="Myller Silva";
const localizacao="Fortaleza-CE";
const texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus quam amet, ut nunc massa tempus nunc aliquam placerat. Adipiscing placerat mauris urna, malesuada. Non sagittis vel pellentesque auctor nibh faucibus lobortis sem. Nibh eget vulputate pharetra, sem turpis porttitor tellus. Ut hac lorem adipiscing venenatis, sit. Parturient non nisi in vitae massa rhoncus elit lectus. Libero, quis morbi massa id cras purus vivamus. Enim praesent eget nisl, vitae. Tellus mattis dolor eu molestie leo sit mattis nec. Praesent vestibulum, integer quis quis tortor consequat feugiat aliquet interdum. Arcu enim, fames semper mauris, sit. Pellentesque pretium vel aliquam amet, tempus lacus, faucibus quam. Turpis vitae vehicula a venenatis sem auctor vitae. Scelerisque libero mi enim ultrices non. Egestas id placerat nascetur dolor at massa ac, scelerisque adipiscing. Dis pulvinar nisl adipiscing imperdiet ut pellentesque odio. Id nunc enim aliquet praesent. Augue euismod blandit tellus est. Id potenti urna nisl ut sit. Ultrices nibh lectus facilisis vulputate ipsum enim, blandit orci. Volutpat morbi ut commodo fermentum.";
const tipoSanguineo="AB-";
const quantidade=1; /*em litros*/

export default function Pedido(){
    return(
        <div>
        <h1>Pedido</h1>
            <div className='pedido'>
                {/*  */}
                <div className='content'>
                    <div className='user'>
                        <div className='user-foto'>
                            {foto?<img src={foto} alt="foto"/>:<CgProfile/>}
                        </div>
                        <div className='user-detalhes'>
                            <h2>{nome}</h2>
                            <p>{localizacao}</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='content'>
                    <p>{texto}</p>
                </div>
                {/*  */}
                <div className='content'>
                    <div className='detalhes'>
                        <div className='bloco'>
                            <BiDroplet/>
                            <div>
                                <p>Tipos compativeis: </p>
                                <TiposCompativeis tipoSanguineo={tipoSanguineo} />
                            </div>
                        </div>
                        <div className='bloco'>
                            <RiHealthBookFill/>
                            <p>Quantidade: </p>
                            <span>{quantidade}L</span>
                        </div>
                    </div>
                </div> 
                {/*  */}
                <div className='content'>
                    <div className='btn'>
                        <SiWhatsapp/>
                        <span>Entrar em contato</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
