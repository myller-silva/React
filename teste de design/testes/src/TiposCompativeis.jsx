import './TiposCompativeis.css';

function TiposCompativeis({tipoSanguineo}) {
    const array = tiposCompativeis(tipoSanguineo);
    return (
        <ul className="tipos-compativeis">
            {array.map( (array) => 
                <li key={array.toString()} >
                    {array}
                </li>
            )}
        </ul>
    )
}
function tiposCompativeis(tipoSanguineo) {
    if(tipoSanguineo==="O-")    return ["O-"]
    if(tipoSanguineo==="O+")    return ["O+", "O-"]
    if(tipoSanguineo==="A-")    return ["A-", "O-"]
    if(tipoSanguineo==="B-")    return ["B-", "O-"]
    if(tipoSanguineo==="B+")    return ["B+, B-, O+, O-"]
    if(tipoSanguineo==="A+")    return ["A+", "A-","O+", "O-"]
    if(tipoSanguineo==="AB-")   return ["AB-", "A-", "B-", "O-"]
    if(tipoSanguineo==="AB+")   return ["Todos"]
    return "erro"
}

export default TiposCompativeis;