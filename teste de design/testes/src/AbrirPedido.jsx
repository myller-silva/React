import './AbrirPedido.css';

export default function AbrirPedido() {
    return(
        <div className="abrir-pedido-container">
            <h1>Abrir pedido</h1>
            <div className="abrir-pedido-content">
                <div className='descricao'> 
                    <label>Descrição</label>
                    <textarea placeholder='Descreva o pedido'/>
                </div>
                {/*  */}
                <div className='detalhes'>
                    <div>
                        <label>Qual o seu tipo sanguineo?</label>
                        {/* <input type="text"/> */}
                        <select>
                            <option>selecionar</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </div>
                    <div>
                        <label>Quantas bolsas você precisa?</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Número do WhatsApp</label>
                        <input type="tel"/>
                    </div>
                </div>
                {/*  */}
                {/* botao */}
            </div>
        </div>
    )
}
